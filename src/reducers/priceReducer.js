import { FETCH_PRICE } from '../actions/index.js';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRICE:
      return [action.payload, ...state]
      break;
    default:
      return state
      break;
  }
}