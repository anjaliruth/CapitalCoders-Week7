import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

export default function Grid(props) {
  const username = props.location.state?.username;

  const gridList = props.data.map((grid) => (
    <div>
      <Link to={`/forums/${grid.id}`}>
        <button className="grid-cell" key={grid.id}>
          <h1 className="week-list"> Week {grid.id} </h1>
          <ul className="topic-list">
            <li>{grid.topics[0]}</li>
            <li>{grid.topics[1]}</li>
            <li>{grid.topics[2]}</li>
          </ul>
        </button>
      </Link>
    </div>
  ));

  return (
    <div>
      <h1 className="grid-title">Bootcamper's Survival Guide</h1>
      <h2 className="grid-subtitle">
        Welcome, {username}! Click on a week to see the forum
      </h2>
      <div className="grid-container">{gridList}</div>
    </div>
  );
}
