import React, { useState } from "react";
import { Link } from "react-router-dom";

function Table(props) {
  // Pagination

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage);

  const handleprevious = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };
  const handlenext = () => {
    if (props.row.length > (page + 1) * rowsPerPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className="align-middle inline-block w-[75vw] min-w-full">
      <div className=" overflow-hidden border-b border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              {props.col.map((i) => (
                <th
                  scope="col"
                  className="py-3 text-left text-sm text-gray-400 tracking-wider"
                >
                  {i}
                </th>
              ))}
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {props.row
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((l) => (
                <tr>
                  {l.map((i) => (
                    <td>
                      <Link to={`/${props.link}/${props.Name}`}>{i}</Link>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 mr-4">
        <button onClick={handleprevious}>Previous</button>
        <div className="mx-3">{page + 1}</div>
        <button onClick={handlenext}>Next</button>
      </div>
    </div>
  );
}

export default Table;
