import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../pages/list/list.scss";
import Navbar from "../navbar/Navbar";
import Signup from "../form/Signup";
import LocationInfo from "../form/LocationInfo";
import OtherInfo from "../form/OtherInfo";
import PersonalInfo from "../form/PersonalInfo";
import "../form/style.scss";
import Expenses from "../form/Expenses";
import Pictures from "../form/Pictures";
import Process2 from "../form/Process2";
import { useParams } from "react-router-dom";

const SingleJob = () => {
  const { jobID } = useParams();
  console.log("url", jobID);

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    nickname: "",
    email: "",
    address: "",
    nationality: "",
    zipcode: "",
    highestQualification: "",
    occupation: "",
    about: "",
  });

  const componentList = [
    <Signup
      id={jobID}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <LocationInfo
      id={jobID}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <PersonalInfo
      id={jobID}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Expenses
      id={jobID}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Pictures
      id={jobID}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <OtherInfo
      id={jobID}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Process2 page={page} setPage={setPage} id={jobID} />,
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-[50px]">
          <div className="progress-bar">
            <div
              style={{
                width:
                  page === 0
                    ? "5%"
                    : page === 1
                    ? "15%"
                    : page === 2
                    ? "20%"
                    : page == 3
                    ? "45%"
                    : page == 4
                    ? "75%"
                    : "100%",
              }}
            ></div>
          </div>
          <div>{componentList[page]}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
