import './App.css';
import Footer from './components/footer/footer';
import NavigationBar from './components/navigationBar/navigation_bar';
import AllGymsPage from './pages/allgymsPage/allgyms_page';
import EachGymPage from './pages/eachgymPage/eachgym_page';
import LandingPage from './pages/landingPage/landing_page';
import {HashRouter, Switch, Route} from 'react-router-dom';
import SignupPage from './pages/signupPage/signup_page';
import LoginPage from './pages/loginPage/login_page';
function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column" id='maindiv'>
        <HashRouter>
          <Switch>
            <Route exact={true} path="/"><LandingPage/></Route>
            <Route path="/search"><AllGymsPage/></Route>
            <Route path="/gym"><EachGymPage/></Route>
            <Route path="/signup"><SignupPage/></Route>
            <Route path="/login"><LoginPage/></Route>
          </Switch>

        </HashRouter>
        <Footer/>
      
    </div>
    </div>
  );
}

export default App;
