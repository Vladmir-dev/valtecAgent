import React from "react";
import land from "../../assets/land.jpeg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Pictures = ({ page, setPage, formData, setFormData }) => {
  const initialList = [
    {
      url: land,
      comment: "Cool",
    },
  ];

  const [list, setList] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [Comment, setComment] = React.useState("");

  function handleAdd() {
    console.log("The image", selectedImage);
    const newList = list.concat({
      url: selectedImage,
      comment: Comment,
    });
    setList(newList);
  }

  return (
    <div className="md:w-[80vw] flex flex-col justify-center items-center gap-10">
      <div className="step-title">Pictures</div>

      <div className="flex flex-col justify-center items-center gap-8">
        <div className="formInput">
          <label htmlFor="file">
            Image: <DriveFolderUploadOutlinedIcon className="icon" />
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setSelectedImage(e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>

        <textarea
          type="text"
          placeholder="Comment"
          className="p-4 border-solid border-[2px] border-gray-400 rounded-md focus:outline-0"
          value={Comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="bg-blue-500 px-10 py-3 rounded-md text-white"
        >
          Add
        </button>
      </div>
      <div className="mt-[50px] grid grid-cols-4 gap-5">
        {list &&
          list.map((item, index) => (
            <div>
              <div className="w-[200px] h-[150px]">
                <img
                  src={URL.createObjectURL(item.url)}
                  alt="item"
                  className="w-full h-full"
                />
              </div>

              <h2>{item.comment}</h2>
            </div>
          ))}
      </div>
      <div className="flex gap-10 mb-[100px]">
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

export default Pictures;
