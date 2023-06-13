import React from 'react';

function Square(props) {
  return (
    <button onClick={() => window.location.href=props.url}>
      {props.label}
    </button>
  );
}

export default Square;
