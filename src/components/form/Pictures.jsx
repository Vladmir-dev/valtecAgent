import React from "react";
import land from "../../assets/land.jpeg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { pictures } from "../../features/jobs/jobAction";
import { useDispatch, useSelector } from "react-redux";

const Pictures = ({ page, setPage, id, setFormData }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.job.isLoading);

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
    setSelectedImage(null);
    setComment("");
  }

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(list)
    // Append each image with its corresponding comment
    list.forEach((imageObject, index) => {
      console.log("single image",imageObject.url)
      formData.append(`images`, imageObject.url);
      formData.append(`comments`, imageObject.comment);
    });

    dispatch(pictures({ token, formData, id }));
    setPage(page + 1);
  };

  return (
    <div className="md:w-[80vw] flex flex-col justify-center items-center gap-10">
      <div className="step-title">Pictures</div>

      <div className="flex flex-col justify-center items-center gap-8">
        <div className="formInput">
          <img
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
            className="w-[150px] rounded"
          />
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Pictures;
