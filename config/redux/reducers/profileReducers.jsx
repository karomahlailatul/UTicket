const initialState = {
    dataProfile: [],
  };
  
  const profileReducers = (state = initialState, action) => {
    if (action.type === "GET_USER_PROFILE") {
      return {
        ...state,
        dataProfile: action.payload,
      };
    } else {
      return state;
    }
  };
  
export default profileReducers;