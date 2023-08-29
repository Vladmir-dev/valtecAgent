import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { land_info } from "../../features/jobs/jobAction";

const LocationInfo = ({ page, setPage, id, setFormData }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.job.isLoading);

  const [land_name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [lon, setLon] = React.useState("");

  const handleCaptureLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Handle successful position retrieval
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          console.log("Latitude:", latitude);
          setLon(longitude);
          console.log("Longitude:", longitude);
          // Further processing or storing of coordinates
        },
        (error) => {
          // Handle error
          console.error("Error retrieving position:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported");
    }
  };

  const handleSubmit = () => {
    const coordinates = `${lat}, ${lon}`;
    const formData = {
      job_id: id,
      land_name: land_name,
      location: location,
      coordinates: coordinates,
    };
    dispatch(land_info({ token, formData }));
    // setPage(page + 1);
  };

  return (
    <div className="md:w-[80vw] flex flex-col justify-center items-center gap-10">
      <div className="step-title">Location Information</div>
      <div className="flex gap-8">
        <input
          type="text"
          placeholder="Land Name"
          className="p-3"
          value={land_name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          className="p-3"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-[25px]">Coordinates</h1>
        <div className="flex gap-8">
          <input
            type="text"
            placeholder="Latitude"
            className="px-2"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
          <input
            type="text"
            className="px-2"
            placeholder="Longitude"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
          />

          <button
            onClick={handleCaptureLocation}
            className="bg-blue-500 px-4 rounded-md text-white"
          >
            Auto Set
          </button>
        </div>
      </div>
    <div>
      <button
      className="bg-blue-500 px-12 py-3 rounded-md text-white text-[20px]"
          
      onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
      <div className="flex gap-10">
        <button
          className="bg-green-500 p-2 rounded-md text-white"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className="bg-green-500 p-2 rounded-md text-white"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LocationInfo;
