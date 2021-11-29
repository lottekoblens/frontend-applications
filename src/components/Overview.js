import '../App.css';
import { getData } from '../providers/fetch.js';
import { useEffect, useState } from 'react';
import Select from "./Select";
import PieChart from './PieHooks'

const FROM_LISTENERS = [1000000, 1500000];
const TO_LISTENERS = [2000000, 3000000];

const DataOverview = () => {
  const [json, setJson] = useState(null);
  const [listenersFrom, setListenersFrom] = useState(null);
  const [listenersTo, setListenersTo] = useState(null);

  useEffect(() => {
    getData().then(data => {
      setJson(data)
      console.log('data uit promise', data)
    })
  },[])

  const filtered =
        listenersFrom && listenersTo && json
          ? json
            .filter((d) => d.listeners >= listenersFrom && d.listeners <= listenersTo)
            .sort((a, b) => a.listeners - b.listeners): undefined

  const onFromListenersChange = (e) => {
    setListenersFrom(e.currentTarget.value);
  };

  const onToListenersChange = (e) => {
    setListenersTo(e.currentTarget.value);
  };

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
      {filtered && <PieChart data={filtered} />}
      </div>
    </>
  );
};

export default DataOverview;

