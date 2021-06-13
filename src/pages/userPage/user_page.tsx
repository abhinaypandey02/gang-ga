import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StarIcon from "@material-ui/icons/Star";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import { useUser } from "../../contexts/user_context";
import EnrolledSession from "../../interfaces/enrolledSessions";
import { getEnrolledSessionByUser } from "../../utils/firebase/firestore";
import PastRegistrationCard from "./pastRegistrationCard/past_registration_card";
import { signOut } from "../../utils/firebase/auth";

import "./user_page.css";
import { uploadImage } from "../../utils/firebase/storage";
import UserInterface from "../../interfaces/user";
export default function UserProfile() {
    const [user, setUser] = useUser();
    const [image, setImage] = useState<any>();
    const [enrolledSessions, setEnrolledSessions] = useState<EnrolledSession[]>(
        []
    );
    function onImageChange(e: any) {
        const file = e.target.files[0];
        if (!file.type.startsWith("image/")) {
            alert("Kindly provide a Image file");
            return;
        }
        setImage(file);
    }
    function saveImage() {
        if (image) {
            uploadImage(user,image).then((pp)=>{setUser((old:UserInterface)=>({...old,pp}));setImage(null)})
        }
    }
    useEffect(() => {
        getEnrolledSessionByUser(user.uid).then((docs) => {
            setEnrolledSessions(docs);
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
                        <div
                            style={{ height: 250, width: 250 }}
                            className="col-fluid rounded-circle overflow-hidden d-flex align-items-center"
                        >
                            <img
                                src={
                                    image
                                        ? URL.createObjectURL(image)
                                        : user.pp
                                        ? user.pp
                                        : "https://media1.popsugar-assets.com/files/thumbor/ZZIwMIdF89oy3PbWdGh243VpXtM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/11/15/003/n/42941911/b18d267b5a0cc80012d284.78878316_edit_img_image_44263708_1510761331/i/Hot-Guys-Shirtless-Gym-Pictures.jpg"
                                }
                                className="img-fluid "
                                height={250}
                                width={250}
                                alt="..."
                            />
                        </div>
                        <input
                            id="choose_pp"
                            style={{
                                display: "none",
                            }}
                            type="file"
                            onChange={onImageChange}
                        />
                        {!image && (
                            <Button
                                variant="info"
                                className="rounded-pill m-3"
                                onClick={() => {
                                    document
                                        .getElementById("choose_pp")
                                        ?.click();
                                }}
                            >
                                Edit Profile Picture
                                <img
                                    className="ml-2"
                                    alt="Edit Profile"
                                    src="https://img.icons8.com/android/20/000000/camera.png"
                                    height={20}
                                    width={20}
                                />
                            </Button>
                        )}
                        <div className="d-flex">
                            {image && (
                                <Button
                                    variant="danger"
                                    className="rounded-pill m-2"
                                    onClick={() => {
                                        setImage(null);
                                    }}
                                >
                                    Cancel
                                </Button>
                            )}
                            {image && (
                                <Button
                                    variant="success"
                                    className="rounded-pill m-2"
                                    onClick={saveImage}
                                >
                                    Save
                                </Button>
                            )}
                        </div>

                        <h2 className="text-light m-2">{user.name}</h2>
                        <h5 className="text-light">{user.email}</h5>
                        <Button
                            variant="info"
                            onClick={signOut}
                            className="rounded-pill m-3"
                        >
                            Sign Out
                        </Button>
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
                            <div className="col">
                                {enrolledSessions.map((sess) => (
                                    <PastRegistrationCard session={sess} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
