import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './home.css';

import TelegramIcon from '../../images/tg.png';
import LogoHome from '../../images/logo-home.png';

import PremiumIcon from '../../images/premium';
import ShareIcon from '../../images/share';
import SupportIcon from '../../images/support';
import ArrowRightIcon from '../../images/arrow-right.png';

import DescriptionIcon from '../../images/description';

import { useSelector, useDispatch } from 'react-redux';
import { useRegisterTapMutation } from '../../store';
import { profileActions } from '../../store';

import Basement from '../../components/basement';

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
    const user = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649';
    navigator.clipboard.writeText('https://t.me/Life_coinbot?start=' + user)
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
                <div className="block" style={{display: 'none'}}>
                    <div className="row">
                        <img src={TelegramIcon} alt="" />
                        <div className='name'>Телеграм</div>
                    </div>
                    <div className='subscribe'>Подписаться</div>
                </div>
                <div className="block" style={{display: 'none'}}>
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
                <div className="block" 
                     onClick={() => copyToClipBoard()}
                >
                    <div className="row relative">
                        <div>
                            <ShareIcon />
                        </div>
                        <div className='name invite'>
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
                <div className="block" style={{display: 'none'}}>
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
                <div className="block"
                     onClick={() => {
                        navigate('/about')
                     }}
                >
                    <div
                        className="row"
                    >
                        <div>
                            <DescriptionIcon />
                        </div>
                        <div className='name'>
                            Зачем тебе Life Coin?
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
        <Basement current='home' />
    </div>
  );
};

export default Home;
