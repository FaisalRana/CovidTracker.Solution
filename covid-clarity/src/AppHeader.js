import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 5
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    // backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

export default function ButtonAppBar({currentCountry}) {

  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        marginTop="30px"
        style={{ borderRadius: "40px", backgroundColor: "#ef8d65", color: "black" }}
      >
        <Toolbar>
            {/* <MenuIcon /> */}
          <Typography variant="h6" className={classes.title}>
            Covid-19 Clarity Project
          </Typography>
          {currentCountry}
        </Toolbar>
      </AppBar>
      <Toolbar />

    </React.Fragment>
  );
}
