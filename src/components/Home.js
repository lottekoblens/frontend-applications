import '../App.css';
import { getData } from '../providers/fetch.js';
import { useEffect, useState } from 'react';
import BarChart from "./BarChart";

function Home() {
    const [json, setJson] = useState(null); // json is set to null. when setJson is called and given data then give data to json
    const [selection, setSelection] = useState('duration'); // selection is set to duration, but when setSelection is called, then selection gets value that given with setSelection
    const onRadioButtonChange = (event) => {
        setSelection(event.currentTarget.value) // set selection with the value of the radiobutton that is selected
    }
    useEffect(() => {
        getData().then(data => setJson(data)) // when data is fetched, call function setJson and give it the data, so that the data can be passed to json
    })
    return (
        <div className="App">
            <h2>Populairste nummers van Nederland</h2>
            <div id='bar'>
                <div className="hidden" id="tooltip"> {/* create div for tooltip */}
                    <p id="name"></p>
                    <p><span id="value"> </span></p>
                </div>
                <strong>Filter:</strong>
                <label><input type="radio" name="filter" value="duration" id="filter" checked={selection === 'duration'} onChange={onRadioButtonChange} />Duur van de nummers</label>
                {/* give radiobutton an onchange to call the function onRadioButtonChange when the radiabutton is selected */}
                <label><input type="radio" name="filter" value="listeners" id="filter" checked={selection === 'listeners'} onChange={onRadioButtonChange} />Aantal luisteraars</label>
            </div>
            {json ? <BarChart data={json} selection={selection} /> : undefined}
            {/* when the json in given then give json to BarChart and give the selection with the BarChart */}
            {/* when there is no json then json is set to undefined */}
        </div>
    );
}

export default Home;
