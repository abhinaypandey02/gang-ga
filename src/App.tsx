import './App.css';
import Footer from './components/footer/footer';
import NavigationBar from './components/navigationBar/navigation_bar';
import AllGymsPage from './pages/allgymsPage/allgyms_page';
import LandingPage from './pages/landingPage/landing_page';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column" id='maindiv'>
      <AllGymsPage/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
