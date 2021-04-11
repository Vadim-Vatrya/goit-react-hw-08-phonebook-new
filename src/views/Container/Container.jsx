import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  Container: {
      maxWidth: '1440px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '15px',
      paddingRight: '15px',
    }
})

const Container = ({ children }) => {
  const classes = useStyles();

 return (
  <div className={classes.Container}>{children}</div>
 ) 
};

export default Container;