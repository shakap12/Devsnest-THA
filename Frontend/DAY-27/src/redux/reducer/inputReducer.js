const inputReducer = (state = [], action) => {
    if (action.type === "ADD_LIST") {
      return [...state, action.payload];
    } else if (action.type === "DELETE_LIST") {
      return state.filter((item, index) => index !== action.payload);
    }
    return state;
  };
  
  export default inputReducer;