import '../App.css';
import { getData } from '../providers/fetch.js';
import { useEffect, useState } from 'react';
import Select from "./Select";
import PieChart from './PieHooks'

const FROM_LISTENERS = [1000000, 1500000];
const TO_LISTENERS = [2000000, 3000000];

const DataOverview = () => {
  const [json, setJson] = useState(null); // when json is created it is null and when setJson is called then json is filled with the data
  const [listenersFrom, setListenersFrom] = useState(null); // when listenersFrom is created it is null and when setListenersFrom is called then listenersFrom is filled with the right number
  const [listenersTo, setListenersTo] = useState(null); // when listenersTo is created it is null and when setListenersTo is called then listenersTo is filled with the right number

  const onFromListenersChange = (e) => {
    setListenersFrom(e.currentTarget.value);
  };

  const onToListenersChange = (e) => {
    setListenersTo(e.currentTarget.value);
  };

  useEffect(() => {
    getData().then(data => {
      setJson(data)
    })
  }, [])

  const filtered =
    listenersFrom && listenersTo && json
      ? json
        .filter((d) => d.listeners >= listenersFrom && d.listeners <= listenersTo)
        .sort((a, b) => a.listeners - b.listeners) : null;

  

  return (
    <>
      <h2>Selecteer de range voor het aantal luisteraars</h2>

      <div className="options">
        <p>
          <Select
            name="fromListeners"
            labelName="Minimaal aantal luisteraars"
            selectedValue={listenersFrom}
            values={FROM_LISTENERS}
            onChange={onFromListenersChange}
          />
        </p>
        <p>
          <Select
            name="toListeners"
            labelName="Maximaal aantal luisteraars"
            selectedValue={listenersTo}
            values={TO_LISTENERS}
            onChange={onToListenersChange}
          />
        </p>
      </div>
      <div>
        <div className="hidden" id="tooltip">
          <p id="name"></p>
          <p><span id="value"> </span></p>
        </div>
        {filtered && <PieChart data={filtered} />}
        {/* give PieChart filtered, so that data can be used in the pie chart */}
      </div>
    </>
  );
};

export default DataOverview;

