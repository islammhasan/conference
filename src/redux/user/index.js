import {Alert} from 'react-native';
import en from '../../locales/en';
import {AxiosClient} from '../../services/api';
import {clearAttendance} from '../attendance';
import {clearUserdata} from '../userdata';

const types = {
  LOGIN_SUCESS: 'LOGIN_SUCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOG_OUT_SUCCESS: 'LOG_OUT_SUCCESS',
  LOG_OUT_FAILED: 'LOG_OUT_FAILED',
  GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILED: 'GET_PROFILE_FAILED',
};

export const signIn = data => async (dispatch, getState) => {
  // console.log('res from login ==>', data);
  // dispatch({type: types.LOGIN_SUCESS, payload: data});
  // console.log('user logged in', data);
  // const res = await AxiosClient(`user/login`, {body: data});
  // console.log('login res', res);
  try {
    const res = await AxiosClient(`user/login`, {body: data});
    console.log('res from login ==>', res.data);
    if (res?.data?.data === 'Password Wrong') {
      Alert.alert(null, en.wrongEmailOrPassword, [{text: en.ok}]);
      return dispatch({type: types.LOGIN_FAILED});
    } else if (res?.data?.access_token) {
      dispatch({type: types.LOGIN_SUCESS, payload: res.data});
      const user = getState().user.userInfo;
      console.log('state ==>', user);
    } else {
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
    }
  } catch (error) {
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
    console.log('error from login ==>', error);
    dispatch({type: types.LOGIN_FAILED});
  }
};

export const getProfile = () => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/profile`);
    console.log('res from get profile', res.data);
    if (res.data) {
      dispatch({type: types.GET_PROFILE_SUCCESS, payload: res.data});
    } else {
      dispatch({type: types.GET_PROFILE_FAILED});
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
    }
  } catch (error) {
    dispatch({type: types.GET_PROFILE_FAILED});
    console.log('error from get profile ==>', error);
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
  }
};

export const profileUpdate = info => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/profile-update`, {body: info});
    console.log('res from update profile', res.data);
    Alert.alert(null, en.yourProfileHasBeenSuccessfullyUpdated, [
      {text: en.ok},
    ]);
  } catch (error) {
    console.log('error from update profile ==>', error);
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
  }
};

export const changePassword = data => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/change-password`, {body: data});
    console.log('res from change password ==>', res.data);
    if (res?.data?.message === 'old Password Wrong') {
      Alert.alert(null, en.oldPasswordWrong, [{text: en.ok}]);
    } else {
      Alert.alert(null, en.yourPasswordHasBeenSuccessfullyChanged, [
        {text: en.ok},
      ]);
    }
  } catch (error) {
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
    console.log('error from change password ==>', error);
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/logout`, {body: {}});
    console.log('res from logout', res);
    dispatch({type: types.LOG_OUT_SUCCESS});
    dispatch(clearAttendance());
    dispatch(clearUserdata());
  } catch (error) {
    console.log('error from logout', error);
    dispatch({type: types.LOG_OUT_FAILED});
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
  }
};

const initialState = {
  token: null,
  isLoggedIn: false,
  userInfo: null,
  users: [
    {
      id: 'r1h289h',
      username: 'admin',
      password: '123',
      type: 'admin',
    },
    {
      id: 'r129h0',
      username: 'exb',
      password: '123',
      type: 'exhibitor',
    },
    {
      id: 'r12jr12',
      username: 'gen',
      password: '123',
      type: 'general',
    },
  ],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.LOGIN_SUCESS:
      return {
        ...state,
        token: payload?.access_token,
        userInfo: payload?.data,
        isLoggedIn: true,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: payload,
      };
    case types.GET_PROFILE_FAILED:
      return {
        ...state,
        userInfo: null,
      };
    case types.LOG_OUT_SUCCESS:
      return initialState;
    case types.LOG_OUT_FAILED:
    case types.LOGIN_FAILED:
    default:
      return state;
  }
};
