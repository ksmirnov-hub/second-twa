import React from 'react';
import { useNavigate } from 'react-router-dom';

import './calendar.css';

import ArrowBack from '../../images/arrow_back.png';
import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css';

const Home = () => {
  const navigate = useNavigate();

  const onSelectedDay = (d) => {
    console.log(d)
  }

  return (
    <div className="account">
        <div className='header-account'>
            <div className='arrow'>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/home')}}  
                >
                    <img src={ArrowBack} alt="" />
                </button>
            </div>
            <div className='title'></div>
        </div>
        <div className='calendar'>
            <div>
                <ReactHorizontalDatePicker
                    selectedDay={onSelectedDay}
                    enableScroll={true}
                    enableDays={180}
                />
            </div>
        </div>
        <div className='schedule'>
            <div></div>
        </div>
    </div>
  );
};

export default Home;
