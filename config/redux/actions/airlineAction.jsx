import axios from 'axios'
const initialState = {
    payload: [],
    search: ""
}

export const AirlineAction = (state = initialState) => async(dispatch) =>{
    try {
        const result = await axios.get(`${process.env.API_BACKEND}flight?search=${state.search}`)
        const data = result.data
        console.log(data)
        dispatch({type: "GET_AIRLINES", ...state, payload: data})
    } catch (error) {
        console.log(error)
    }
}