import React from "react";
import "../table/table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { support_staff } from "../../features/jobs/jobAction";

const Signup = ({ page, setPage, id, setFormData }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.job.isLoading);

  const initialList = [
    {
      first_name: "Robin",
      last_name: "Mukasa",
      age: "20",
      sex: "Male",
      role: "oversight",
    },
  ];

  const [list, setList] = React.useState([]);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [Age, setAge] = React.useState(0);
  const [Sex, setSex] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const title = [
    {
      first_name: "First Name",
      last_name: "Last Name",
      age: "Age",
      sex: "Sex",
      role: "Role",
    },
  ];

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  // console.log(list);

  function handleAdd() {
    const newList = list.concat({
      job: id,
      first_name: firstName,
      last_name: lastName,
      age: Age,
      sex: Sex,
      phone: phone,
    });
    setList(newList);
  }

  // fit namerole description of work age sex <picture>admin agent role -role -dis</picture>
  return (
    <div className=" md:w-[80vw] flex flex-col justify-center items-center gap-10">
      <div className="step-title">Support Staff</div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-[50px] gap-5 mt-[50px]">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            className="py-5 px-4"
            onChange={
              (e) => setFirstName(e.target.value) //setting the formData to the value input of the textfield
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            className="py-5 px-4"
            onChange={
              (e) => setLastName(e.target.value) //setting the formData to the value input of the textfield
            }
          />
          <input
            type="text"
            className="py-5 px-4"
            // value={Role}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />

          <input
            type="number"
            className="py-5 px-4"
            // value={Age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />

          <div className="flex gap-5">
            <label>Sex</label>
            <select onChange={(e) => setSex(e.target.value)} className="p-1">
              <option></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* <input
            type="text"
            className="form-group p-2"
            value={Sex}
            placeholder="Sex"
            onChange={(e) => setSex(e.target.value)}
          /> */}
          <button
            onClick={handleAdd}
            className="bg-green-500 px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
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
              {list &&
                list.length > 0 &&
                list.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="tableCell">{index}</TableCell>
                    <TableCell className="tableCell">
                      {row.first_name}
                    </TableCell>
                    <TableCell className="tableCell">{row.last_name}</TableCell>
                    <TableCell className="tableCell">{row.age}</TableCell>
                    <TableCell className="tableCell">{row.sex}</TableCell>
                    <TableCell className="tableCell">{row.role}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <button
          className="bg-blue-500 px-12 py-3 rounded-md text-white text-[20px]"
          onClick={() => {
            console.log(typeof list);
            dispatch(support_staff({ token, list }));
          }}
        >
          {loading ? <Spinner /> : "Submit"}
        </button>
      </div>
      <button
        className="bg-green-500 p-2 rounded-md text-white"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Signup;
