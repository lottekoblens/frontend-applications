import logo from './logo.svg';
import './App.css';
import getData from './providers/fetch.js';
import { useEffect, useState } from 'react';


function App() {
  const [json, setJson] = useState(null);
  useEffect(() => {
    getData().then(data => setJson(data))
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <pre>{JSON.stringify(json, null, 3)}</pre>
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
