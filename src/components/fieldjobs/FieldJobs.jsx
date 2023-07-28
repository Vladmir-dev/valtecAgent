import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import List from "../table/Table";
import { Link } from "react-router-dom";
import "../../pages/list/list.scss";
import { useSelector, useDispatch } from "react-redux";
import { accept_job } from "../../features/jobs/jobAction";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const FieldJobs = () => {
  const [accept, setAccept] = useState(false);
  const jobs = useSelector((state) => state.job.jobs);
  const loading = useSelector((state) => state.job.isLoading);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="flex flex-col gap-5 justify-start items-start p-4 mt-[50px]">
          {jobs.map((item, index) => (
            <div
              key={index}
              className="flex w-[80%] shadow-md justify-between items-center p-4 rounded-md bg-slate-100"
            >
              <div className="flex flex-col">
                <h1>{item.name}</h1>
                <p>{item.date_created}</p>
              </div>
              {item.status === "accepted" ? (
                <Link to={`/dashboard/jobs/${item.id}`}>
                  <button className="bg-green-500 px-4 py-2 text-white rounded-md">
                    Details
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() =>
                    dispatch(accept_job({ token, item, accept: "accepted" }))
                  }
                  className="bg-blue-500 px-4 py-2 text-white rounded-md"
                >
                  {loading ? <Spinner /> : "Accept"}
                </button>
              )}
            </div>
          ))}
        </div>
        {/* <List /> */}
      </div>
    </div>
  );
};

export default FieldJobs;
