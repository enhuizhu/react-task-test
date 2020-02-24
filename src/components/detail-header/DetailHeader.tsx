import React from 'react';
import {CardTitle} from '../card-title/CardTitle';
import { Card, makeStyles, Typography } from '@material-ui/core'
import { base } from '../../jss/base';

const useStyle = makeStyles(theme => ({
  ...base,
  avatar: {
    '& img': {
      float: "left",
      marginRight: 30,
      width: 61,
    },
  },
  username: {
    float: "left",
    fontWeight: "bold",
    paddingTop: 18,
  },
  taskbody: {
    paddingTop: 20,
  }
}));

export const DetailHeader = (props: any) => {
  const { task } = props;
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardTitle title="Task Information"></CardTitle>
      <div className={classes.avatar}>
        <img src='/avatar.png'></img>
        <Typography className={classes.username}>
          {task.customer}
        </Typography>
        <div className="clear"></div>
      </div>
      <Typography className={classes.taskbody}>
        {task.taskBody}
      </Typography>
    </Card>  
  );

}