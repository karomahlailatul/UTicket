const initialState = {
    data: []
}

export const AirlinesReducer = (state = initialState, {type, payload}) =>{
    // console.log(payload)
    switch(type){
        case "GET_AIRLINES":
            return {...state, data: payload.data}
        default:
            return false
    }
}   