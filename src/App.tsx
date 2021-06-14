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
    if(user===undefined) return <div>Loading Site</div>
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
                        
                        <Route path="/search/:searchTerm">
                            <AllGymsPage />
                        </Route>
                        <Route path="/gym/:gymID">
                            <EachGymPage />
                        </Route>
                        <Route path="/signup">
                            {!user ? (
                                <SignupPage />
                            ) : (
                                <Redirect to="/" />
                            )}
                        </Route>
                        <Route path="/login">
                            {!user ? (
                                <LoginPage />
                            ) : (
                                <Redirect to="/" />
                            )}
                        </Route>
                        <Route path="/admin">
                            {user ? (
                                <AdminPage />
                            ) : (
                                <Redirect to="/" />
                            )}
                        </Route>
                        <Route path="/user">
                            {user ? (
                                <UserProfile />
                            ) : (
                                <Redirect to="/" />
                            )}
                        </Route>
                    </Switch>
                </HashRouter>
                <Footer />
            </div>
        </div>
    );
}

export default App;
