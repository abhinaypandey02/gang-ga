import NavigationBar from "../../components/navigationBar/navigation_bar";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./admin_page.css";
import { useHistory } from "react-router";
import { signUpWithEmailPassword } from "../../utils/firebase/auth";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StarIcon from "@material-ui/icons/Star";
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
                    <div className="container  d-flex flex-column">
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
                        <br/>
                        <h1><span className='text-light'>Available Gyms</span></h1>
                        <div className="row">
                        <div className="col-12 ">
                                    <div
                                        className="card mt-4 mx-auto  rounded-0"
                                        style={{ maxWidth: "1000px" }}
                                    >
                                        <div className="row g-0">
                                            <div className="col-md-4 p-4">
                                                <img
                                                    className="img-fluid"
                                                    src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                                />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body text-start">
                                                    <h4 className="card-title">
                                                        <strong>
                                                            Gym Namne
                                                        </strong>
                                                    </h4>
                                                    <h6 className="text-muted">
                                                        2km
                                                    </h6>
                                                    <br />
                                                    <span className="badge bg-success py-auto">
                                                        <h6 className="py-auto my-auto">
                                                            4.5
                                                            <StarIcon fontSize="small" />{" "}
                                                        </h6>{" "}
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <CheckCircleOutlineIcon fontSize="small" />
                                                    XYZ yes{" "}
                                                    <CheckCircleOutlineIcon fontSize="small" />
                                                    XYZ yes{" "}
                                                    <CheckCircleOutlineIcon fontSize="small" />
                                                    XYZ yes
                                                    <br />
                                                    <br />
                                                    <p className="card-text">
                                                        This is a wider card
                                                        with supporting text
                                                        below as a natural
                                                        lead-in to additional
                                                        content. This content is
                                                        a little bit longer.
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">
                                                            Last updated 3 mins
                                                            ago
                                                        </small>
                                                    </p>
                                                    <p className="text-danger h3 strong">
                                                        $32189
                                                    </p>
                                                    <br />
                                                    <Button
                                                        
                                                        variant="outlined"
                                                        className="m-2"
                                                        style={{
                                                            color: "#fff",
                                                            border: "1px solid #fff",
                                                        }}
                                                    >
                                                        VIEW DETAILS
                                                    </Button>
                                                    <Button
                                                       
                                                        variant="primary"
                                                        className="m-2"
                                                        color="info"
                                                    >
                                                        BOOK NOW
                                                    </Button>
                                                </div>
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