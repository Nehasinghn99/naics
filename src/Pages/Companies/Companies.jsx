import React from "react";
import Table from "../../Component/Table/Table";
import Icon from "../../assist/Icon.png";
// import Header from "../../Common/Header";
import Header from "../../Comman/Header";
// import Sidebar from "../../../components/Sidebar";
import Sidebar from "../../Comman/Sidebar";
import { Link } from "react-router-dom";
import Search from "../../Component/Search/Search";
import Dropdown from "../../Component/Dropdown/Dropdown";


const Name = "Company";

function Companies() {
  const DataSort = ["Sorted By", "A", "B", "C"];
  const DataFilter = ["Filter", "A", "B", "C", "D"];
  const col = ["Logo", "a", "a", "a", "a"];
  const row = [
    [
      <img className="h-6 m-0" src={Icon} alt="" />,
      "Chakra Soft UI Version",
      <a href="https://www.google.com/">http://www.dambase.com</a>,
      "Newswire",
      <a href="https://www.google.com/">http://www.dambase.com</a>,
    ],
  ];
  return (
    <div className="flex w-full">
      <div className="w-2/12">
        <Sidebar home={true} />
      </div>
      <div className="w-10/12 flex flex-col">
        <Header heading="Details Collector" />

        {/*DetailCollector Component*/}

        <div className="overflow-x-auto mx-8 bg-white p-4 text-xs shadow-xl mt-10">
          {/* <p className="text-[#4F4F4F] text-[18px]">Companies Listing</p> */}
          <div className="mr-6 mt-4 mb-10">
            <div className="flex justify-between items-center">
              <Search value="search" search={true} />
              <div className="flex">
                <Dropdown dropdown={DataSort} />
                <Dropdown dropdown={DataFilter} />
              </div>
            </div>
          </div>

          <Table
            col={col}
            row={row}
            rowsPerPage={2}
            Name="Company"
            link="DetailCollector"
          />
        </div>
      </div>
    </div>
  );
}

export default Companies;
