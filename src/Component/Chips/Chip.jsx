import React from "react";
import cross from "../../assist/cross.svg";

function Chip(props) {
  return (
    <>
      {props.show ? (
        <button className="w-auto bg-[#5B93FF] text-[#fff] text-[14px] px-5 py-3 font-[500] rounded-full">
          {props.value}
        </button>
      ) : (
        <button className="flex items-center bg-[#FAFAFA] text-[14px] px-5 py-3 text-[#242424] font-[500] rounded-full">
          {props.value}
          <img className="ml-2" src={cross} alt="" />
        </button>
      )}
    </>
  );
}

export default Chip;
