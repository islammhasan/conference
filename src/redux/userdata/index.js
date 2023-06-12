import {Alert} from 'react-native';
import en from '../../locales/en';
import {AxiosClient} from '../../services/api';

const types = {
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
  GET_EVENTS_FAILED: 'GET_EVENTS_FAILED',
  GET_RESOURCES_SUCCESS: 'GET_RESOURCES_SUCCESS',
  GET_RESOURCES_FAILED: 'GET_RESOURCES_FAILED',
  CLEAR_SUCCESS: `CLEAR_SUCCESS`,
};

export const getEvents = () => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/event-list`);
    if (res?.data?.data) {
      dispatch({type: types.GET_EVENTS_SUCCESS, payload: res});
    } else {
      dispatch({type: types.GET_EVENTS_FAILED});
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
    }
  } catch (error) {
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
    console.log('error from getEvents ==>', error);
    dispatch({type: types.GET_EVENTS_FAILED});
  }
};

export const getResources = () => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/event-resource`);
    console.log('res from get resources ==>', res.data.data);
    if (res?.data?.data) {
      dispatch({type: types.GET_RESOURCES_SUCCESS, payload: res});
    } else {
      dispatch({type: types.GET_RESOURCES_FAILED});
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
    }
    const ressssources = getState().userdata.resources;
    console.log('resources ==>', ressssources);
  } catch (error) {
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
    console.log('error from getResources ==>', error);
    dispatch({type: types.GET_RESOURCES_FAILED});
  }
};

export const clearUserdata = () => (dispatch, getState) => {
  dispatch({type: types.CLEAR_SUCCESS});
};

const initialState = {
  events: [],
  resources: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: payload.data.data,
      };
    case types.GET_EVENTS_FAILED:
      return {
        ...state,
        events: [],
      };
    case types.GET_RESOURCES_SUCCESS:
      return {
        ...state,
        resources: payload.data.data,
      };
    case types.GET_RESOURCES_FAILED:
      return {
        ...state,
        resources: [],
      };
    case types.CLEAR_SUCCESS:
      initialState;
    default:
      return state;
  }
};
