

const initialState = {
    data: []
}

export const DestinationAction = (state = initialState, {type, payload}) =>{
    switch(type){
        case "GET_DESTINATION":
            return { ...state, data: payload.data};
        default:
            return false;
    }
}