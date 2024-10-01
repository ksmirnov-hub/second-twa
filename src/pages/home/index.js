import React from 'react';
import { useNavigate  } from 'react-router-dom';

import './home.css';

import Logo from 'images/notificationsIcon';
import TelegramIcon from 'images/tg.png';
import InstagramIcon from 'images/insta.png';
import Operations from 'images/operations.png';
import Location from 'images/where.png';
import List from 'images/list.png';
import Person from 'images/person.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
        <div className='header'>
            <div>Домой</div>
            <div><Logo /></div>
        </div>
        <div className="block">
            <div className="row">
                <img src={TelegramIcon} />
                <div className='name'>Телеграм</div>
            </div>
            <div className='subscribe'>Подписаться</div>
        </div>
        <div className="block">
            <div className="row">
                <img src={InstagramIcon} />
                <div className='name'>Инста</div>
            </div>
            <div className='subscribe'>
                Подписаться
            </div>
        </div>
        <div className="block"></div>
        <div className="block">
            <div>
                <button
                    onClick={() => {navigate('/account')}}  
                    className='button'
                >
                    Аккаунт
                </button>
            </div>
        </div>
        <div className="block">Премиум подписка</div>
        <div className="block">Язык</div>
        <div className="block">Календарь</div>
        <div className="block">Техподдержка</div>
        <div className="block">Темная тема</div>
        <div className="block">Подписаться на группу</div>
        <div className="block no-border">Выйти</div>
        <div className="down">
            <div>
                <img src={Operations} />
            </div>
            <div>
                <img src={Location} />
            </div>
            <div>
                <img src={List} />
            </div>
            <div>
                <img src={Person} />
            </div>
        </div>
    </div>
  );
};

export default Home;
