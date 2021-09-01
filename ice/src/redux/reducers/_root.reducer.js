import { combineReducers } from 'redux';
import customer from './customer.reducer';
import customerInfo from './customerInfo.reducer';
import key from './key.reducer';
import geocode from './geocode.reducer';
import quote, { quoteProgress } from './quote.reducer';

const rootReducer = combineReducers({
  customer,
  customerInfo,
  key,
  geocode,
  quote,
  quoteProgress,
});

export default rootReducer;
