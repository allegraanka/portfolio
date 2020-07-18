import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

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

const useStyles = makeStyles(theme => ({
  appbarStyles: {
    borderBottom: '3px solid #651EDF',
    borderTop: '3px solid #651EDF'
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  tabContainer: {
    marginLeft: 'auto'
  }
}));

export default function HeaderComponent(props) {
  const classes = useStyles();

  return (
    <>
    <CssBaseline />
    <ElevationScroll {...props}>
    <AppBar color="primary" position="fixed" className={classes.appbarStyles}>
        <Toolbar disableGutters>
          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to="/about" label="About"/>
            <Tab className={classes.tab} component={Link} to="/projects" label="Projects"/>
            <Tab className={classes.tab} component={Link} to="/contact" label="Contact"/>
          </Tabs>
        </Toolbar>
    </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>
    </>
  );
}