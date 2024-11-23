import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './stockpiles.css';

import LogoHome from '../../images/logo-home.png';
import StockPilesIcon from '../../images/stockpiles/stockPilesIcon';
import TelegramIcon from '../../images/logos/telegramIcon';
import InstagramIcon from '../../images/logos/instagramIcon';
import BybitIcon from '../../images/logos/bybitIcon';
import TonIcon from '../../images/logos/tonIcon';

import Coins from '../../images/coins-gold';

import ArrowBack from '../../images/arrow-white.png';
import ArrowRight from '../../images/arrow-right.png';

import { useSelector, useDispatch } from 'react-redux';
import { useRegisterTapMutation } from '../../store';
import { profileActions } from '../../store';

import Basement from '../../components/basement';

const StockPiles = () => {
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
    // registerTap();
}, [])

useEffect(() => {
    if (isSuccess) {
        dispatch(profileActions.getProfile());
    }
}, [isSuccess]);

  return (
    <div className="home">
        <div className='header'>
            <div className='navigation-block'>
                <div className='header-arrow'>
                    <button
                        className='button-flat'
                        onClick={() => {
                            navigate('/home')
                        }} 
                    >
                        <img src={ArrowBack} alt="" />
                    </button>
                </div>
                <div className='title'>Накопления</div>
            </div>
        </div>
        <div className='content'>
            <div>
                <StockPilesIcon />
            </div>
            <div>
                <div>
                    <div className='balance-title'>Текущий  баланс</div>
                    <div className='balance-number'>73003,00</div>
                </div>
            </div>
            <div>
                <div className='title-1'>Больше токенов</div>
                <div className='description-1'>Поддержи - получи Life</div>
                <div className='list-1'>
                {
                    [{name: 'Telegram'}, {name: 'Instagram'}].map((item, index) => {
                        return (
                            <div
                                className="stock"
                                key={index}
                                onClick={() => { }}
                            >
                                <div className='task-photo'>
                                    { index === 0 ? <TelegramIcon /> : <InstagramIcon />}
                                </div>
                                <div className='task-name'>
                                    <div>
                                        <div>{item.name}</div>
                                    </div>
                                    <div className='coins'>
                                        <Coins />
                                        <div className='coins-number'>1</div>
                                    </div>
                                </div>
                                <div>
                                    <img src={ArrowRight} />
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div>
                <div className='description-1'>Подпишись - получи Life</div>
                <div className='list-1'>
                {
                    [{name: 'Bybit Listing'}, {name: 'Ton Keeper Listing'}].map((item, index) => {
                        return (
                            <div
                                className="stock"
                                key={index}
                                onClick={() => { }}
                            >
                                <div className='task-photo'>
                                    { index === 0 ? <BybitIcon /> : <TonIcon />}
                                </div>
                                <div className='task-name'>
                                    <div>
                                        <div>{item.name}</div>
                                    </div>
                                    <div className='coins'>
                                        <Coins />
                                        <div className='coins-number'>1</div>
                                    </div>
                                </div>
                                <div>
                                    <img src={ArrowRight} />
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            
        </div>
        <Basement current='stockpiles' />
    </div>
  );
};

export default StockPiles;