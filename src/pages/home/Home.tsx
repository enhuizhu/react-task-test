import { connect } from 'react-redux';
import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, makeStyles, Card } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import { CardTitle } from '../../components/card-title/CardTitle';
import { base } from '../../jss/base';

const useStyles = makeStyles(theme => ({
  ...base,
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '25%',
    flexShrink: 0,
  },
  link: {
    display: 'block',
    textAlign: 'right',
  },
  detail: {
    width: '100%',
  }
}));

export const Home = (props: any) => {
  const classes = useStyles();
  const [expanded, setExpanded]: any = React.useState(false);
  const { tasks } = props;

  const handleChange = (panel: any) => (_event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (<Card className={classes.root}>
    <CardTitle title="Tasks"></CardTitle>
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography className={classes.heading}>Task Number</Typography>
        <Typography className={classes.heading}>Note</Typography>
        <Typography className={classes.heading}>Customer</Typography>
        <Typography className={classes.heading}>Date</Typography>
      </ExpansionPanelSummary>
    </ExpansionPanel>
    {
      Object.keys(tasks).map(key => {
        return (
          <ExpansionPanel expanded={expanded === key} onChange={handleChange(key)} key={key}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{key}</Typography>
              <Typography className={classes.heading}>{tasks[key].note}</Typography>
              <Typography className={classes.heading}>{tasks[key].customer}</Typography>
              <Typography className={classes.heading}>{tasks[key].date}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.detail}>
                {tasks[key].taskBody}
                <Link to={`/task/${key}`} className={classes.link}>View Detail</Link>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })
    }
  </Card>)
}

function mapStateToProps(state: any) {
  return {
    tasks: state.tasks
  }
}

export const HomeContainer = connect(mapStateToProps)(Home);