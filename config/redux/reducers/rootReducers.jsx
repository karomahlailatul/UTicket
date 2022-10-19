import { combineReducers } from "redux";
import authReducers  from "./authReducers";
import creditCardReducers from "./creditCardReducers";
import profileReducers from "./profileReducers";

const rootReducer = combineReducers({
    auth: authReducers,
    profile: profileReducers,
    cc: creditCardReducers,
})

export default rootReducer;
