const types = {
  LOGIN_SUCESS: 'LOGIN_SUCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOG_OUT_SUCCESS: 'LOG_OUT_SUCCESS',
  LOG_OUT_FAILED: 'LOG_OUT_FAILED',
};

export const signIn = data => async (dispatch, getState) => {
  console.log('res from login ==>', data);
  dispatch({type: types.LOGIN_SUCESS, payload: data});
  console.log('user logged in', data);
};

export const logout = () => (dispatch, getState) => {
  try {
    dispatch({type: types.LOG_OUT_SUCCESS});
  } catch (error) {
    console.log('error from logout', error);
    dispatch({type: types.LOG_OUT_FAILED});
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
        userInfo: payload,
        isLoggedIn: true,
      };
    case types.LOG_OUT_SUCCESS:
      return initialState;
    case types.LOG_OUT_FAILED:
    case types.LOGIN_FAILED:
    default:
      return state;
  }
};
