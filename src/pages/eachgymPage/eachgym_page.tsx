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
import getPlanName from "../../utils/extras/functions";
import { Carousel } from "react-bootstrap";

import logo from "../../logo.svg";

export default function EachGymPage() {
    const params: any = useParams();
    const his = useHistory();
    const [user] = useUser();
    const [gym, setGym] = useState<GymInterface | null>(null);
    const [daysSubscribed, setDaysSubscribed] = useState(1);
    const [loading, setLoading] = useState(false);
    const newArr: string[][] = [];
    if (gym) {
        const oldArr = [...gym.features];
        while (oldArr.length) newArr.push(oldArr.splice(0, 3));
    }
    function loadScript(src: string) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    async function displayRazorpay() {
        setLoading(true);
        if (!gym || !user) return;
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const data = await fetch(
            "https://us-central1-entertainment-coach-db.cloudfunctions.net/braintree/razorpay",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: daysSubscribed * gym.price,
                }),
            }
        ).then((t) => t.json());

        const options = {
            key: "rzp_test_tVfWajqfyKu6PG",
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: `${gym.name} Booking`,
            description: `Paying ₹${
                data.amount / 100
            } for booking ${daysSubscribed} day at ${gym.name}`,
            image: logo,
            handler: function (response: any) {
                if (gym) {
                    const enrolledSession: EnrolledSession = {
                        gym: gym.uid,
                        uid: uuid(),
                        attendee: user.uid,
                        daysSubscribed,
                        reciept: {
                            amount: gym.price * daysSubscribed,
                            orderID: response.razorpay_order_id,
                            paymentID: response.razorpay_payment_id,
                            signature: response.razorpay_signature,
                        },
                    };
                    addEnrolledSession(enrolledSession).then(() => {
                        alert("Session Booked!");
                        his.push("/user");
                    });
                }
            },
            prefill: {
                name: user.name,
                email: user.email,
                phone_number: "",
            },
        };
        const _window = window as any;
        const paymentObject = new _window.Razorpay(options);
        paymentObject.open();
        setLoading(false);
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
        if (!user) {
            alert("Please log in to continue!");
            his.push("/login");
        } else displayRazorpay();
    }
    if (!gym) return null;
    return (
        <div>
            <NavigationBar />
            <br />
            <div className="container">
                <Carousel>
                    {gym.gallery.length > 0 &&
                        gym.gallery.map((imageURL) => (
                            <Carousel.Item>
                                <img
                                    className="d-block h-75 w-100"
                                    src={imageURL}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{gym.name}</h3>
                                    <p>{gym.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    {gym.gallery.length === 0 && (
                        <Carousel.Item>
                            <img
                                className="d-block h-75 w-100"
                                src="https://static.toiimg.com/thumb/msid-78118340,imgsize-896783,width-800,height-600,resizemode-75/78118340.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{gym.name}</h3>
                                <p>{gym.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
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
                                    <h3 style={{ textAlign: "left" }}>
                                        <strong>
                                            <u>Location:</u>
                                        </strong>
                                    </h3>
                                    <p style={{ textAlign: "left" }}>
                                        {gym.location.locality},{" "}
                                        {gym.location.area},{" "}
                                        {gym.location.district},{" "}
                                        {gym.location.state}
                                    </p>
                                    <h3
                                        className="mt-5"
                                        style={{ textAlign: "left" }}
                                    >
                                        <strong>
                                            <u>Description:</u>
                                        </strong>
                                    </h3>
                                    <p style={{ textAlign: "left" }}>
                                        {gym.description}
                                    </p>
                                    <h3
                                        className="mt-5"
                                        style={{ textAlign: "left" }}
                                    >
                                        <strong>
                                            <u>Amendities</u>
                                        </strong>
                                    </h3>
                                    <div className="d-flex mt-4 text-light">
                                        {gym.features.map((element) => (
                                            <td className="text-capitalize border-2 border-light p-3">
                                                {element}
                                            </td>
                                        ))}
                                    </div>
                                    <br />
                                    <h3
                                        className="mt-5"
                                        style={{ textAlign: "left" }}
                                    >
                                        <strong>
                                            <u>Choose your plan:</u>
                                        </strong>
                                    </h3>
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
                                                disabled={loading}
                                                onClick={book}
                                                className="btn w-100 btn-success my-3"
                                            >
                                                {loading ? (
                                                    <span className="align-items-center d-flex justify-content-center">
                                                        Loading
                                                        <div
                                                            className="spinner-border mx-2"
                                                            role="status"
                                                        />
                                                    </span>
                                                ) : (
                                                    "Book"
                                                )}
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
