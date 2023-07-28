import { createSlice } from "@reduxjs/toolkit";
import {
  get_jobs,
  accept_job,
  support_staff,
  get_staff,
  land_info,
  get_land_info,
  equipment,
  get_equipment,
  expenses,
  get_expenses,
  pictures,
  get_pictures,
  other_info,
  get_other_info,
} from "./jobAction";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    isLoading: false,
    error: null,
    jobs: [],
    staff: [],
    expenses: [],
    equipment:[],
    location_info: null,
    pictures: [],
    other_infor: [],
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
      console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      // state.currentUser = action.payload;
    });

    builder.addCase(accept_job.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //support staff
    builder.addCase(support_staff.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(support_staff.fulfilled, (state, action) => {
      console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      // state.currentUser = action.payload;
    });

    builder.addCase(support_staff.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //landinfo
    builder.addCase(land_info.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(land_info.fulfilled, (state, action) => {
      console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      // state.currentUser = action.payload;
    });

    builder.addCase(land_info.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //equipment
    builder.addCase(equipment.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(equipment.fulfilled, (state, action) => {
      console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      // state.currentUser = action.payload;
    });

    builder.addCase(equipment.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //expenses
    builder.addCase(expenses.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(expenses.fulfilled, (state, action) => {
      console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      // state.currentUser = action.payload;
    });

    builder.addCase(expenses.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //pictures
    builder.addCase(pictures.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(pictures.fulfilled, (state, action) => {
      console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      // state.currentUser = action.payload;
    });

    builder.addCase(pictures.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //other info
    builder.addCase(other_info.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(other_info.fulfilled, (state, action) => {
      console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      // state.currentUser = action.payload;
    });

    builder.addCase(other_info.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //get staff
    builder.addCase(get_staff.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_staff.fulfilled, (state, action) => {
      // console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      state.staff = action.payload;
    });

    builder.addCase(get_staff.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //get expense
    builder.addCase(get_expenses.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_expenses.fulfilled, (state, action) => {
      // console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      state.expenses = action.payload;
    });

    builder.addCase(get_expenses.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //equipment
    builder.addCase(get_equipment.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_equipment.fulfilled, (state, action) => {
      // console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      state.equipment = action.payload;
    });

    builder.addCase(get_equipment.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //get pictures
    builder.addCase(get_pictures.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_pictures.fulfilled, (state, action) => {
      // console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      state.pictures = action.payload;
    });

    builder.addCase(get_pictures.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //get land info
    builder.addCase(get_land_info.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_land_info.fulfilled, (state, action) => {
      // console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      state.location_info = action.payload;
    });

    builder.addCase(get_land_info.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //get other info
    builder.addCase(get_other_info.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_other_info.fulfilled, (state, action) => {
      // console.log("slice accept job =>", action.payload);
      state.isLoading = false;
      state.other_infor = action.payload;
    });

    builder.addCase(get_other_info.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default jobSlice.reducer;
