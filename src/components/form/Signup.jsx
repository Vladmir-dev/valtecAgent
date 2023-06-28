import React from "react";
import "./style.scss";

const Signup = ({ page, setPage, formData, setFormData }) => {
  return (
    <div className="card">
      <div className="step-title">Job Details</div>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        className="form-group"
        onChange={
          (e) => setFormData({ ...formData, fullName: e.target.value }) //setting the formData to the value input of the textfield
        }
      />
      <input
        type="text"
        className="form-group"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        placeholder="Username"
      />
      <input
        type="text"
        className="form-group"
        value={formData.password}
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button className="bg-green-500 p-2 rounded-md text-white" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Signup;
