import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './home.css';

import TelegramIcon from '../../images/tg.png';
import LogoHome from '../../images/logo-home.png';
import Usd from '../../images/usd.png';
import Location from '../../images/note.png';
import List from '../../images/category.png';
import HomeActive from '../../images/home-active.png';
import PremiumIcon from '../../images/premium';
import ShareIcon from '../../images/share';
import SupportIcon from '../../images/support';
import ArrowRightIcon from '../../images/arrow-right.png';

import { useSelector, useDispatch } from 'react-redux';
import { useRegisterTapMutation } from '../../store';
import { profileActions } from '../../store';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
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
    registerTap();
}, [])

useEffect(() => {
    if (isSuccess) {
        dispatch(profileActions.getProfile());
    }
}, [isSuccess])

const copyToClipBoard = () => {
    navigator.clipboard.writeText('@SecondAppBot')
    .then(() => {
        var tooltip = document.getElementById("tooltip");
        tooltip.classList.remove('hidden'); 
        setTimeout(() => {
            tooltip.classList.add('hidden'); 
        }, 1000)
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
}

  return (
    <div className="home">
        <div className='header-home'>
            <div className='home-title'>Домой</div>
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
                <div className="block">
                    <div className="row">
                        <div>
                            <PremiumIcon />
                        </div>
                        <div className='name'>
                            Премиум подписка
                        </div>
                    </div>
                    <div className='subscribe'>В ожидании</div>
                </div>
                <div className="block">
                    <div
                     className="row relative"
                     onClick={() => copyToClipBoard()}
                    >
                        <div>
                            <ShareIcon />
                        </div>
                        <div className='name'>
                            Пригласи друга
                        </div>
                        <div id="tooltip" className='tooltip hidden'>
                            Адрес скопирован
                        </div>
                    </div>
                    <div className='subscribe'>
                        <img src={ArrowRightIcon} alt="" />
                    </div>
                </div>
                <div className="block">
                    <div
                        className="row"
                    >
                        <div>
                            <SupportIcon />
                        </div>
                        <div className='name'>
                            Техподдержка
                        </div>
                    </div>
                    <div className='subscribe'>
                        <img src={ArrowRightIcon} alt="" />
                    </div>
                </div>
            </div>

            <div className='photo-block'>
                <button
                    onClick={() => registerTap()}
                >
                    <img src={LogoHome} />
                </button>
            </div>
            <div className='scores'>
                <div className='total'>Всего намайнено:</div>
                <div className='total-scores'>
                    <div className='balance'>{profile.available_for_tap} </div>
                    <div>lifecoin</div>
                </div>
            </div>
            <div className='scores'>
                <div className='total'>Общий баланс:</div>
                <div className='balance-scores'>
                    <div className='balance'>{profile.balance} </div>
                    <div>lifecoin</div>
                </div>
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
