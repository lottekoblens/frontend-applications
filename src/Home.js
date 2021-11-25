import './App.css';
import getData from './providers/fetch.js';
import { useEffect, useState } from 'react';
import BarChart from "./components/BarChart";

function Home() {
    const [json, setJson] = useState(null);
    const [selection, setSelection] = useState('duration');
    const onRadioButtonChange = (event) => {
        setSelection(event.currentTarget.value)
    }
    useEffect(() => {
        getData().then(data => setJson(data))
    })
    return (
        <div className="App">
            <h2>Populairste nummers van Nederland</h2>
            <div id='bar'>
                <div className="hidden" id="tooltip">
                    <p id="name"></p>
                    <p><span id="value"> </span></p>
                </div>
                <strong>Filter:</strong>
                <label><input type="radio" name="filter" value="duration" id="filter" checked={selection === 'duration'} onChange={onRadioButtonChange} />Duur van de nummers</label>
                <label><input type="radio" name="filter" value="listeners" id="filter" checked={selection === 'listeners'} onChange={onRadioButtonChange} />Aantal luisteraars</label>
            </div>
            {json ? <BarChart data={json} selection={selection} /> : undefined}
        </div>
    );
}

export default Home;
