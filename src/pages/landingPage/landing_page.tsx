import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import "./landing_page.css";
import gym from "./gym.jpg";
import yoga from "./yoga.jpg";
import bk from "./bk.jpg";
import c1 from "./2.jpg";
import c2 from "./3.webp";
import happy from "./happy.jpg";
import Carousel from "react-bootstrap/Carousel";
export default function LandingPage() {
  const his = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="1">
      <div className="lk">
        <div className="row">
          <NavigationBar />
        </div>

        {/* <div className="cv">
          <div className="card" id="lcard">
            <h1 className="head">
              <strong>Find the best gyms near you in no time.</strong>
            </h1>
            <form onSubmit={() => his.push("/search/" + searchTerm)}>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="fc"
                type="text"
                placeholder="Search for the best GYMs near you"
                aria-label="Search"
              />
              <br />
              <Button
                type="submit"
                className="rounded-pill m-md-2 ml-1"
                variant="success "
              >
                Go
              </Button>
            </form>
          </div>
        </div> */}
      </div>

      <Carousel fade>
        <Carousel.Item>
          <img className="p1" src={bk} height={550} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>Fitness</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="p2" src={c1} height={550} alt="Second slide" />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="p3" src={c2} height={550} alt="Third slide" />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container-fluid pt-4">
        <div className="container text-center text-dark">
          <br />
          <div className="d-flex justify-content-around flex-wrap flex-lg-nowrap p-3">
            <div className="card" id="lcard">
              <div className="card-body">
                <h5 className="card-title">Gyms and breakfast</h5>
                <p className="card-text"></p>
                <img src={gym} />
              </div>
            </div>
            <div className="card" id="lcard">
              <div className="card-body">
                <h5 className="card-title">Yoga and meditation</h5>
                <p className="card-text"></p>
                <img src={yoga} />
              </div>
            </div>
            <div className="card" id="lcard">
              <div className="card-body">
                <h5 className="card-title">Happiness</h5>
                <p className="card-text"></p>
                <img src={happy} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
