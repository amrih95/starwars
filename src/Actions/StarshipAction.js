import { API_URL } from '../Constans/Api.constanst';
import Axios from 'axios';
import {
  FETCH_STARSHIPS,
  FIND_STARSHIPS,
  GET_STARSHIP,
} from '../Constans/Actions.constant';

export const fetchstarships = (n = 1) => (dispatch) => {
  const dest = 'starships/?page=';
  const url = `${API_URL}${dest}${n}`;
  Axios.get(url)
    .then((response) => {
      dispatch({
        type: FETCH_STARSHIPS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

export const getstarship = (id = '') => (dispatch) => {
  const dest = 'starships/';
  const url = `${API_URL}${dest}${id}`;
  Axios.get(url)
    .then((response) => {
      dispatch({
        type: GET_STARSHIP,
        payload: response.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: GET_STARSHIP,
        payload: null,
        error:true
      });
      throw e;
    });
};

export const findstarships = (keyword = '') => (dispatch) => {
  const dest = 'starships?search=';
  const url = `${API_URL}${dest}${keyword}`;
  Axios.get(url)
    .then((response) => {
      dispatch({
        type: FIND_STARSHIPS,
        payload: response.data,
        keyword,
      });
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};
