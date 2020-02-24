import React from 'react';
import { Divider, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  typography: {
    fontSize: theme.typography.pxToRem(20),
    margin: 3,
  },
  divider: {
    marginTop: 10,
    marginBottom: 20,
  }
}));

export const CardTitle = (props: any) => {
  const classes = useStyles();
  const { title } = props;
  
  return <div>
    <Typography className={classes.typography}>{title}</Typography>
    <Divider className={classes.divider}></Divider>
  </div>;
}; 

