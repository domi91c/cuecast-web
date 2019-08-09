import { AUTHENTICATE, DEAUTHENTICATE, USER } from '@constants';

const initialState = {
  token: null,
  user: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {...state, token: action.payload};
    case USER:
      return {...state, user: action.payload};
    case DEAUTHENTICATE:
      return {token: null};
    default:
      return state;
  }
};
