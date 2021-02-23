import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import CardLayout from "./layout/cardLayout";
import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

function App() {
  const classes = myStyles();
  return (
    <div className="App">
      <Header />
      <CardLayout className={classes.root} />
      <Footer />
    </div>
  );
}

export default App;
