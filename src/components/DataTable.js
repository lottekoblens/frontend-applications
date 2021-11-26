import { Fragment } from "react";

const DataTable = ({ data }) => {
  return (
    <>
      <div className="grid">
        <div>
          <strong>Luisteraars</strong>
        </div>
        <div>
          <strong>Nummer</strong>
        </div>

        {data.map((d, i) => (
          <Fragment key={i}>
            <div>{d.listeners}</div>
            <div>{d.nameSong}</div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default DataTable;
