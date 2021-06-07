import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StarIcon from "@material-ui/icons/Star";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import { useUser } from "../../contexts/user_context";
import EnrolledSession from "../../interfaces/enrolledSessions";
import { getEnrolledSessionByUser } from "../../utils/firebase/firestore";
import PastRegistrationCard from "./pastRegistrationCard/past_registration_card";
import "./user_page.css";
export default function UserProfile() {
    const [user, setUser] = useUser();
    const [enrolledSessions, setEnrolledSessions] = useState<EnrolledSession[]>(
        []
    );
    useEffect(() => {
        getEnrolledSessionByUser(user.uid).then((docs) => {
            setEnrolledSessions(docs);
            console.log(docs)
        });
    }, [user]);
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div
                        className="col-md-4 d-flex flex-column justify-content-center align-items-center"
                        id="userinfo"
                    >
                        <div className="col-fluid">
                            <img
                                src="https://thispersondoesnotexist.com/image"
                                className="img-fluid rounded-circle"
                                height="250"
                                width="250"
                                alt="..."
                            />
                        </div>
                        <br />
                        <h2>
                            <span className="text-light">{user.name}</span>
                        </h2>
                        <h5>
                            <span className="text-light">{user.email}</span>
                        </h5>
                        <br />
                    </div>
                    {enrolledSessions.length > 0 && (
                        <div
                            className="col-md-8 p-3 d-flex justify-content-center flex-column"
                            id="past"
                        >
                            <h2>
                                <span className="text-light">
                                    Past Registrations
                                </span>
                            </h2>
                            <div className="col-12 ">
                                {enrolledSessions.map((sess) => (
                                    <PastRegistrationCard session={sess}/>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
