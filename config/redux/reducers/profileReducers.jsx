const initialState = {
  dataProfile: [],
};

const profileReducers = (state = initialState, action) => {
  if (action.type === "GET_USER_PROFILE") {
    return {
      ...state,
      dataProfile: action.payload,
    };
  } else if (action.type === "UPDATE_USER_PROFILE") {
    return state;
  } else if (action.type === "UPDATE_USER_IMAGE") {
    return state;
  }
  else {
    return state;
  }
};

export default profileReducers;