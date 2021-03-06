import React from 'react';
import { Box, makeStyles, AppBar, Toolbar } from '@material-ui/core';

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
