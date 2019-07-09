import React from 'react';
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    
      className={classes.root}
    >
     <BottomNavigationAction label="Scheduled" icon={<EventNote />} />
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Message" icon={<Message />} />
   
   </BottomNavigation>
  );
}