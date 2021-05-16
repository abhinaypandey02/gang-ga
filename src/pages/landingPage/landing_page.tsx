import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './landing_page.css';
export default function LandingPage() {
    return (
        <div className="d-flex flex-grow-1 flex-column">
            <div className="container-fluid d-flex min-vh-100 text-light">
                <div className="row flex-grow-1" id='row1'>
                    <div className="col-md-6 d-flex text-start ps-5 text-wrap justify-content-center flex-column">
                        <h1 className='display-4'>
                            <strong>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eius id sunt ut officiis natus deserunt culpa accusamus.
                    </strong>
                        </h1>
                        <div className="x">
                            <Button className='w-25 m-3 rounded-pill ' size='lg' variant='outline-light'>
                                Learn More
                </Button>
                            <Button className='w-25 m-3 rounded-pill' size='lg' variant='dark '>
                                Contact Us
                </Button>
                        </div>
                    </div>
                    <div className="col-md-6  d-flex text-start ps-5 text-wrap justify-content-center align-items-center flex-row ">

                        <input className="form-control w-75 rounded-pill" type="text" placeholder="Search for the best GYM near you" aria-label="Search" />
                        <Button className=' m-3 rounded-pill' variant='outline-light '>
                            Search Now
                </Button>
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