import React from 'react';
import { Button, Card } from 'react-bootstrap';
import NavigationBar from '../../components/navigationBar/navigation_bar';
import './landing_page.css';
export default function LandingPage() {
    return (
        <div className="d-flex flex-grow-1 flex-column">
        
            <div className="container-fluid d-flex flex-column min-vh-100 text-light" id='row1'>
                <div className="row"><NavigationBar/></div>
            
                <div className="row d-flex flex-grow-1 align-content-center justify-content-center" >
                    <div className="col-12 text-center">
                        <h1 className='display-4 mx-auto mb-5'>
                            <strong>
                                Find the best gyms near you in no time. 
                    </strong>
                        </h1>
            
                          
                   <div className="diov d-flex  mx-auto w-50">
                       <input className="form-control py-2 border-right " type="text" placeholder="Search for the best GYM near you" aria-label="Search" />
                        <Button className='mx-auto' variant='outline-light '>
                           Go
                        </Button>
                    </div>
                        
            
                    </div>
                    
                </div>
            </div>
            <br/>
            <div className="container-fluid min-vh-100">
                <div className="row  bg-danger">
                    <div className="col-md-4 d-flex justify-content-center bg-info"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></div>
                    <div className="col-md-4 d-flex justify-content-center bg-info"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></div>
                    <div className="col-md-4 d-flex justify-content-center bg-info "><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></div>

                </div>
            </div>
        </div>
    )
}