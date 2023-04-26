import React from "react";
import back from "../assist/Rectangle22.svg";

function Header(props) {
  return (
    <div>
      <img className="absolute top-0 right-0 w-10/12 -z-50" src={back} alt="" />
      <div className="ml-12 text-white font-semibold text-4xl my-8 z-20">
        {props.heading}
      </div>
    </div>
  );
}

export default Header;
