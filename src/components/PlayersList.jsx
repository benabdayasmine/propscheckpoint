import React from "react";
import "../App.css";
import CardItem from "./CardItem";
import { data } from "../data";
function PlayersList() {
  return (
    <div className="App">
      <h1 className="titre">manchester city players</h1>
      <div className="players-list">
        {data.map((elt) => (
          <CardItem
            url={elt.url}
            name={elt.name}
            num={elt.num}
            poste={elt.poste}
            fo={elt.fo}
            country={elt.country}
          />
        ))}
      </div>
    </div>
  );
}
export default PlayersList;
