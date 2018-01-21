import axios from 'axios';

const ROOT_URL = 'http://pseapi.com/api/Stock'

export const FETCH_PRICE = 'FETCH_PRICE';

export const fetchPrice = (code) => {
  const url = `${ROOT_URL}/${code}/prices`;
  const request = axios.get(url);
  
  return {
    type: FETCH_PRICE,
    payload: request
  }
}