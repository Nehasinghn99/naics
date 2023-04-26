import React from "react";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`mx-2 px-4 py-2 border-[1px] border-[${props.bordercolor}] bg-[${props.bgcolor}] text-[${props.color}]`}
      >
        {props.value}
      </button>
    </div>
  );
}

export default Button;
