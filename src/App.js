import React, { useState } from 'react';
import Tabletop from './components/Tabletop';
import Controls from './components/Controls';
// App.js

const App = () => {
  const [robotPosition, setRobotPosition] = useState({ x: null, y: null, direction: null });

  const placeRobot = (x, y, direction) => {
    // Check if the placement is within the tabletop boundaries (5x5)
    if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
      setRobotPosition({ x, y, direction });
    } else {
      console.log('Placement is out of bounds.');
    }
  };

  const moveRobot = () => {
    console.log('moving the robot')
    const { x, y, direction } = robotPosition;
    let newX = x;
    let newY = y;
  
    switch (direction) {
      case 'NORTH':
        newY = Math.min(y + 1, 4);
        break;
      case 'SOUTH':
        newY = Math.max(y - 1, 0);
        break;
      case 'EAST':
        newX = Math.min(x + 1, 4);
        break;
      case 'WEST':
        newX = Math.max(x - 1, 0);
        break;
      default:
        break;
    }
  
    setRobotPosition({ x: newX, y: newY, direction });
  };
  

  const rotateRobot = (rotation) => {
    const { x, y, direction } = robotPosition;
    let newDirection;
    console.log(x,y,direction,rotation,'direction')
    switch (direction) {
      case 'NORTH':
        newDirection = rotation === 'LEFT' ? 'WEST' : 'EAST';
        break;
      case 'SOUTH':
        newDirection = rotation === 'LEFT' ? 'EAST' : 'WEST';
        break;
      case 'EAST':
        newDirection = rotation === 'LEFT' ? 'NORTH' : 'SOUTH';
        break;
      case 'WEST':
        newDirection = rotation === 'LEFT' ? 'SOUTH' : 'NORTH';
        break;
      default:
        break;
    }
  
    setRobotPosition({ x, y, direction: newDirection });
  };
  
  

  const reportPosition = () => {
    const { x, y, direction } = robotPosition;
    console.log(`Current position: (${x},${y}) Direction: ${direction}`);
  };

  return (
    <div className="app">
      <h1>Toy Robot Simulator</h1>
      <ul>
        <li> <strong>PLACE</strong> will put the toy robot on the table in position X,Y and facing NORTH, SOUTH,
  EAST or WEST</li>
        <li><strong>MOVE</strong> will move the toy robot one unit forward in the direction it is currently facing</li>
        <li><strong>LEFT</strong> and <strong>RIGHT</strong> will rotate the robot 90 degrees in the specified direction without
        changing the position of the robot</li>
        <li><strong>REPORT</strong> will announce the X,Y and position of the robot.</li>
      </ul>
      <div className='row'>
        <div className='col' style={{width:'30%'}}>
          <Tabletop robotPosition={robotPosition} />
        </div>
        <div className='col'>
          <Controls 
          placeRobot={placeRobot}
          moveRobot={moveRobot}
          rotateRobot={rotateRobot}
          reportPosition={reportPosition}/>
          <code>
          <p>Position: {robotPosition.x} {robotPosition.y}</p>
          <p>Direction: {robotPosition.direction}</p>
          <p>Reports: {robotPosition.x} {robotPosition.y} {robotPosition.direction}</p>
          </code>
        </div>
      </div>
      
      
    </div>
  );
};

export default App;
