import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const animalObj = props.animal;

  return (
    <Link to={"/animal/" + animalObj.id}>
      <div className="animalCard">
        <img src={animalObj.imageURL} alt="" className="animalImage" />

        <div className="cardTextBox">
          <h1 className="cardtext">{props.animal.common_name}</h1>
          <h3 className="cardtext">{props.animal.sci_name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
