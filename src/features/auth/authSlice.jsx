import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  signup,
  //   otp,
     get_user
} from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    token: null,
    refresh_token: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      console.log("Begining......");
      state.currentUser = null;
      state.error = false;
      state.token = null;
      console.log("token", state.token);
    },
  },

  extraReducers: (builder) => {
    //login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      console.log("login token", action.payload);
      state.isLoading = false;
      state.token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      window.location.href = "/dashboard";
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //sign up
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      //   window.location.href = "/otp";
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // //otp
    // builder.addCase(otp.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });

    // builder.addCase(otp.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.message = action.payload;
    //   window.location.href = "/login";
    // });

    // builder.addCase(otp.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });

    
    // //user
    builder.addCase(get_user.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_user.fulfilled, (state, action) => {
      console.log("slice user =>", action.payload);
      state.isLoading = false;
      state.currentUser = action.payload;
    });

    builder.addCase(get_user.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
