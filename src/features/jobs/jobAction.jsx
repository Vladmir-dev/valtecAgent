import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const get_jobs = createAsyncThunk(
  "job/get_jobs",
  async (token, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);
    // console.log("login details ===>", kenageApi)
    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.get(
        "http://localhost:8000/api/v1/job/agentjobs/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const accept_job = createAsyncThunk(
  "job/accept_job",
  async ({ token, formData }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.get(
        "http://localhost:8000/api/v1/job/accept_jobs/",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
