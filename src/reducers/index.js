import { combineReducers } from 'redux';
import PriceReducer from './priceReducer';

const rootReducer = combineReducers({
  price: PriceReducer
});

export default rootReducer;
