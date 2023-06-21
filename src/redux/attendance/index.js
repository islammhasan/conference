import {Alert} from 'react-native';
import en from '../../locales/en';
import {AxiosClient} from '../../services/api';

const types = {
  GET_ATTENDANCE_REPORT_SUCCESS: 'GET_ATTENDANCE_REPORT_SUCCESS',
  GET_ATTENDANCE_REPORT_FAILED: 'GET_ATTENDANCE_REPORT_FAILED',
  GET_ATTENDANCE_LIST_SUCCESS: 'GET_ATTENDANCE_LIST_SUCCESS',
  GET_ATTENDANCE_LIST_FAILED: 'GET_ATTENDANCE_LIST_FAILED',
  GET_ATTENDEE_SUCCESS: 'GET_ATTENDEE_SUCCESS',
  GET_ATTENDEE_FAILED: 'GET_ATTENDEE_FAILED',
  CLEAR_SUCCESS: 'CLEAR_SUCCESS',
};

export const getAttendanceReport = () => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/attendance-report`);
    console.log('res from attendance report', res.data);

    const arr = Object.entries(res?.data).map(([key, value]) => ({
      [key]: value,
    }));

    const totalCount = arr[arr.length - 1]?.count;

    const newArr = arr.slice(0, -1).map(item => ({
      day: Object.keys(item)[0],
      visitors: item[Object.keys(item)[0]].length,
    }));

    if (res?.data) {
      dispatch({
        type: types.GET_ATTENDANCE_REPORT_SUCCESS,
        payload: {newArr: newArr.slice(0, 5), totalCount},
      });
    } else {
      dispatch({type: types.GET_ATTENDANCE_REPORT_FAILED});
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
    }
  } catch (error) {
    dispatch({type: types.GET_ATTENDANCE_REPORT_FAILED});
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
    console.log('error from attendance report ==>', error);
  }
};

export const getAttendanceList = () => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/attendance-list`);
    if (res.data.data) {
      dispatch({
        type: types.GET_ATTENDANCE_LIST_SUCCESS,
        payload: res?.data?.data,
      });
    } else {
      dispatch({type: types.GET_ATTENDANCE_LIST_FAILED});
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
    }
  } catch (error) {
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
    console.log('error from attenancelist ==>', error);
    dispatch({type: types.GET_ATTENDANCE_LIST_FAILED});
  }
};

export const getAttendeeDetails = refId => async (dispatch, getState) => {
  try {
    const res = await AxiosClient(`user/attendance`, {
      body: {
        reference_id: 'QOI2023V0028',
      },
    });
    console.log('get attendee details ==>', res);
  } catch (error) {
    Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
      {text: en.ok},
    ]);
    console.log('error from get attendee', error);
  }
};

export const addAttendance =
  (reference_id, event_id) => async (dispatch, getState) => {
    try {
      const res = await AxiosClient(`user/attendance`, {
        body: {
          reference_id: 'QOI2023V0028',
          event_id: 5,
        },
      });
      console.log('add attendee res ==>', res);
    } catch (error) {
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
      console.log('error from add attendee', error);
    }
  };

export const clearAttendance = () => (dispatch, getState) => {
  dispatch({type: types.CLEAR_SUCCESS});
};

const initialState = {
  attendanceReport: [],
  attendanceCount: 0,
  attendanceList: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_ATTENDANCE_REPORT_SUCCESS:
      return {
        ...state,
        attendanceReport: payload.newArr,
        attendanceCount: payload.totalCount,
      };
    case types.GET_EVENTS_FAILED:
      return {
        ...state,
        attendanceReport: [],
      };
    case types.GET_ATTENDANCE_LIST_SUCCESS:
      return {
        ...state,
        attendanceList: payload,
      };
    case types.GET_ATTENDANCE_LIST_FAILED:
      return {
        ...state,
        attendanceList: [],
      };
    case types.CLEAR_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
