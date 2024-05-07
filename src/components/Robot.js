import React from 'react';
import Robotimg from '../robot.png'
import Directionimg from '../directions.png'


const Robot = ({ x, y, direction }) => {
  const robotStyle = {
    left: `${x * 50}px`,
    top: `${y * 50}px`,
    position: `absolute`,
    width: `50px`,height: `50px`,
    backgroundImage: `url(${Robotimg})`,
    backgroundSize: `contain`,    
    backgroundRepeat  : 'no-repeat',
    zIndex: '99',
   
  }
  return (
    <>
      <table className="robotbox">
            <tbody>
                <tr>
                    <th></th>
                    <th>0</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                </tr>
                <tr>
                    <th>0</th>
                    <td className="light">
                      <div className={`robot ${direction}`} style={robotStyle}></div>
                    </td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                </tr>
                <tr>
                    <th>1</th>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                </tr>
            </tbody>
        </table>
      <div className='directionimg'>
        <img src={Directionimg} alt='direction-img' width='60'/>
      </div>
    </>
  );
};

export default Robot;
