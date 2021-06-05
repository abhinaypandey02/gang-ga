import "./App.css";
import Footer from "./components/footer/footer";
import NavigationBar from "./components/navigationBar/navigation_bar";
import AllGymsPage from "./pages/allgymsPage/allgyms_page";
import EachGymPage from "./pages/eachgymPage/eachgym_page";
import LandingPage from "./pages/landingPage/landing_page";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import SignupPage from "./pages/signupPage/signup_page";
import LoginPage from "./pages/loginPage/login_page";
import { useUser } from "./contexts/user_context";
import AdminPage from "./pages/adminPage/admin_page";
import UserProfile from "./pages/userPage/user_page";
function App() {
    const [user] = useUser();
    return (
        <div className="App">
            <div className="d-flex flex-column" id="maindiv">
                <HashRouter>
                    <Switch>
                        <Route exact={true} path="/">
                            <LandingPage />
                        </Route>
                        <Route exact path="/search">
                            <AllGymsPage />
                        </Route>
                        <Route exact path="/user">
                            <UserProfile/>
                        </Route>
                        <Route exact path="/admin">
                            <AdminPage/>
                        </Route>
                        <Route path="/search/:searchTerm">
                            <AllGymsPage />
                        </Route>
                        <Route path="/gym/:gymID">
                            <EachGymPage />
                        </Route>
                        {user.name === "" ? (
                            <Route path="/signup">
                                <SignupPage />
                            </Route>
                        ) : (
                            <Redirect to="/" />
                        )}
                        {user.name === "" ? (
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                        ) : (
                            <Redirect to="/" />
                        )}
                    </Switch>
                </HashRouter>
                <Footer />
            </div>
        </div>
    );
}

export default App;
