import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getUserProfile = (token) => async (dispatch) => {
    try {
        const result = await axios.get(process.env.API_BACKEND + "users/profile/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const user = result.data.data;
        console.log('user: ', user);
        dispatch({ type: "GET_USER_PROFILE", payload: user });
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export const updateUserProfile = (name, data, token) => async (dispatch) => {
    try {

        const resultProfile = await axios.get(process.env.API_BACKEND + "/users/profile/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const form = new FormData();
        const dataProfile = resultProfile.data.data
        form.append("username", data.username == undefined ? dataProfile.username : data.username)
        form.append("name", name)
        form.append("country", data.country == undefined ? dataProfile.country : data.country)
        form.append("city", data.city == undefined ? dataProfile.city : data.city)
        form.append("phone", data.phone == undefined ? dataProfile.phone : data.phone)
        form.append("address", data.address == undefined ? dataProfile.address : data.address)
        form.append("postal_code", data.postal_code == undefined ? dataProfile.postal_code : data.postal_code)

        const result = await axios.put(process.env.API_BACKEND + "/users/profile?update", form, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        console.log('result: ', result);
        toast.success(result.data.message, { toastId: "successEditProfile" });
        dispatch({ type: "UPDATE_USER_PROFILE", payload: result.data })
    } catch (error) {
        console.log(error);
    }
}

export const updateProfileImage = (data, token) => async (dispatch) => {
    try {
        const resultProfile = await axios.get(process.env.API_BACKEND + "/users/profile/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const dataProfile = resultProfile.data.data
        const form = new FormData();
        form.append("username", dataProfile.username)
        form.append("name", dataProfile.name)
        form.append("country", dataProfile.country)
        form.append("city", dataProfile.city)
        form.append("phone", dataProfile.phone)
        form.append("address", dataProfile.address)
        form.append("postal_code", dataProfile.postal_code)
        form.append("picture", data)
        const result = await axios.put(process.env.API_BACKEND + "/users/profile?update", form, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        toast.success(result.data.message, { toastId: "successEditImage" });
        dispatch({ type: "UPDATE_USER_IMAGE", payload: result.data })
    } catch (error) {
        console.log(error);
    }
}

