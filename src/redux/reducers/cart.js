const initialState = {
  addedItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        addedItems: action.payload
      };
    default:
      return state;
  }
};
