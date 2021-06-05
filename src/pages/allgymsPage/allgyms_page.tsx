import React, { useEffect, useState } from "react";
import "./allygyms_page.css";
import { Navbar, Nav } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Link } from "react-router-dom";

import {
    createStyles,
    makeStyles,
    useTheme,
    Theme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StarIcon from "@material-ui/icons/Star";
import MultipleSelect from "../../components/materialuiComponents/multipleSelect/multipleselect";
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

export default function AllGymsPage() {
    const params: any = useParams();
    const [user] = useUser();
    const history = useHistory();
    const { latitude, longitude } = usePosition();
    const useStyles1 = makeStyles({
        root: {
            maxWidth: 400,
        },
    });

    function valuetext(value: number) {
        return `${value}°C`;
    }

    const classes = useStyles1();
    const [searchTerm, setSearchTerm] = useState(
        params.searchTerm ? params.searchTerm : ""
    );
    const [value, setValue] = useState<number[]>([0, 37]);
    const [gyms, setGyms] = useState<GymInterface[]>([]);

    const handleChange1 = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    useEffect(() => {
        getGyms().then((docData: GymInterface[]) => {
            setGyms(docData);
        });
    }, []);
    useEffect(() => {
        if (params && params.searchTerm) {
            setSearchTerm(params.searchTerm);
        }
    }, [params]);
    return (
        <div className="div">
            <Navbar
                id="nav1"
                sticky="top"
                className="my-5 px-5 d-flex"
                bg="transparent"
                variant="dark"
                expand="lg"
            >
                <Navbar.Brand
                    href="#home"
                    className="d-none d-sm-none d-md-block"
                >
                    Gang-ga
                </Navbar.Brand>
                <div className="d-flex w-75">
                    <input
                        className="form-control px-md-3 py-2 rounded-pill w-100 bg-transparent text-light "
                        type="text"
                        placeholder="Search for the best GYM near you"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            console.log("H");
                        }}
                    />
                    <Button className="rounded-pill " variant="contained">
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
                            <Nav.Link onClick={signOut}>SignOut</Nav.Link>
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
                        <div className={classes.root}>
                            <Typography id="range-slider" gutterBottom>
                                Price Range
                            </Typography>
                            <Slider
                                value={value}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                        </div>
                    </div>
                    <div
                        className="col-md-3 p-3 m-lg-3 text-start"
                        id="filterbox"
                    >
                        <MultipleSelect />
                    </div>
                    <div
                        className="col-md-3 p-3 m-lg-3 text-start"
                        id="filterbox"
                    >
                        <SimpleSelect />
                    </div>
                </div>
                <div className="container d-flex justify-content-center ">
                    <div className="row d-flex  p-3 justify-content-center">
                        {gyms
                            .filter((gym) =>
                                gym.name
                                    .toLocaleLowerCase()
                                    .includes(searchTerm.toLocaleLowerCase())
                            )
                            .map((gym: GymInterface) => (
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
                                                    <h4 className="card-title">
                                                        <strong>
                                                            {gym.name}
                                                        </strong>
                                                    </h4>
                                                    <h6 className="text-muted">
                                                        {latitude &&
                                                            longitude &&
                                                            getDistance(
                                                                gym.location
                                                                    .latitude,
                                                                gym.location
                                                                    .longitude,
                                                                latitude,
                                                                longitude
                                                            ).toFixed()}km
                                                    </h6>
                                                    <br />
                                                    <span className="badge bg-success py-auto">
                                                        <h6 className="py-auto my-auto">
                                                            4.5
                                                            <StarIcon fontSize="small" />{" "}
                                                        </h6>{" "}
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <CheckCircleOutlineIcon fontSize="small" />
                                                    XYZ yes{" "}
                                                    <CheckCircleOutlineIcon fontSize="small" />
                                                    XYZ yes{" "}
                                                    <CheckCircleOutlineIcon fontSize="small" />
                                                    XYZ yes
                                                    <br />
                                                    <br />
                                                    <p className="card-text">
                                                        This is a wider card
                                                        with supporting text
                                                        below as a natural
                                                        lead-in to additional
                                                        content. This content is
                                                        a little bit longer.
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">
                                                            Last updated 3 mins
                                                            ago
                                                        </small>
                                                    </p>
                                                    <p className="text-danger h3 strong">
                                                        $32189
                                                    </p>
                                                    <br />
                                                    <Button
                                                        onClick={() =>
                                                            history.push(
                                                                "/gym/" +
                                                                    gym.uid
                                                            )
                                                        }
                                                        variant="outlined"
                                                        className="m-2"
                                                        style={{
                                                            color: "#fff",
                                                            border: "1px solid #fff",
                                                        }}
                                                    >
                                                        VIEW DETAILS
                                                    </Button>
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
