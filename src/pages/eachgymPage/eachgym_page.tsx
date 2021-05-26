import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useParams } from "react-router";
import GymInterface from "../../interfaces/gym";
import { getGymByID } from "../../utils/firebase/firestore";
import {v4 as uuid} from 'uuid';
import './eachgym_page.css';
import EnrolledSession from "../../interfaces/enrolledSessions";
export default function EachGymPage(){
  const params:any=useParams();
  const [gym,setGym]=useState<GymInterface|null>(null);
  useEffect(()=>{
    if(params.gymID){
      getGymByID(params.gymID).then(data=>{setGym(data)})
    }
  },[])
  function book(){
    if(gym){
      const enrolledSession:EnrolledSession={
        gym:gym.uid,
        uid:uuid(),
        attendee:uuid(),
        plan:[]
      }
    }
    
  }
  if(!gym)return null
    return(
        <div>
            <Navbar id='nav1' sticky="top" className='my-5 px-5 d-flex' bg="transparent" variant='dark' expand="lg">
                <Navbar.Brand href="#home" className='d-none d-sm-none d-md-block'>Gang-ga</Navbar.Brand>
                <div className="d-flex w-75">

                    <input className="form-control px-md-3 py-2 rounded-pill w-100 bg-transparent text-light " type="text" placeholder="Search for the best GYM near you" aria-label="Search" />
                    <Button className='rounded-pill ' variant='contained'>
                        Go
                        </Button>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link2">Login</Nav.Link>
                        <Nav.Link href="#link22">Signup</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <br/>
  <div className="container-fluid ">
    <div id="carouselExampleIndicators" className="carousel slide" data-mdb-ride="carousel">
      <ol className="carousel-indicators">
        <li data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0" className="active"></li>
        <li data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1"></li>
        <li data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://mdbootstrap.com/img/new/slides/041.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://mdbootstrap.com/img/new/slides/042.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://mdbootstrap.com/img/new/slides/043.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-mdb-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-mdb-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  </div>
  <div className="container text-light my-3">
    <div className="row">
      <div className="col-lg-8 my-3">
        <div className="container">
          <div className="row">
            <div className="col-fluid">
              <div className="d-flex justify-content-between">
              <h1>{gym.name}</h1><span className="badge bg-success pt-3"><h5> 6.9 <i className="fas fa-star"></i></h5></span>
              </div>
              <br/>
              <h3><strong>Description</strong></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tristique leo. Suspendisse potenti. Fusce mattis euismod rhoncus. Praesent erat nulla, pretium eu lorem eget, consequat euismod mi. Integer auctor lacinia finibus. Morbi elementum nibh at augue ullamcorper malesuada. Vestibulum erat purus, posuere et accumsan non, venenatis aliquam neque. Nulla et velit a leo vehicula posuere vitae id mi. Sed condimentum libero metus, vitae mollis dolor semper a. Donec luctus ultrices faucibus. </p>
              <h3><strong>Amendities</strong></h3>
              <table className="table text-light">
                <tbody>
           
                  <tr>
                    <td>No AC</td>
                    <td>No Heater</td>
                    <td>Only Gay</td>
                  </tr>
                  <tr>
                    <td>Full Masti</td>
                    <td>Delhi Boys</td>
                    <td>Motapa</td>
                    </tr>
                </tbody>
              </table>
              <br/>
              <h3>Choose your room</h3>
              <br/>
              <div className="card mb-3">
                <div className="card-header">Selected Category</div>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="https://source.unsplash.com/1920x1080/?room,hotel" alt="..." className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Sasta Room</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 d-flex justify-content-between">
                  <h3 className="my-2">Rs.0</h3> <button className="btn btn-primary">Selected</button>
                </div>
              </div>
              <br/>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="https://source.unsplash.com/1920x1080/?luxury,hotel" alt="..." className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Mehenga Room</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 d-flex justify-content-between">
                  <h3 className="my-2">Rs.999</h3> <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 my-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">Login / Signup</div>
                <div className="container ">
                  <h4 className="mt-3">Rs.999</h4>
                  <button className="btn btn-light my-3 w-50">Friday</button><button className="btn my-3 btn-primary w-50">1room,2 Guests</button>
                  <button className="btn btn-light text-start my-3 w-100">Classic</button>
                  <br/>
                  
                  <div className="card-header d-flex justify-content-between text-danger">Coupon <strong>-Rs.0</strong></div>
                  <div className="d-flex justify-content-between mt-2 mx-3">Savings <strong>Rs.0</strong></div>
                  <div className="d-flex justify-content-between mt-3">Total Price <strong>Rs.999</strong></div>
                  <button onClick={book} className="btn w-100 btn-success my-3">Book</button>
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