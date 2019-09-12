import { combineReducers } from 'redux';
import ReducerCountries from "./reducers_countries";
import ReducerRateExchange from "./reducers_rate._exchange";

const rootReducer = combineReducers({
  countries : ReducerCountries, 
  rateExchangeReducer : ReducerRateExchange
});

export default rootReducer;
