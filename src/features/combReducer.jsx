import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import jobReducer from "./jobs/jobSlice";

const rootReducer = combineReducers({
  user: authReducer,
  job: jobReducer,
});

export default rootReducer;
