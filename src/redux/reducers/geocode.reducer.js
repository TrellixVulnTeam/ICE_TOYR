const setGeocodeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GEOCODE':
      return action.payload;
    default:
      return state;
  }
};

export default setGeocodeReducer;