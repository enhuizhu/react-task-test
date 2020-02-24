import React from 'react';
import { CardTitle } from '../card-title/CardTitle';
import { Card, makeStyles, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import { Phone, Note } from '@material-ui/icons';
import { base } from '../../jss/base';
 
const useStyles = makeStyles({
  ...base,
  table: {
    minWidth: 650,
  },
  buttons: {
    textAlign: "right",
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    marginRight: 30,
  }
});

export const DetailLog = (props: any) => {
  const { logs }  = props;
  const classes = useStyles();
  
  return <Card className={classes.root}>
    <CardTitle title="Log"></CardTitle>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {logs.map((log: any, index: number) => (
            <TableRow key={index}>
              <TableCell>
                {
                  log.type === 'phone' ? <Phone></Phone> : <Note></Note>
                }
              </TableCell>
              <TableCell>{log.data}</TableCell>
              <TableCell>{log.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className={classes.buttons}>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<Phone/>}
      >
        Add Phone
      </Button>

      <Button
        variant="contained"
        color="default"
        startIcon={<Note/>}
      >
        Add Phone
      </Button>
    </div>
  </Card>
};