
import React from 'react';
import Square from '../Square';

function Grid() {
  const buttons = [
    { label: 'Week 1', url: '/week1' },
    { label: 'Week 2', url: '/week2' },
    { label: 'Week 3', url: '/week3' },
 
  ];

  return (
    <div className="grid">
      {buttons.map((button) => (
        <Square key={button.label} label={button.label} url={button.url} />
      ))}
    </div>
  );
}

export default Grid;
