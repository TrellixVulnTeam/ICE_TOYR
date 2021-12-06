const checkQuoteReducer = (state = [], action) => {
  // console.log('in getCustomerReducer', action.payload);
  switch (action.type) {
    case 'CHECK_FOR_QUOTE':
      return action.payload;
    default:
      return state;
  }
};


export const quoteProgress = (state = [], action) => {
  // console.log('in getCustomerReducer', action.payload);
  switch (action.type) {
    case 'QUOTE_PROGRESS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default checkQuoteReducer;