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
    setListenersFrom(e.currentTarget.value); // value is number of FROM_LISTENERS that's been selected by user
  };

  const onToListenersChange = (e) => {
    setListenersTo(e.currentTarget.value); // value is number of TO_LISTENERS that's been selected by user
  };

  useEffect(() => {
    getData().then(data => {
      setJson(data) // when data is fetched, then give data to setJson
    })
  }, [])

  const filtered =
    listenersFrom && listenersTo && json
      ? json // if listenersFrom, listenersTo, json have data, then do the filter and sort on json
        .filter((d) => d.listeners >= listenersFrom && d.listeners <= listenersTo) // filter data of which the amount of listeners is bigger and equal as listenersFrom and smaller or equal as listenersTp
        .sort((a, b) => a.listeners - b.listeners) : null;

  return (
    <>
      <h2>Selecteer de range voor het aantal luisteraars</h2>

      <div className="options">
        <p>
          <Select // call component Select and give it the following values
            name="fromListeners"
            labelName="Minimaal aantal luisteraars"
            selectedValue={listenersFrom}
            values={FROM_LISTENERS}
            onChange={onFromListenersChange}
          />
        </p>
        <p>
          <Select // call component Select and give it the following values
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
        {/* give PieChart filtered, so that this data can be used in the pie chart */}
      </div>
    </>
  );
};

export default DataOverview;

