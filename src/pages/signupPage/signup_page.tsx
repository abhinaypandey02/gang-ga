
import React from "react";
import {Button, Form } from "react-bootstrap";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import "./signup_page.css";

export default function SignupPage(){
    return(
        <div>
            <NavigationBar/>
            <h1 className='display-3 text-light m-3'>Signup</h1>
            <div className="container d-flex flex-column">
            <div className="card text-start mx-auto" id='scard'>
                <div className="row g-0">
                 
                  <div className="col">
                    <div className="card-body">
                    <Form>
                        <Form.Group controlId="formBasicEmail" className='mb-2'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className='rounded-pill bg-transparent text-light'/>
                  
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className='mb-2 rounded-pill bg-transparent text-light'/>
                            <Form.Label>Re-enter Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className='rounded-pill mb-2 bg-transparent text-light'/>
                        </Form.Group>
              
                        <Button variant="light" className='rounded-pill my-2'>Signup</Button>
                        </Form>
                    </div>
                  </div>
                </div>
             
              </div>
              <h6 className='text-light mx-auto my-2'>Member already?<Button variant="link">Login</Button>here</h6>
              
              </div>
              
        </div>
    )
}