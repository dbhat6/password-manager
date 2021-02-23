import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import IconFactory from "../container/iconFactory";

const CardComponent = (props) => {
  //   TODO let Icon = props.iconName;

  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ open: true });
  };

  const handleClose = () => {
    setState({ open: false });
  };

  const positionedSnackbar = (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={open}
      onClose={handleClose}
      message="Copied"
      key={vertical + horizontal}
      autoHideDuration={1000}
    />
  );

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    handleClick();
  };

  const openURL = (url) => {
    window.open(url);
  };

  if (props.details == null) return null;

  const myStyles = makeStyles({
    root: {
      width: "700px",
      border: "2px",
      textAlign: "left",
      margin: "20px 60px",
      display: "inline-flex",
      backgroundColor: props.details.bgColor,
      color: "white",
      padding: "10px",
      boxShadow: `5px 10px 18px 3px ${props.details.bgColor}`,
      borderRadius: "7px",
    },
  });
  const classes = myStyles();

  const Details = (deets) => {
    if (deets.info == null || deets.info.users == null) {
      return <div className="innerBlock">Empty Details!</div>;
    }

    const myStylesPerUser = makeStyles({
      root: {
        border: "2px",
        borderColor: "black",
        borderWidth: "2px",
        padding: "15px 0",
      },
    });
    const classPerUser = myStylesPerUser();

    const myDeets = deets.info.users.map((element, index) => {
      return (
        <div key={index} className={classPerUser.root}>
          <Typography variant="body1" gutterBottom>
            Username: {element.username}{" "}
            <span onClick={() => copyToClipboard(element.username)}>
              <FaRegCopy />
            </span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Password: **************{" "}
            <span onClick={() => copyToClipboard(element.pass)}>
              <FaRegCopy />
            </span>
          </Typography>
          {element.url && (
            <Typography variant="body1" gutterBottom>
              Url: {element.url}{" "}
              <span onClick={() => openURL(element.url)}>
                <BsBoxArrowInUpRight />
              </span>
            </Typography>
          )}
          {element.encryptedPass && (
            <Typography variant="body1" gutterBottom>
              Encryted Password: **************{" "}
              <span onClick={() => copyToClipboard(element.encryptedPass)}>
                <FaRegCopy />
              </span>
            </Typography>
          )}
          {element.accessKey && (
            <Typography variant="body1" gutterBottom>
              Access Key: **************{" "}
              <span onClick={() => copyToClipboard(element.accessKey)}>
                <FaRegCopy />
              </span>
            </Typography>
          )}
          {element.secretKey && (
            <Typography variant="body1" gutterBottom>
              Secret Key: **************{" "}
              <span onClick={() => copyToClipboard(element.secretKey)}>
                <FaRegCopy />
              </span>
            </Typography>
          )}
        </div>
      );
    });

    return <div className="innerBlock">{myDeets}</div>;
  };

  props.details.iconName = <IconFactory iconName={props.details.iconName} />;

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.details.application}
        subheader={props.details.additionalDetails}
      />
      <CardHeader title={props.details.iconName} />
      <CardContent>
        <Details info={props.details} />
      </CardContent>
          {positionedSnackbar}
    </Card>
  );
};

export default CardComponent;
