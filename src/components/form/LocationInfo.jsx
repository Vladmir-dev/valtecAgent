import React from "react";
import "./style.scss";

const LocationInfo = ({ page, setPage, formData, setFormData }) => {
  const [name, setName] = React.useState("");
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

  return (
    <div className="md:w-[80vw] flex flex-col justify-center items-center gap-10">
      <div className="step-title">Location Information</div>
      <div className="flex gap-8">
        <input
          type="text"
          placeholder="Land Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={location}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
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

export default LocationInfo;
