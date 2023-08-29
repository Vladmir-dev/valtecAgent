import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/datatablesource";

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
        `${BASE_URL}/job/agentjobs/`,
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
  async ({ token, accept, item }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);
    const data = {
      accept: accept,
      job_id: item.id,
    };

    console.log(data);
    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${BASE_URL}/job/accept_job/`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const support_staff = createAsyncThunk(
  "job/support_staff",
  async ({ token, list }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    console.log("support staff", list);
    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${BASE_URL}/job/support_staff/`,
        list,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const land_info = createAsyncThunk(
  "job/land_info",
  async ({ token, formData }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    console.log("land info", formData);
    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${BASE_URL}/job/land_info/`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const equipment = createAsyncThunk(
  "job/equipment",
  async ({ token, list }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    console.log("land info", list);
    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${BASE_URL}/job/equipment/`,
        list,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const expenses = createAsyncThunk(
  "job/expenses",
  async ({ token, list }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    console.log("land info", list);
    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${BASE_URL}/job/expenses/`,
        list,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const pictures = createAsyncThunk(
  "job/pictures",
  async ({ token, formData, id }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    console.log("the data", formData);
    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${BASE_URL}/job/pictures/${id}/`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const other_info = createAsyncThunk(
  "job/other_info",
  async ({ token, list }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    console.log("the data", list);
    try {
      //   console.log("login details ===>", token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${BASE_URL}/job/other_info/`,
        list,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const get_staff = createAsyncThunk(
  "job/get_staff",
  async ({ token, id }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    try {
      const response = await axios.get(
        `${BASE_URL}/job/get_staff/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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

export const get_expenses = createAsyncThunk(
  "job/get_expenses",
  async ({ token, id }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    try {
      const response = await axios.get(
        `${BASE_URL}/job/get_expenses/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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

export const get_equipment = createAsyncThunk(
  "job/get_equipment",
  async ({ token, id }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    try {
      const response = await axios.get(
        `${BASE_URL}/job/get_equipment/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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

export const get_pictures = createAsyncThunk(
  "job/get_pictures",
  async ({ token, id }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    try {
      const response = await axios.get(
        `${BASE_URL}/job/get_pictures/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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

export const get_other_info = createAsyncThunk(
  "job/get_other_info",
  async ({ token, id }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    try {
      const response = await axios.get(
        `${BASE_URL}/job/get_other_info/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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

export const get_land_info = createAsyncThunk(
  "job/get_land_info",
  async ({ token, id }, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);

    try {
      const response = await axios.get(
        `${BASE_URL}/job/get_land_info/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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
