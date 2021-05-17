import React from 'react';
import { Button, Card } from 'react-bootstrap';
import NavigationBar from '../../components/navigationBar/navigation_bar';
import './landing_page.css';
export default function LandingPage() {
    return (
        <div className="1">
        
            <div className="container-fluid d-flex flex-column min-vh-100 text-light" id='section1'>
                <div className="row"><NavigationBar/></div>
            
                <div className="row d-flex flex-grow-1 align-content-center justify-content-center" >
                    <div className="col-12 text-center">
                        <h1 className='display-4 mx-auto mb-5'>
                            <strong>
                                Find the best gyms near you in no time. 
                    </strong>
                        </h1>
            
                          
              
                       <input className="form-control px-3 py-2 rounded-pill w-50 mx-auto bg-transparent text-light " type="text" placeholder="Search for the best GYM near you" aria-label="Search" />
                        <br/>
                        <Button className='mx-auto  rounded-pill ' variant='light '>
                           Go
                        </Button>
                    
                        
            
                    </div>
                    
                </div>
            </div>
            <div className="container-fluid min-vh-100 pt-4" id='section2'>
                <div className="container text-center text-light">
                    <h1>From over 54+ States to choose from</h1>
                    <br/>
                    <div className="row d-flex justify-content-around p-3">
                            <div className="col-lg-3  p-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3  p-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="row d-flex justify-content-around mt-lg-3 p-3">
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="row d-flex justify-content-around mt-lg-3 p-3">
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}