import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import DebugButton from './components/DebugButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DebugButton>Text</DebugButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>TEST</p>
      </header>
    </div>
  );
}

export default App;
