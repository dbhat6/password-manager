import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles({
  root: {
    width: "100%",
    padding: "20px 20px 0 20px",
  },
});

const header = () => {
  const classes = myStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" display="block" gutterBottom>
        Your credentials at a click <span role="img" aria-label="Mouse Emoji">🖱️</span>
      </Typography>
    </div>
  );
};

export default header;
