import { combineReducers } from "redux";
import { AirlinesReducer } from "./airlineReducer";
import authReducers  from "./authReducers";
import { DestinationAction } from "./destinationReducer";


const rootReducer = combineReducers({
    auth: authReducers,
    destination: DestinationAction,
    airlines: AirlinesReducer,
})

export default rootReducer;
