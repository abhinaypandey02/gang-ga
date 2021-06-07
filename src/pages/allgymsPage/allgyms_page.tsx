import React, { useEffect, useState } from "react";
import "./allygyms_page.css";
import { Navbar, Nav } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StarIcon from "@material-ui/icons/Star";
import SimpleSelect2 from "../../components/materialuiComponents/multipleSelect/multipleselect";
import SimpleSelect from "../../components/materialuiComponents/sortBy/sortby";
import { getGyms } from "../../utils/firebase/firestore";
import GymInterface from "../../interfaces/gym";
import { useHistory, useParams } from "react-router";
import { useUser } from "../../contexts/user_context";
import { signOut } from "../../utils/firebase/auth";
import { usePosition } from "../../components/usePosition/usePosition";
function rad(x: number) {
    return (x * Math.PI) / 180;
}
function getDistance(
    rideLat: number,
    rideLong: number,
    currLat: number,
    currLong: number
) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(rideLat - currLat);
    var dLong = rad(rideLong - currLong);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(rideLat)) *
            Math.cos(rad(currLat)) *
            Math.sin(dLong / 2) *
            Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = (R * c) / 1000;
    return d; // returns the distance in meter
}

interface GymInterfaceWithDistance extends GymInterface {
    distance: number;
}

export default function AllGymsPage() {
    const params: any = useParams();
    const [user] = useUser();
    const history = useHistory();
    const { latitude, longitude } = usePosition();

    const [searchTerm, setSearchTerm] = useState(
        params.searchTerm ? params.searchTerm : ""
    );
    const [gyms, setGyms] = useState<GymInterfaceWithDistance[]>([]);
    const [sortBy, setSortBy] = useState<string>("distance");
    const [category, setCategory] = useState("all");
    useEffect(() => {
        if (gyms.length === 0 && latitude && longitude) {
            getGyms().then((docData: GymInterface[]) => {
                setGyms(
                    docData
                        .map((gym) => ({
                            ...gym,
                            distance: getDistance(
                                gym.location.latitude,
                                gym.location.longitude,
                                latitude,
                                longitude
                            ),
                        }))
                        .sort((a, b) => a.distance - b.distance)
                );
            });
        }
    }, [latitude, longitude]);
    useEffect(() => {
        if (gyms) {
            switch (sortBy) {
                case "price asc": {
                    setGyms([...gyms.sort((a, b) => a.price - b.price)]);
                    break;
                }
                case "price desc": {
                    setGyms([...gyms.sort((a, b) => b.price - a.price)]);
                    break;
                }
                case "distance": {
                    setGyms([...gyms.sort((a, b) => a.distance - b.distance)]);
                    break;
                }
            }
        }
    }, [sortBy]);
    useEffect(() => {
        if (params && params.searchTerm) {
            setSearchTerm(params.searchTerm);
        }
    }, [params]);
    return (
        <div>
            <Navbar
                id="nav1"
                sticky="top"
                className="pt-md-5 px-5 d-flex"
                bg="transparent"
                variant="dark"
                expand="lg"
            >
                <Navbar.Brand href="#" className="d-none d-sm-none d-md-block ">
                    <span className="h2">Gang-ga</span>
                </Navbar.Brand>
                <div className="d-flex w-75">
                    <input
                        className="form-control px-md-3 m-2 py-2 rounded-pill w-100 bg-transparent text-light "
                        type="text"
                        placeholder="Search for the best GYM near you"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                    <Button className="rounded-pill m-2" variant="contained">
                        Go
                    </Button>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/search">
                            Gyms
                        </Nav.Link>
                        {user.name === "" && (
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        )}
                        {user.name === "" && (
                            <Nav.Link as={Link} to="/login">
                                Signup
                            </Nav.Link>
                        )}
                        {user.name !== "" && (
                            <Nav.Link as={Link} to="/user">
                                {user.name}
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div
                        className="col-md-3 p-3 m-lg-3 text-start"
                        id="filterbox"
                    >
                        <SimpleSelect2
                            sortBy={category}
                            setSortBy={setCategory}
                        />
                    </div>
                    <div
                        className="col-md-3 p-3 m-lg-3 text-start"
                        id="filterbox"
                    >
                        <SimpleSelect sortBy={sortBy} setSortBy={setSortBy} />
                    </div>
                </div>
                <div className="container d-flex justify-content-center ">
                    <div className="row d-flex  p-3 justify-content-center">
                        {gyms
                            .filter((gym) => {
                                let bool = gym.name
                                    .toLocaleLowerCase()
                                    .includes(searchTerm.toLocaleLowerCase());
                                if (category !== "all") {
                                    bool = bool && gym.type === category;
                                }
                                return bool;
                            })
                            .map((gym) => (
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
                                                    <h4 className="card-title ">
                                                        <strong>
                                                            {gym.name}
                                                        </strong>
                                                    </h4>
                                                    <h6 className="text-dark">
                                                        <img className="m-1" src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png" />
                                                        {gym.location.locality},{" "}
                                                        {gym.location.area},{" "}
                                                        {gym.location.district},{" "}
                                                        {gym.location.state}
                                                    </h6>
                                                    <h6 className="text-dark">
                                                        {latitude &&
                                                            longitude &&
                                                            gym.distance.toFixed()}
                                                        km
                                                    </h6>

                                                    <div className="badge bg-success py-auto m-2">
                                                        <h6 className="py-auto my-auto">
                                                            {gym.rating}
                                                            <StarIcon fontSize="small" />
                                                        </h6>
                                                    </div>
                                                    <div className="badge bg-warning py-auto m-2">
                                                        <h6 className="py-auto my-auto text-capitalize text-dark">
                                                            {gym.type}
                                                        </h6>
                                                    </div>
                                                    <div className="my-3">
                                                        {gym.features.map(
                                                            (feature) => (
                                                                <span className="text-capitalize m-1">
                                                                    <CheckCircleOutlineIcon
                                                                        className="m-1"
                                                                        fontSize="small"
                                                                    />
                                                                    {feature}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>

                                                    <p className="card-text">
                                                        {gym.description}
                                                    </p>
                                                    <p className="text-danger h3 strong">
                                                        ₹{gym.price}/day
                                                    </p>
                                                    <Button
                                                        onClick={() =>
                                                            history.push(
                                                                "/gym/" +
                                                                    gym.uid
                                                            )
                                                        }
                                                        variant="contained"
                                                        className="m-2"
                                                        color="primary"
                                                    >
                                                        BOOK NOW
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
