import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import "./landing_page.css";
import gym from './gym.jpg';
import yoga from './yoga.jpg';
import happy from './happy.jpg';
export default function LandingPage() {
    const his = useHistory();
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="1">
            <div className="container-fluid d-flex flex-column min-vh-100 text-dark">
                <div className="row">
                    <NavigationBar />
                </div>
                <div className="row d-flex flex-grow-1 align-content-center justify-content-center">
                    <div className="col-12 text-center">
                        <h1 className="display-4 mx-auto mb-5">
                            <strong>
                                Find the best gyms near you in no time.
                            </strong>
                        </h1>
                        <form
                            onSubmit={() => his.push("/search/" + searchTerm)}
                        >
                            <input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="form-control px-3 py-2 rounded-pill w-50 mx-auto bg-transparent text-dark border-dark"
                                type="text"
                                placeholder="Search for the best GYMs near you"
                                aria-label="Search"
                            />
                            <br />
                            <Button
                                type="submit"
                                className="mx-auto  rounded-pill "
                                variant="success "
                            >
                                Go
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-4">
                <div className="container text-center text-dark">
                    
                    <br />
                    <div className="d-flex justify-content-around flex-wrap flex-lg-nowrap p-3">
                            <div className="card" id="lcard">
                                <div className="card-body">
                                    <h5 className="card-title">Gyms and breakfast</h5>
                                    <p className="card-text">
                                        
                                    </p>
                                    <img src = {gym}/>
                                </div>
                            </div>
                            <div className="card" id="lcard">
                                <div className="card-body">
                                    <h5 className="card-title">Yoga and meditation</h5>
                                    <p className="card-text">
                                    </p>
                                    <img src = {yoga}/>
                                </div>
                            </div>
                            <div className="card" id="lcard">
                                <div className="card-body">
                                    <h5 className="card-title">Happiness</h5>
                                    <p className="card-text">
                                    
                                    </p>
                                    <img src = {happy}/>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
