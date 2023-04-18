import "./App.css";
import DoctorInformation from "./components/Doctors";
import './App.css';

function App() {
  return <DoctorInformation />;
  return (
    <div className="App">
        <header className="App-header">
        <img src='pic/doc3.jpg' alt="my image"/>
        <p>
         Welcome to our health webpage where we offer only the best offers.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
