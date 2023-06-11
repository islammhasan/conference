import axios from 'axios';
import {store} from '../redux/store';
import {API_KEY} from '@env';

const baseURL = `https://confapi.alsharqtech.com/v1`;

export const AxiosClient = async (endpoint, args) => {
  const {body, ...additionalConfig} = args || {};
  const customContentType = args?.formData;
  const {token} = store.getState().user;
  let headers = {
    'Content-Type': customContentType
      ? 'multipart/form-data'
      : 'application/json',
    uuid: API_KEY,
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...additionalConfig,
    headers,
    url: `${baseURL}/${endpoint}`,
  };
  if (body) {
    config.data = body;
  }
  const response = await axios(config);
  return response;
};
