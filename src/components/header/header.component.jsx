import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function HeaderComponent(props) {
  return (
    <>
    <CssBaseline />
    <ElevationScroll {...props}>
    <AppBar>
        <Toolbar>
            <Typography variant="h6">Make this white and put stuff here</Typography>
        </Toolbar>
    </AppBar>
    </ElevationScroll>
    </>
  );
}