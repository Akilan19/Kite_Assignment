import React from 'react';
import {NavLink,useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import './Details.css';

function Details() {

  const location=useLocation();

  const [facts , setFacts] = useState([]);
  const [imgg , setImgg] = useState([]);
  const str = location.state;

  console.log(str);

  useEffect(() => {

    Axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1/" + str).then((res) => {
      setImgg(res.data);
      setFacts(res.data.data);
    });

  },[]);

  console.log(imgg);

  console.log(facts);

  return (
    <div class="slide-container">
  
  <div class="wrapper">
    <div class="clash-card barbarian">
      <div class="clash-card__image clash-card__image--barbarian">
        <img src={imgg.img} alt="barbarian" />
      </div>
      
      <div class="clash-card__unit-name">{str}</div>
      <div>
        {facts.map( (f) => {
          return <div class="clash-card__unit-description">
              {f.fact}
          </div>
        })}
      </div>

    </div>
  </div>
  </div>
  )
}

export default Details