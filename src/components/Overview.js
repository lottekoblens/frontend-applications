import '../App.css';
import { getData } from '../providers/fetch.js';
import { useEffect, useState } from 'react';

import DataTable from "./DataTable";
import Select from "./Select";

const FROM_LISTENERS = [1000000, 1500000];
const TO_LISTENERS = [2000000, 3000000];

const DataOverview = () => {
	const [json, setJson] = useState(null);
	useEffect(() => {
        getData().then(data => setJson(data))
    })
  const [listenersFrom, setListenersFrom] = useState(null);
  const [listenersTo, setListenersTo] = useState(null);

  const onFromListenersChange = (e) => {
    setListenersFrom(e.currentTarget.value);
  };

  const onToListenersChange = (e) => {
    setListenersTo(e.currentTarget.value);
  };

  const filtered =
    listenersFrom && listenersTo
      ? json
          .filter((d) => d.listeners >= listenersFrom && d.listeners <= listenersTo)
          .sort((a, b) => a.listeners - b.listeners)
      : null;

  const title = `Aantal luisteraars van ${listenersFrom || "??"} tot ${listenersTo || "??"}`;

  return (
    <>
      <h1>{title}</h1>

      <div className="options">
        <p>
          <Select
            name="fromListeners"
            labelName="Van"
            selectedValue={listenersFrom}
            values={FROM_LISTENERS}
            onChange={onFromListenersChange}
          />
        </p>
        <p>
          <Select
            name="toListeners"
            labelName="Tot"
            selectedValue={listenersTo}
            values={TO_LISTENERS}
            onChange={onToListenersChange}
          />
        </p>
      </div>

      {filtered && <DataTable data={filtered} />}
    </>
  );
};

export default DataOverview;

