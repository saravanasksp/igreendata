// Controls.js
import React, { useState } from 'react';

const Controls = ({ placeRobot, moveRobot, rotateRobot, reportPosition }) => {
  const [command, setCommand] = useState('');
  
  const handleInputChange = (event) => {
    setCommand(event.target.value);
  };

  const handleCommandSubmit = (event) => {
    event.preventDefault();
    executeCommand(command);
    setCommand('');
  };

  const executeCommand = (command) => {
    console.log(command,'command')
    // Parse the command and call the corresponding function
    const [action, params] = command.split(' ');
    switch (action) {
      case 'PLACE':
        const [x, y, direction] = params.split(',');
        placeRobot(parseInt(x), parseInt(y), direction);
        break;
      case 'MOVE':
        moveRobot();
        break;
      case 'LEFT':
        rotateRobot('LEFT');
        break;
      case 'RIGHT':
        rotateRobot('RIGHT');
        break;
      case 'REPORT':
        reportPosition();
        break;
      default:
        console.log('Invalid command.');
    }
  };

  return (
    <div className="controls form-data">
      <form onSubmit={handleCommandSubmit}>
        <small><strong>Example:</strong> PLACE 1,1,EAST</small>
        <div className='flex'>
        <input
          type="text"
          placeholder="Enter command"
          value={command}
          onChange={handleInputChange}
        />
        <button type="submit">Execute</button>
        </div>
      </form>
    </div>
  );
};

export default Controls;
