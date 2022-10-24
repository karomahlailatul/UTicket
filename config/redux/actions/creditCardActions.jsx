import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const getCreditCard = (token, user_id) => async (dispatch) => {
    try {
        const result = await axios.get(process.env.API_BACKEND + "creditCard?searchby=id&search=" + user_id, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        });
        const cc = result.data.data;
        console.log('cc: ', cc);
        dispatch({ type: "GET_CREDIT_CARD", payload: cc });
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export const createCreditCard = (token, data, user_id) => async (dispatch) => {
    console.log('data: ', data);
    try {
        const form = new FormData();
        form.append("cc_number", data.cc_number)
        form.append("cc_vcc", data.cc_vcc)
        form.append("cc_exp", data.cc_exp)
        form.append("users_id", user_id)
        const result = await axios.post(process.env.API_BACKEND + "creditCard", form, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch({ type: "CREATE_CREDIT_CARD", payload: result.data})
        toast.success(result.data.message, { toastId: "successCreateCard" });
    } catch (error) {
        console.log(error);
    }
}


