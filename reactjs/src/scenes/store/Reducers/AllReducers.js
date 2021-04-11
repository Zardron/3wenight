import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import EventReducers from "./EventReducers";
import CommentReducer from "./CommentReducer";


const AllReducers = combineReducers({auth: AuthReducers, event: EventReducers, comment: CommentReducer});



export default AllReducers