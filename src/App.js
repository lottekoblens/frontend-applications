import './App.css';
import getData from './providers/fetch.js';
import { useEffect, useState } from 'react';
import BarChart from "./components/BarChart";


function App() {
  const [json, setJson] = useState(null);
  useEffect(() => {
    getData().then(data => setJson(data))
  })
  return (
    <div className="App">
      <header className="App-header">
        {json? <BarChart data={json}/> : undefined}
        
      </header>
    </div>
  );
}

export default App;
