import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import List from "../table/Table";
import { Link } from "react-router-dom";
import "../../pages/list/list.scss";

const FieldJobs = () => {
  const [accept, setAccept] = useState(false);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="flex flex-col  justify-start items-start p-4 mt-[50px]">
          
            <div className="flex w-[80%] shadow-md justify-between items-center p-4 rounded-md bg-slate-100">
              <div className="flex flex-col">
                <h1>New Job</h1>
                <p>22/06/2023 13:19</p>
              </div>
              {accept ? (
                <Link to="/jobs/1">
                <button  className="bg-green-500 px-4 py-2 text-white rounded-md">
                  Details
                </button>
                </Link>
              ) : (
                <button
                  onClick={() => setAccept(true)}
                  className="bg-blue-500 px-4 py-2 text-white rounded-md"
                >
                  Accept
                </button>
              )}
            </div>
          
        </div>
        {/* <List /> */}
      </div>
    </div>
  );
};

export default FieldJobs;
