import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './home.css';

import TelegramIcon from '../../images/tg.png';
import LogoHome from '../../images/logo-home.png';
import Usd from '../../images/usd.png';
import Location from '../../images/note.png';
import List from '../../images/category.png';
import HomeActive from '../../images/home-active.png';
import ArrowBack from '../../images/arrow-white.png';

import { useRegisterTapMutation } from '../../store';

const Home = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [
    registerTap,
    {
        data = {},
        isLoading,
        isSuccess,
        isError,
        error,
        reset
    }
] = useRegisterTapMutation();

useEffect(() => {
    if (data.balance) {
        setBalance(data.balance);
    }
}, [data.balance])

console.log('data', data)
  return (
    <div className="home">
        <div className='header-home'>
            <div className='arrow'>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/start')}}  
                >
                    <img src={ArrowBack} alt="" />
                </button>
            </div>
            <div className='title'>Домой</div>
        </div>
        <div className='content'>

            <div className='links'>
                <div className="block">
                    <div className="row">
                        <img src={TelegramIcon} alt="" />
                        <div className='name'>Телеграм</div>
                    </div>
                    <div className='subscribe'>Подписаться</div>
                </div>
                <div className="block">Премиум подписка</div>
                <div className="block">Календарь</div>
                <div className="block">Техподдержка</div>
            </div>

            <div className='photo-block'>
                <button
                    onClick={() => registerTap()}
                >
                    <img src={LogoHome} />
                </button>
            </div>
            <div className='scores'>
                {balance} lifecoin
            </div>
        </div>
        <div className="down">
            <div>
                <img src={Usd} alt="" />
            </div>
            <div>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/tasks')}}  
                >
                    <img src={Location} alt="" />
                </button>
            </div>
            <div>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/categories')}}  
                >
                    <img src={List} alt="" />
                </button>
            </div>
            <div>
                <img src={HomeActive} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Home;
