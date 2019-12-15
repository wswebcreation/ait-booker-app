import {create} from 'apisauce';
import {BrandingActions} from '../home/duck/actions';

const BASE_URL = 'https://automationintesting.online';
const API_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const apiConfig = create({
  baseURL: BASE_URL,
  headers: {
    ...API_HEADERS,
  },
});
const request = (type, rest, action) => {
  return async dispatch => {
    try {
      const response = await apiConfig[type](rest);

      // All good, just return the response.
      if (response.ok) {
        return dispatch(action(response.data));
      }
    } catch (error) {
      // @TODO: implement the error
      return false;
    }
  };
};

export const api = {
  getBranding: () => {
    return request('get', 'branding', BrandingActions.fetchBranding);
  },
};
