const setKeyReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_KEY':
      return action.payload;
    default:
      return state;
  }
};

export default setKeyReducer;