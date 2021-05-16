import './App.css';
import NavigationBar from './components/navigationBar/navigation_bar';
import LandingPage from './pages/landingPage/landing_page';

function App() {
  return (
    <div className="App">
      <div className="min-vh-100 d-flex flex-column">
        <NavigationBar />
          <div className="flex-grow-1 d-flex">
            <LandingPage/>
          </div>
      </div>
    </div>
  );
}

export default App;
