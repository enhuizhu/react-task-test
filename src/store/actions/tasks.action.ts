export const RECEIVE_TASK_DATA = 'RECEIVE_TASK_DATA';

export const getTaskData = (): any => {
  return (dispatch: any) => {
    fetch('/task.json')
      .then(response => response.json())
      .then(results => {
        dispatch({
          type: RECEIVE_TASK_DATA,
          payload: results.reduce((pre: any, current: any) => {
            pre[current.id] = current;
            return pre;
          }, {})
        })
      })
      .catch(e => {
        alert('fail to fetch data')
      });
  }
} 