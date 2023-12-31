import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import WordEditor from "../WordEditor";
import land from "../../assets/land.jpeg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  get_staff,
  get_equipment,
  get_expenses,
  get_land_info,
  get_pictures,
  get_other_info,
} from "../../features/jobs/jobAction";

const Process2 = ({ page, setPage, id }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.job.isLoading);
  const BASE_URL = "http://localhost:8000";
  useEffect(() => {
    dispatch(get_staff({ token, id }));
    dispatch(get_expenses({ token, id }));
    dispatch(get_pictures({ token, id }));
    dispatch(get_equipment({ token, id }));
    dispatch(get_land_info({ token, id }));
    dispatch(get_other_info({ token, id }));
  }, [dispatch, token]);

  const location_info = useSelector((state) => state.job.location_info);
  console.log("location", location_info);
  const staff = useSelector((state) => state.job.staff);
  // const location_info = [
  //   {
  //     name: "Wakiso Land",
  //     address: "Massajja,Wakiso",
  //     coordinates: "0.3176847,32.5766047",
  //   },
  // ];

  const equipment = useSelector((state) => state.job.equipment);
  const other = useSelector((state) => state.job.other_infor);
  console.log("other", other);
  const [alist, setAList] = React.useState([
    {
      title: "Tape Measure",
      subtitle: "dhdhjdkkdkdk",
      desc: "tr2iiwoqjpiqjo hqoh  qoih  qoihqo  q",
    },
  ]);

  const expenses = useSelector((state) => state.job.expenses);

  const pics = useSelector((state) => state.job.pictures);
  console.log("pics", pics);

  const images = [
    {
      url: land,
      comment: "3uii3i3o2o2op",
    },
    {
      url: land,
      comment: "3uii3i3o2o2op",
    },
    {
      url: land,
      comment: "3uii3i3o2o2op",
    },
    {
      url: land,
      comment: "3uii3i3o2o2op",
    },
    {
      url: land,
      comment: "3uii3i3o2o2op",
    },
  ];
  return (
    <div className="md:w-[85vw] flex flex-col justify-center items-center gap-10 mb-[50px]">
      <div className="step-title">Report</div>

      <div className="w-full  flex md:flex-row flex-col md:justify-between p-2">
        <div className="bg-slate-100 flex-[4.5] h-[100vh] p-4 overflow-y-scroll no-scrollbar">
          <div>
            <h4 className="text-[25px] font-bold">Support Staff</h4>
            <div>
              <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">ID</TableCell>
                      <TableCell className="tableCell">First Name</TableCell>
                      <TableCell className="tableCell">Last Name</TableCell>
                      <TableCell className="tableCell">Age</TableCell>
                      <TableCell className="tableCell">Sex</TableCell>
                      <TableCell className="tableCell">Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {staff &&
                      staff.length > 0 &&
                      staff.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="tableCell">{index}</TableCell>
                          <TableCell className="tableCell">
                            {row.first_name}
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.last_name}
                          </TableCell>
                          <TableCell className="tableCell">{row.age}</TableCell>
                          <TableCell className="tableCell">{row.sex}</TableCell>
                          <TableCell className="tableCell">
                            {row.role}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="mt-[20px]">
            <h4 className="text-[25px] font-bold ">Location Information</h4>
            <div>
              {location_info && (
                <div className="flex italic gap-8 text-[22px]">
                  <h1>{location_info.land_name}</h1>
                  <h1>{location_info.location}</h1>
                  <h1>{location_info.coordinates}</h1>
                </div>
              )}
            </div>
          </div>

          <div className="mt-[20px]">
            <h1 className="text-[25px] font-bold">Equipment</h1>
            <div>
              <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">ID</TableCell>
                      <TableCell className="tableCell">Item</TableCell>
                      <TableCell className="tableCell">Purpose</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {equipment &&
                      equipment.length > 0 &&
                      equipment.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="tableCell">{index}</TableCell>
                          <TableCell className="tableCell">
                            {row.item}
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.purpose}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

          <div className="mt-[20px]">
            <h1 className="text-[25px] font-bold">Expenses & Purpose</h1>
            <div>
              <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">ID</TableCell>
                      <TableCell className="tableCell">Item</TableCell>
                      <TableCell className="tableCell">Quantity</TableCell>
                      <TableCell className="tableCell">Rate</TableCell>
                      <TableCell className="tableCell">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {expenses &&
                      expenses.length > 0 &&
                      expenses.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="tableCell">{index}</TableCell>
                          <TableCell className="tableCell">
                            {row.item}
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.quantity}
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.rate}
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.amount}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

          <div className="mt-[20px]">
            <h1 className="text-[25px] font-bold">Pictures</h1>
            <div className="flex flex-wrap gap-8 mt-[20px]">
              {pics &&
                pics.length > 0 &&
                pics.map((item, index) => (
                  <div className="w-[150px]" key={index}>
                    <img src={`${BASE_URL}${item.image}`} alt="images" />
                    <p className="text-center italic">{item.comment}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-[20px]">
            <h1 className="text-[25px] font-bold">Any Other Information</h1>
            <div className="mt-[20px]">
              <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">ID</TableCell>
                      <TableCell className="tableCell">Title</TableCell>
                      <TableCell className="tableCell">Subtitle</TableCell>
                      <TableCell className="tableCell">Description</TableCell>
                      {/* <TableCell className="tableCell">Total</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {other &&
                      other.length > 0 &&
                      other.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="tableCell">{index}</TableCell>
                          <TableCell className="tableCell">
                            {row.title}
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.sub_title}
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.description}
                          </TableCell>
                          {/* <TableCell className="tableCell">{row.total}</TableCell> */}
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
        <div className="bg-white flex-[4.5] flex flex-col justify-evenly md:h-[100vh]">
          <div>
            <h1 className="text-[27px] p-2 uppercase">
              Submit A Word Document
            </h1>
            <div className="mt-[20px] p-2 flex gap-8">
              <input
                type="file"
                onChange={(e) => console.log(e.target.files[0])}
              />
              <button
                // onClick={handleSave}
                className="bg-blue-500 px-5 py-2   rounded-md text-white hover:bg-white hover:text-blue-500 hover:border-solid hover:border-[2px] duration-500"
              >
                Submit
              </button>
            </div>
            <p className="mt-[20px] mb-[20px] ml-[20px] text-[27px]">OR</p>
          </div>
          <WordEditor />
        </div>
      </div>

      <div className="flex gap-10">
        <button
          className="bg-green-500 p-2 rounded-md text-white"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="bg-green-500 p-2 rounded-md text-white"
          onClick={() => navigate("/dashboard/jobs")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Process2;
