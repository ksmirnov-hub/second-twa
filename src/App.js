import React, { useReducer, useEffect } from 'react';
import './App.css';

import Logo from './images/logoIcon.png';

const App = () => {

  return (
    <div className="app">
       <div class="center-block">
          <div>
            <img width='211px' height='202px' src={Logo} alt='' />
          </div>
          <div class="title">
            Life Coin
          </div>
          <div class="description">
            LIFE - это будущее, где время самая ценная валюта
          </div>
          <div class="controls">
            <button>
              Войти
            </button>
          </div>
       </div>
    </div>
  );
};

export default App;