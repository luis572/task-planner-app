import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "300px",
    minWidth:"30px",
    margin:"1em",
    boxSizing:"border-box"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const useStyless=makeStyles({
  item:{
    minWidth:"350px",
    margin:"1em",
    boxSizing:"border-box"
  },
  media:{
    minWidth:"200px"
  }
});
export function ActividadCard({props}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Card className={classes.root}>
    <CardHeader
      title={props.title}
      subheader={props.description}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
      {props.status} - {props.dueDate}<br />
      {props.responsible.name}
      </Typography>
    </CardContent>
  </Card>
  );

}

