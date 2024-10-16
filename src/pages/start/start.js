import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './start.css';

import EnterFirst from '../../images/enter-first.png';
import EnterSecond from '../../images/enter-second.png';

const Start = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="start">
      <div className="upper-block">
        {
          step === 1
            ? 'Добро пожаловать в life Coin'
            : 'Life - это сообщество людей, которые ценят время'
        }
      </div>
      <div className="lower-block">
        <div className="img">
          <img width='211px' height='202px' src={step === 1 ? EnterFirst : EnterSecond} alt='' />
        </div>
        <div className="controls">
          <button
              onClick={() => setStep((step) => {
                if (step + 1 === 3) {
                  navigate('/home');
                }
                return step + 1;
              })}  
          >
            Дальше
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
