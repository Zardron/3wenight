import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";

const AllReducers = combineReducers({auth: AuthReducers});

export default AllReducers