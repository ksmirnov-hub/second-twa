import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './start.css';

import SliderIcon from '../../images/start/slider';
import FirstStepIcon from '../../images/start/first_step'
import SecondStepIcon from '../../images/start/second_step'
import ThirdStepIcon from '../../images/start/first_step';

const Start = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const SelectIcon = ({step}) => {
    switch (step) {
      case 1:
        return <FirstStepIcon />;
      case 2:
        return <SecondStepIcon />;
      case 3:
        return <ThirdStepIcon />;
    }
  }

  const BaseText = ({step}) => {
    switch (step) {
      case 1:
        return (
          <>
            <div>
              Выполняй задания — получай токены Life
            </div>
            <div>
              С помощью Life ты сможешь вести более продуктивную и осмысленную жизнь
            </div>
          </>
        );
      case 2:
        return (
          <div>
            Выбирай до трех приоритетных категорий
          </div>
        );
      case 3:
        return (
          <div>
            Получай ежедневно по 5 заданий из случайных категорий и 5 из приоритетных
          </div>
        );
    }
  }

  return (
    <div className="start">
      <div className="upper-block">
        <div className="img">
          <SelectIcon step={step} />
          </div>
        </div>
      <div className='middle-block'>
        <BaseText step={step} />
      </div>
      <div> 
        <SliderIcon step={step}/>
      </div>
      <div className="controls">
          <button
              onClick={() => setStep((step) => {
                if (step + 1 === 4) {
                  navigate('/home');
                }
                return step + 1;
              })}  
          >
            Дальше
          </button>
        </div>
    </div>
  );
};

export default Start;
