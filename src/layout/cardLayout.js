import info from "../config/config.json";
import React from "react";
import CardComponent from "../components/card";

const CardLayout = (props) => {
  const cards = info.map((element, index) => {
    return <CardComponent details={element} key={index} />;
  });
  return <div>{cards}</div>;
};

export default CardLayout;
