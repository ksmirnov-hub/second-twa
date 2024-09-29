import React from 'react';
import './App.css';

import Logo from './images/logoIcon.png';
const App = () => {

  return (
    <div className="app">
       <div className="center-block">
          <div className="img">
            <img width='211px' height='202px' src={Logo} alt='' />
          </div>
          <div className="title">
            Life Coin
          </div>
          <div className="description">
            LIFE - это будущее, где время самая ценная валюта
          </div>
          <div className="controls">
            <button>
              Войти
            </button>
          </div>
       </div>
    </div>
  );
};

export default App;