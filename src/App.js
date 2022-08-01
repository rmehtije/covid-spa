import logo from './logo.svg';
import './App.css';
import FComponent from './FComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <FComponent firstName="Rasim" lastName="Mehtijev" />
          <FComponent firstName="Maksim" lastName="Peeter" />
          <FComponent firstName="Test" lastName="Mest" />
          <FComponent firstName="" lastName="" />
          <FComponent />
        </div>
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
