import './App.css';
import Footer from './components/footer/footer';
import NavigationBar from './components/navigationBar/navigation_bar';
import LandingPage from './pages/landingPage/landing_page';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
