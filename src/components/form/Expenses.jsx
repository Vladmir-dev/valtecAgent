import React from "react";
import "../table/table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { expenses } from "../../features/jobs/jobAction";
import { useDispatch, useSelector } from "react-redux";

const Expenses = ({ page, setPage, id, setFormData }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.job.isLoading);
  const initialList = [
    {
      job: id,
      item: "Tape Measure",
      quantity: "2000",
      rate: "2",
      amount: "4000",
    },
  ];

  const [list, setList] = React.useState(initialList);
  const [Item, setItem] = React.useState("");
  const [Amount, setAmount] = React.useState("");
  const [Rate, setRate] = React.useState("");

  function handleAdd() {
    const newList = list.concat({
      job: id,
      item: Item,
      quantity: Amount,
      rate: Rate,
      amount: parseInt(Amount) * parseInt(Rate),
    });
    setList(newList);
  }

  const handleSubmit = () => {
    dispatch(expenses({ token, list }));
    setPage(page + 1);
  };

  return (
    <div className="md:w-[80vw] flex flex-col justify-center items-center gap-10">
      <div className="step-title">Expenses</div>
      <div className="w-full flex justify-center items-center gap-8">
        <input
          type="text"
          placeholder="Item"
          className="px-2 py-4"
          value={Item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          className="px-2 py-4"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rate"
          className="px-2 py-4"
          value={Rate}
          onChange={(e) => setRate(e.target.value)}
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
                <TableCell className="tableCell">Item</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Rate</TableCell>
                <TableCell className="tableCell">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{index}</TableCell>
                  <TableCell className="tableCell">{row.item}</TableCell>
                  <TableCell className="tableCell">{row.amount}</TableCell>
                  <TableCell className="tableCell">{row.rate}</TableCell>
                  <TableCell className="tableCell">{row.total}</TableCell>
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Expenses;
