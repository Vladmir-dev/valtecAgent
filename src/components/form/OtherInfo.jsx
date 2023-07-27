import React from "react";
import "./style.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const OtherInfo = ({ page, setPage, formData, setFormData }) => {
  let navigate = useNavigate();

  const initialList = [
    {
      title: "Tape Measure",
      subtitle: "dhdhjdkkdkdk",
      desc: "tr2iiwoqjpiqjo hqoh  qoih  qoihqo  q",
    },
  ];

  const [list, setList] = React.useState(initialList);
  const [Title, setTitle] = React.useState("");
  const [Subtitle, setSubtitle] = React.useState("");
  const [Desc, setDesc] = React.useState("");

  function handleAdd() {
    const newList = list.concat({
      title: Title,
      subtitle: Subtitle,
      desc: Desc,
    });
    setList(newList);
  }
  return (
    <div className="md:w-[80vw] flex flex-col justify-center items-center gap-10">
      <div className="step-title">Any Other Info</div>
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <input
          type="text"
          placeholder="Title"
          className="px-2 py-5 w-[70%] focus:outline-0"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subtitle"
          className="px-2 py-4 w-[70%] focus:outline-0"
          value={Subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Description"
          className="px-2 py-4 w-[70%] border-solid border-[2px] border-purple-700 rounded-md focus:outline-0"
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
        >
          Add
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
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
              {list.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{index}</TableCell>
                  <TableCell className="tableCell">{row.title}</TableCell>
                  <TableCell className="tableCell">{row.subtitle}</TableCell>
                  <TableCell className="tableCell">{row.desc}</TableCell>
                  {/* <TableCell className="tableCell">{row.total}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
          onClick={() => setPage(page + 1)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtherInfo;
