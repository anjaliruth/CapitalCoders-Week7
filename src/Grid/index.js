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
