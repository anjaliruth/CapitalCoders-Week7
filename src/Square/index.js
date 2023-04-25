import weekGrid from "../Lib/data";
import React from "react";

function Card(props) {
    return (
      <div className="styleCardContent">
        <p className="styleCardTitle">{props.title}</p>
        
      </div>
    );
  }

  export default Card;