import { API_KEY, API_ENDPOINT } from '../apiConfig';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const response = await fetch(`${API_ENDPOINT}?api_key=${API_KEY}`);
      const data = await response.json();

      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
