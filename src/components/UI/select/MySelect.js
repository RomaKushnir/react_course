import React from "react";

const MySelect = ({ options, name, onSelectChange }) => {
  // console.log("render MySelect");

  return (
    <div style={{ margin: "20px 0 20px auto", width: "150px" }}>
      <select
        name={name}
        style={{ width: "100%" }}
        defaultValue={options[0]}
        onChange={(e) => onSelectChange(e.target.value)}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
