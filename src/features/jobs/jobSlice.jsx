import { createSlice } from "@reduxjs/toolkit";
import { get_jobs,accept_job } from "./jobAction";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    isLoading: false,
    error: null,
    jobs: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    //get jobs
    builder.addCase(get_jobs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_jobs.fulfilled, (state, action) => {
      console.log("slice job =>", action.payload);
      state.isLoading = false;
      state.jobs = action.payload;
    });

    builder.addCase(get_jobs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //accept jobs

    builder.addCase(accept_job.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
  
      builder.addCase(accept_job.fulfilled, (state, action) => {
        console.log("slice user =>", action.payload);
        state.isLoading = false;
        // state.currentUser = action.payload;
      });
  
      builder.addCase(accept_job.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default jobSlice.reducer;
