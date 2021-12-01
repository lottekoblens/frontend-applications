const Select = ({ name, labelName, selectedValue, values, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{labelName}: </label> 
      {/* create label with name that's given in Overview.js  */}
      <select id={name} value={selectedValue || ""} onChange={onChange}>
        {/* when nothing is selected, leave value empty, otherwise give it the selectedValue from Overview.js */}
        <option value="">selecteer aantal luisteraars</option>
        {values.map((value) => ( 
          // for every value, set key to value and value to value
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
