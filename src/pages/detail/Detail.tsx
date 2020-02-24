import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { DetailHeader } from '../../components/detail-header/DetailHeader';
import { DetailLog } from '../../components/detail-log/DetailLog';

export const Detail = (props: any) => {
  console.log('props', props);
  const { tasks }  = props;
  const id = props.match.params.id;

  if (!tasks[id]) {
    return <div>loading...</div>
  }

  return <div>
    <DetailHeader task={tasks[id]}></DetailHeader>
    <DetailLog logs={tasks[id].logs}></DetailLog>
  </div>    
}

function mapStateToProps(state: any) {
  return {
    tasks: state.tasks
  }
}

export const DetailContainer = connect(mapStateToProps)(withRouter(Detail));