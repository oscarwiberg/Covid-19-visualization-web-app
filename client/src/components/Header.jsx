import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'static',
    marginBottom: '2%',
  },
  heading: {
    margin: '0 auto',
    fontFamily: 'roboto',
    fontSize: '1.8rem',
    fontVariant: 'small-caps',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar className={classes.root}>
        <Toolbar className={classes.heading}>
          Covid-19 visualization - Oscar Wiberg 2020
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
