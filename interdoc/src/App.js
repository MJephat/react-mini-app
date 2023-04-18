import "./Nav.js";
import DoctorInformation from "./components/Doctors";
import './App.css';

function App() {
 
  return (
    <div className="App">
        <header className="App-header">
        <img src='pic/doc3.jpg' alt="my image"/>
        <p>
         Welcome to our health webpage where we offer only the best offers.
        </p>
         <DoctorInformation />
      </header>
    </div>
  );
}

export default App;
