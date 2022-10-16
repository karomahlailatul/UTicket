const initialState = {
    data: {
        email: "",  
        password: "",
        name: "",
    },
    isLoading: false,
  };
  
  const authReducers = (state = initialState, action) => {
    if (action.type === "USER_LOGIN_PENDING") {
      return {
        ...state,
        isLoading: true,
      };
    } else if (action.type === "USER_REGISTER_SUCCESS") {
      return {
        ...state,
        data: action.payload,
      };
    } else if (action.type === "LOGIN_SUCCESS") {
      return {
        ...state,
        data: action.payload,
      };
    } else {
      return state;
    }
  };
  
export default authReducers;