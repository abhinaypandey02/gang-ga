import React from "react";
import { Button, Form } from "react-bootstrap";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import { useForm } from "react-hook-form";
import "./signup_page.css";
import { useHistory } from "react-router";
import { signUpWithEmailPassword } from "../../utils/firebase/auth";
import { defaultUser } from "../../interfaces/user";
import {v4} from 'uuid';
import { addUser } from "../../utils/firebase/firestore";
import { useUser } from "../../contexts/user_context";
export default function SignupPage() {
    const his=useHistory();
    const [user,setUser]=useUser();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    function onSubmit(data:any){
        const user=defaultUser;
        user.email=data.email;
        user.name=data.email;
        user.uid=v4();
        signUpWithEmailPassword(data.email,data.password).then(()=>{
            addUser(user).then(()=>{
                setUser(user)
                his.push('/')
            }).catch(err=>console.error(err))
        });
    }
    return (
        <div>
            <NavigationBar />
            <h1 className="display-3 text-light m-3">Signup</h1>
            <div className="container d-flex flex-column">
                <div className="col-md-7 mx-auto">
                    <div className="card text-start mx-auto" id="scard">
                        <div className="row g-0">
                            <div className="col">
                                <div className="card-body">
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Form.Group
                                            controlId="formBasicEmail"
                                            className="mb-2"
                                        >
                                            <Form.Label>
                                                Email address
                                            </Form.Label>
                                            <Form.Control
                                                {...register("email")}
                                                type="email"
                                                placeholder="Enter email"
                                                className="rounded-pill bg-transparent text-light"
                                            />
                                            
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                {...register("password")}
                                                type="password"
                                                placeholder="Password"
                                                className="mb-2 rounded-pill bg-transparent text-light"
                                            />
                                            <Form.Label>
                                                Re-enter Password
                                            </Form.Label>
                                            <Form.Control
                                                {...register("confirmPassword")}
                                                type="password"
                                                placeholder="Password"
                                                className="rounded-pill mb-2 bg-transparent text-light"
                                            />
                                        </Form.Group>

                                        <Button
                                         type="submit"
                                            variant="light"
                                            className="rounded-pill my-2"
                                        >
                                            Signup
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className="text-light mx-auto my-2">
                    Member already?<Button variant="link">Login</Button>here
                </h6>
            </div>
        </div>
    );
}
