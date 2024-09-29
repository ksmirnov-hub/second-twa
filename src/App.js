import React from 'react';
import './App.css';

import Logo from './images/logoIcon.png';
const App = () => {

  return (
    <div className="app">
       <div class="center-block">
          <div>
            <img width='211px' height='202px' src={Logo} alt='' />
          </div>
       </div>
    </div>
  );
};

export default App;