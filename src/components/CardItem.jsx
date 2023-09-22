import React from "react";
import "./cardstyle.css";
import "../App.css";
function CardItem(props) {
  return (
    <div className="CardItem">
      <img src={props.url} alt="" width="200" height="" />
      <h1> {props.name} </h1>
      <h2> {props.num} </h2>
      <h3> {props.poste} </h3>
      <h4> {props.fo} </h4>
      <img src={props.country} alt="" width={150} />
    </div>
  );
}
export default CardItem;
