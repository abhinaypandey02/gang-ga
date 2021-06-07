import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import GymInterface from "../../interfaces/gym";
import { addEnrolledSession, getGymByID } from "../../utils/firebase/firestore";
import { v4 as uuid } from "uuid";
import "./eachgym_page.css";
import EnrolledSession from "../../interfaces/enrolledSessions";
import { useUser } from "../../contexts/user_context";
import { useHistory } from "react-router-dom";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import StarIcon from "@material-ui/icons/Star";
function getPlanName(days: number) {
    switch (days) {
        case 1:
            return "Daily";
        case 15:
            return "Fortnite";
        case 30:
            return "Monthly";
        case 90:
            return "Quarterly";
        case 180:
            return "Half Yearly";
        case 365:
            return "Annually";
    }
    return "Special Plan";
}

export default function EachGymPage() {
    const params: any = useParams();
    const his = useHistory();
    const [user] = useUser();
    const [gym, setGym] = useState<GymInterface | null>(null);
    const [daysSubscribed, setDaysSubscribed] = useState(1);
    const newArr: string[][] = [];
    if (gym) {
        const oldArr = [...gym.features];
        while (oldArr.length) newArr.push(oldArr.splice(0, 3));
    }

    useEffect(() => {
        if (params.gymID) {
            getGymByID(params.gymID).then((data) => {
                setGym(data);
            });
        }
    }, []);

    function plan(days: number) {
        return (
            <div className="card col-md-5 mb-3">
                <div className="row g-0">
                    <div>
                        <div className="card-body">
                            <div className="card-title h1">
                                {getPlanName(days)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 d-flex justify-content-between">
                    <h3 className="my-2">₹{gym && gym.price * days}</h3>{" "}
                    <button
                        onClick={() => setDaysSubscribed(days)}
                        className="btn btn-primary"
                    >
                        Select{daysSubscribed === days && "ed"}
                    </button>
                </div>
            </div>
        );
    }

    function book() {
        console.log("H");
        if (user.name === "") {
            alert("Please log in to continue!");
            his.push("/login");
        } else if (gym) {
            const enrolledSession: EnrolledSession = {
                gym: gym.uid,
                uid: uuid(),
                attendee: user.uid,
                plan: [],
            };
            addEnrolledSession(enrolledSession).then(() => {
                alert("Session Booked!");
                his.push("/");
            });
        }
    }
    if (!gym) return null;
    return (
        <div>
            <NavigationBar />
            <br />
            <div className="container-fluid ">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-mdb-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-mdb-target="#carouselExampleIndicators"
                            data-mdb-slide-to="0"
                            className="active"
                        ></li>
                        <li
                            data-mdb-target="#carouselExampleIndicators"
                            data-mdb-slide-to="1"
                        ></li>
                        <li
                            data-mdb-target="#carouselExampleIndicators"
                            data-mdb-slide-to="2"
                        ></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://mdbootstrap.com/img/new/slides/041.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://mdbootstrap.com/img/new/slides/042.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://mdbootstrap.com/img/new/slides/043.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-mdb-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-mdb-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
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
                                        <h1>{gym.name}</h1>
                                        <span className="badge bg-success pt-3">
                                            <h5>
                                                {gym.rating}
                                                <StarIcon fontSize="small" />
                                                <i className="fas fa-star"></i>
                                            </h5>
                                        </span>
                                    </div>
                                    <br />
                                    <h3>
                                        <strong>Description</strong>
                                    </h3>
                                    <p>{gym.description}</p>
                                    <h3>
                                        <strong>Amendities</strong>
                                    </h3>
                                    <table className="table text-light">
                                        <tbody>
                                            {newArr.map((element) => (
                                                <tr>
                                                    {element.map((feature) => (
                                                        <td className="text-capitalize">{feature}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <br />
                                    <h3>Choose your plan</h3>
                                    <br />

                                    <br />
                                    <div className="d-flex flex-wrap justify-content-around">
                                        {plan(1)}
                                        {plan(15)}
                                        {plan(30)}
                                        {plan(90)}
                                        {plan(180)}
                                        {plan(365)}
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
                                        <div className="card-header">
                                            Checkout
                                        </div>
                                        <div className="container ">
                                            <div className="card-header m-2 d-flex justify-content-between text-danger">
                                                Plan <strong>Price</strong>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2 mx-3">
                                                {getPlanName(daysSubscribed)}{" "}
                                                <strong>
                                                    ₹
                                                    {daysSubscribed * gym.price}
                                                </strong>
                                            </div>
                                            <div className="d-flex justify-content-between mt-3">
                                                Total Price
                                                <strong>
                                                    ₹
                                                    {daysSubscribed * gym.price}
                                                </strong>
                                            </div>
                                            <button
                                                onClick={book}
                                                className="btn w-100 btn-success my-3"
                                            >
                                                Book
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
