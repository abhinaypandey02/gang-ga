import NavigationBar from "../../components/navigationBar/navigation_bar";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./admin_page.css";
import { useHistory } from "react-router";
import { signUpWithEmailPassword } from "../../utils/firebase/auth";
import { defaultUser } from "../../interfaces/user";
import { v4 } from 'uuid';
import { addUser } from "../../utils/firebase/firestore";
import CheckboxLabels from "../../components/materialuiComponents/checkBox/checkbox";
export default function AdminPage() {
    const his = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    function onSubmit(data: any) {
        const user = defaultUser;
        user.email = data.email;
        user.name = data.email;
        user.uid = v4();
        signUpWithEmailPassword(data.email, data.password).then(() => {
            addUser(user).then(() => {
                his.push('/')
            }).catch(err => console.error(err))
        });
    }
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="container d-flex flex-column">
                        <div className="col-md-7 mx-auto">
                            <div className="card text-start mx-auto" id="acard">
                                <div className="row g-0">
                                    <div className="col">
                                        <div className="card-body">
                                            <Form onSubmit={handleSubmit(onSubmit)}>
                                                <Form.Group
                                                    controlId="formBasicEmail"
                                                    className="mb-2"
                                                >
                                                    <Form.Label>
                                                        Gym Name
                                                    </Form.Label>
                                                    <Form.Control
                                         
                                                        type="email"
                                                        placeholder="Gym Name"
                                                        className="rounded-pill bg-transparent text-light"
                                                    />

                                                </Form.Group>
                                                <Form.Group
                                                    controlId="formBasicEmail"
                                                    className="mb-2"
                                                >
                                                    <Form.Label>
                                                        Description
                                                    </Form.Label>
                                                    <Form.Control
                              
                                                        type="email"
                                                        placeholder="Description"
                                                        className="rounded-pill bg-transparent text-light"
                                                    />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Location</Form.Label>
                                                    <Form.Control
                                               
                                                        type="password"
                                                        placeholder="Location"
                                                        className="mb-2 rounded-pill bg-transparent text-light"
                                                    />
                                                    <Form.Label>
                                                        Price
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Price"
                                                        className="rounded-pill mb-2 bg-transparent text-light"
                                                    />
                                                    <Form.Label>
                                                        State
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="State"
                                                        className="rounded-pill mb-2 bg-transparent text-light"
                                                    />
                                                    <Form.Label>
                                                        Area
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Area"
                                                        className="rounded-pill mb-2 bg-transparent text-light"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Epic Checkbox Properties</Form.Label>
                                                        <CheckboxLabels/>
                                      
                                                    
                                                    </Form.Group>
                                                

                                                <Button
                                                    type="submit"
                                                    variant="light"
                                                    className="rounded-pill my-2"
                                                >
                                                    Add Gym
                                        </Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}