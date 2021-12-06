const getCustomerReducer = (state = [], action) => {
  // console.log('in getCustomerReducer', action.payload);
  switch (action.type) {
    case 'SET_CUSTOMER':
      return action.payload;
    default:
      return state;
  }
};

export default getCustomerReducer;