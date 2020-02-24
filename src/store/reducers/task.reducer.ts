import { RECEIVE_TASK_DATA } from '../actions/tasks.action';

const initialState: any = {}

export default (state = initialState, {type, payload}: any) => {
  switch(type) {
    case RECEIVE_TASK_DATA:
      return payload;
    default:
      return state;
  }
}
