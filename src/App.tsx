import './App.css';
import Footer from './components/footer/footer';
import NavigationBar from './components/navigationBar/navigation_bar';
import AllGymsPage from './pages/allgymsPage/allgyms_page';
import EachGymPage from './pages/eachgymPage/eachgym_page';
import LandingPage from './pages/landingPage/landing_page';
import {HashRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column" id='maindiv'>
        <HashRouter>
          <Switch>
            <Route path="/"><LandingPage/></Route>
            <Route path="/search"><AllGymsPage/></Route>
            <Route path="/gym"><EachGymPage/></Route>
          </Switch>

        </HashRouter>
        <Footer/>
      
    </div>
    </div>
  );
}

export default App;
