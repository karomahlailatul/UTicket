const initialState = {
    creditCard: [],
  };
  
  const creditCardReducers = (state = initialState, action) => {
    if (action.type === "GET_CREDIT_CARD") {
      return {
        ...state,
        creditCard: action.payload,
      };
    } else {
      return state;
    }
  };
  
export default creditCardReducers;