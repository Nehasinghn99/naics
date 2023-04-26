import React from "react";
import NAICSLogo from "../assist/image6.svg";
import { Link } from "react-router-dom";
import home from "../assist/home.svg";
import collector from "../assist/collector.svg";
import setting from "../assist/setting.svg";
import dashboard from "../assist/Vector.svg";

function Sidebar(props) {
  return (
    <div className="w-full h-screen flex flex-col items-center shadow-xl">
      <div className="flex justify-center bg-[#F5F7FB] w-full py-2">
        <img className="h-16" src={NAICSLogo} alt="" />
      </div>

      <div className="flex flex-col items-start">
        <Link
          className={
            props.home
              ? "my-1 py-1 mt-4 flex font-[500] text-[#003AD2]"
              : "my-1 py-1 mt-4 flex font-[500]"
          }
          to="/NAICS"
        >
          <img className="mr-2" src={home} alt="" />
          Companies
        </Link>

        <Link
          className={
            props.detailcollector
              ? "my-1 py-1 mt-4 flex font-[500] text-[#003AD2]"
              : "my-1 py-1 mt-4 flex font-[500]"
          }
          to="/DetailCollector"
        >
          <img className="mr-2" src={collector} alt="" />
          Detail Collector
        </Link>
        <Link
          className={
            props.setting
              ? "my-1 py-1 mt-4 flex font-[500] text-[#003AD2]"
              : "my-1 py-1 mt-4 flex font-[500]"
          }
          to="/Setting"
        >
          <img className="mr-2" src={setting} alt="" />
          Settings
        </Link>
        <Link
          className={
            props.dashboard
              ? "my-1 py-1 mt-4 flex font-[500] text-[#003AD2]"
              : "my-1 py-1 mt-4 flex font-[500]"
          }
          to="/Dashboard"
        >
          <img className="mr-2" src={dashboard} alt="" />
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
