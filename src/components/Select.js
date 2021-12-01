const Select = ({ name, labelName, selectedValue, values, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{labelName}: </label>
      <select id={name} value={selectedValue || ""} onChange={onChange}>
        <option value="">selecteer aantal luisteraars</option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
