// Tabletop.js
import React from 'react';
import Robot from './Robot';

const Tabletop = ({ robotPosition }) => {
  const tabletopStyle = {
    width: '280px', // Assuming each unit is 100px wide
    height: '253px', 
    position: 'relative',
    left: '20px',
    top: '20px',
  };

  return (
    <div style={tabletopStyle}>
      {/* Render the Robot component inside the Tabletop */}
      <Robot {...robotPosition} />
    </div>
  );
};

export default Tabletop;
