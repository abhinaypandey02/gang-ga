import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StarIcon from "@material-ui/icons/Star";
import { Button } from 'react-bootstrap';
import NavigationBar from "../../components/navigationBar/navigation_bar";
import './user_page.css';
export default function UserProfile() {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center" id='userinfo'>
                        <div className="col-fluid">
                            <img src="https://thispersondoesnotexist.com/image" className="img-fluid rounded-circle" height='250' width='250' alt="..." />
                        </div>
                        <br />
                        <h2><span className='text-light'> Looba Guliat</span></h2>
                        <h5><span className='text-light'>loobaguliat@gmail.com</span></h5>
                        <br />
                    </div>
                    <div className="col-md-8 p-3 d-flex justify-content-center flex-column" id='past'>
                        <h2><span className='text-light'>Past Registrations</span></h2>
                        <div className="col-12 ">
                            <div
                                className="card mt-4 mx-auto rounded-0"
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
                                                    Gym Namne
                                                        </strong>
                                            </h4>
                                            <h6 className="text-muted">
                                                2km
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

                                                variant="primary"
                                                className="m-2"
                                                color="info"
                                            >
                                                BOOK NOW
                                                    </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div
                                className="card mt-4 mx-auto rounded-0"
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
                                                    Gym Namne
                                                        </strong>
                                            </h4>
                                            <h6 className="text-muted">
                                                2km
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

                                                variant="primary"
                                                className="m-2"
                                                color="info"
                                            >
                                                BOOK NOW
                                                    </Button>
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