import React from "react";

function Dropdown(props) {
  return (
    <div className="mx-2">
      <select className="bg-[#F5F5F5] px-3 py-2" name="Sorted By" id="Sorted">
        {props.dropdown.map((i, index) => (
          <option value={index}>{i}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
