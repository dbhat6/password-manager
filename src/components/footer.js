import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const footer = () => {
  const classes = myStyles();

  return (
    <div className={classes.root}>
      <Typography variant="caption" display="block" gutterBottom>
        Created by &copy; {new Date().getFullYear()} Deepak Bhat
      </Typography>
    </div>
  );
};

export default footer;
