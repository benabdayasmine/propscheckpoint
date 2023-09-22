import React from "react";
import "./cardstyle.css";
import "../App.css";
function CardItem(props) {
  return (
    <div className="CardItem">
      <img className="p1" src={props.url} alt="" width="200" height="" />
      <h1> {props.name} </h1>
      <h2 className="n"> {props.num} </h2>
      <h3 className="po"> {props.poste} </h3>
      <h4> {props.fo} </h4>
      <img className="p2" src={props.country} alt="" width={150} />
    </div>
  );
}
export default CardItem;
