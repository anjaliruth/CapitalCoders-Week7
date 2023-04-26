/*
import React from "react";
import Square from "../Square";

export default function Grid(props) {
  const gridList = props.data.map(grid => (
    <Square
      id={grid.id}
     
      title={grid.title}
    />
  ));

  return <div>{gridList}</div>;
}
*/
import {Link} from "react-router-dom"

export default function Grid ( ) {
  return (
    <div>
    <button>
<Link to="/forums/1">  Week 1</Link>
    </button>
    <button>
<Link to="/forums/2">  Week 2</Link>
    </button>
    </div>
  )
}

