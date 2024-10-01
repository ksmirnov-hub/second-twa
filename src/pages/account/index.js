import React from 'react';
import { useNavigate } from 'react-router-dom';

import './account.css';

import Edit from 'images/edit.png';
import ArrowBack from 'images/arrow_back.png';

const Home = () => {
  const navigate = useNavigate();
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
            <div className='title'>Аккаунт</div>
        </div>
        <div className='photo'>Фотография</div>
        <div className='photo-block'>
            <div className='circle' />
        </div>
        <div className='photo-block'>
            <div className='edit'>
                <img src={Edit} alt="" />
                <div>Редактировать</div>
            </div>
        </div>
        <div className='baseInfo'>Основная информация</div>
        <div className='item'>
            <div className='title'>Имя</div>
        </div>
        <div className='item'>
            <div className='title'>Фамилия</div>
        </div>
        <div className='item'>
            <div className='title'>Телефон</div>
        </div>
        <div className='item'>
            <div className='title'>Город</div>
        </div>
        <div className='item item-no-bottom'>
            <div className='button-save'>Сохранить</div>
        </div>
    </div>
  );
};

export default Home;
