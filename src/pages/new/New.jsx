import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { clientdet } from "../../formSource";

const New = ({ inputs, title, type }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form style={{ display: "flex", flexDirection: "c" }}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div style={{ display: "flex", flexWrap:'wrap', gap:'20px'}}>
                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))}
              </div>

              <div>
                
                {type === "user" && (
                  <div>
                    <label style={{ margin: "10px" }}>Permisions</label>
                    <select>
                      <option>Admin</option>
                      <option>Supervisor</option>
                      <option>Field Agent</option>
                    </select>
                  </div>
                )}
              </div>
              {type === "job" && (
                  <div className="formInput" style={{ width: "100%" }}>
                    <h1>Client Details</h1>
                    {clientdet.map((item, index) => (
                      <div >
                        <label>{item.label}</label>
                        <input
                          type={item.type}
                          placeholder={item.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                )}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
