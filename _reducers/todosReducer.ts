import { COMPLETE_TODO, NEW_TODO, REMOVE_TODO } from '@constants';
import { tasks } from "@utils/sample-api";

const initialState = {
  tasks: [{title: 'qwefk', description: 'qkwefkw'}]
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case NEW_TODO:
      return {...state, title: action.payload};
    case REMOVE_TODO:
      return {...state, index: action.payload};
    default:
      return state;
  }
};
