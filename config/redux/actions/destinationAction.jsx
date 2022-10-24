import axios from 'axios'
const initialState = {
    payload: {},
    limit: ""
}

export const DestinationAction = (state = initialState) => async(dispatch) =>{
    try {
        const result = await axios.get(`${process.env.API_BACKEND}airport?limit=${state.limit}`)
        const data = result.data
        console.log(data)
        dispatch({type: "GET_DESTINATION",  ...state, payload: data})
    } catch (error) {
        console.log(error)
    }
}