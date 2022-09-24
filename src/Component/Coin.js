import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Coin.css';

function Coin(props) {
  
  const navigate = useNavigate();

  const fun1 = () => {
      navigate("/det" , {state: props.name});
  };

  return (

      <div className="coin" onClick={fun1}>
         <img height="200" width="200"src={props.icon} alt=' '/>
          <div styles={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>{props.name}</div>
         </div>

  )
}

export default Coin;