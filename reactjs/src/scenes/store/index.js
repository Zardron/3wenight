import { createStore , applyMiddleware, compose} from "redux";
import AllReducers from "./Reducers/AllReducers";
import thunk from 'redux-thunk'

const initialStates = {
    auth: {
        loggedIn: false,
        user: {}
    },
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    AllReducers, 
    initialStates,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;