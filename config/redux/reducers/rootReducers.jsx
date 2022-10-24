import { combineReducers } from "redux";
import { AirlinesReducer } from "./airlineReducer";
import authReducers  from "./authReducers";
import creditCardReducers from "./creditCardReducers";
import { DestinationAction } from "./destinationReducer";
import profileReducers from "./profileReducers";


const rootReducer = combineReducers({
    auth: authReducers,
    destination: DestinationAction,
    airlines: AirlinesReducer,
    profile: profileReducers,
    cc: creditCardReducers,
})

export default rootReducer;