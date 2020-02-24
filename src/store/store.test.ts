import store from './store';
import { RECEIVE_TASK_DATA } from './actions/tasks.action';

describe('test store', () => {
  it('test store initial state', () => {
    let initState = store.getState();
    expect(initState.tasks).toEqual({});
  });

  it('test store after getting new data', () => {
    store.dispatch({
      type: RECEIVE_TASK_DATA,
      payload: {'42': {data: 'hello'}}
    });

    let newState = store.getState();
    expect(newState.tasks).toEqual({'42': {data: 'hello'}});
  });
});