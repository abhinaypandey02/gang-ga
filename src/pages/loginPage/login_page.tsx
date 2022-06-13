
import { LogoDev } from "@mui/icons-material";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import { signInWithEmailPassword } from "../../utils/firebase/auth";
import "./login_page.css";

export default function LoginPage() {
  const his = useHistory();
  const { register, handleSubmit } = useForm();
  function onSubmit(data: any) {
    signInWithEmailPassword(data.email, data.password);
  }
  return (
    <div>
      <NavigationBar login={true} />
      <h2 className="text-light m-3">Login to VYAYAMSHALA</h2>
      <div className="container">
        <div className="col-md-7 mx-auto">
          <div className="card text-start mx-auto" id='scard'>
            <div className="row g-0">

              <div className="col">
                <div className="d-flex justify-content-center">
                  <img src="logo.png" alt="Vyayamshala Logo" />
                </div>
                <div className="card-body">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formBasicEmail" className='mb-2'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control {...register("email")} type="email" placeholder="Enter email" className='rounded-pill bg-transparent text-light' />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control {...register("password")} type="password" placeholder="Password" className='mb-2 rounded-pill bg-transparent text-light' />
                    </Form.Group>

                    <Button type="submit" variant="dark" className='rounded-pill my-2'>Login</Button>
                  </Form>
                </div>
              </div>
            </div>

          </div>
        </div>
        <h6 className='text-light mx-auto my-2'>Not a Member?<Button onClick={() => his.push('/signup')} variant="link">Signup</Button>here</h6>

      </div>

    </div>
  )
}