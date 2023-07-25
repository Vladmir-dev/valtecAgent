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

const SingleJob = () => {
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
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <LocationInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <PersonalInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Expenses
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Pictures
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <OtherInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Process2 page={page} setPage={setPage} />,
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
