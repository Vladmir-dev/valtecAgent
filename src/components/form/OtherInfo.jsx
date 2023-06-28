import React from "react";
import './style.scss'

const OtherInfo = ({ page, setPage, formData, setFormData }) => {
  return (
    <div className="card">
      <div className="step-title">Other Info</div>
      <input
          type="text"
          placeholder="Occupation" 
          value={formData.occupation}
          onChange={(e) =>
            setFormData({ ...formData, occupation: e.target.value })
          }
        />
        <textarea
          type="text"
          placeholder="About"
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
        />
      <br />
      <button className="bg-green-500 p-2 rounded-md text-white" onClick={() => setPage(page + 1)}>Submit</button>
      <br />
      <button className="bg-green-500 p-2 rounded-md text-white" onClick={() => setPage(page - 1)}>Previous</button>
    </div>
  );
};

export default OtherInfo;
