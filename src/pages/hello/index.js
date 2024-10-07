import React from 'react';
import { useNavigate  } from 'react-router-dom';
import Logo from '../../images/logo-home.png';
import './hello.css';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="hello">
       <div className="center-block">
          <div className="img">
            <img width='211px' height='202px' src={Logo} alt='' />
          </div>
          <div className="title">
            Life Coin
          </div>
          <div className="description">
            LIFE - это будущее, где время - это самая ценная валюта
          </div>
       </div>
    </div>
  );
};

export default Home;
