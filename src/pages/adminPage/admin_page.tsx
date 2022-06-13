import NavigationBar from "../../components/navigationBar/navigation_bar";
import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./admin_page.css";
import { useHistory } from "react-router";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StarIcon from "@material-ui/icons/Star";
import AddGymForm from "./addGymForm/add_gym_form";
export default function AdminPage() {
    const his = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className="text-center">
            <NavigationBar />
            <h1 className='text-light display-2'>Admin Console</h1>
            <hr style={{color: '#fff'}} />
            <div className="container">
            <h1 className='text-light m-3'>Add Gym/Park</h1>

                <div className="row">
                    <div className="container  d-flex flex-column">
                        <div className="col-md-7 mx-auto">
                            <div className="card text-start mx-auto" id="acard">
                                <div className="row g-0">
                                    <div className="col">
                                        <div className="card-body">
                                            <AddGymForm/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}