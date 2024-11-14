import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import ArrowBack from '../../images/arrow-white.png';
import './about.css';

import Basement from '../../components/basement';

const About = () => {
  const navigate = useNavigate();

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
                <div className='title'>Зачем тебе Life Coin?</div>
            </div>
        </div>
        <div className='about-content'>
            <div className='subtitle'>Добро пожаловать в Life Coin!</div>
            <div>
               Life Coin - это приложение, которое поможет тебе улучшить свою жизнь, стать лучше и получить награду за свои достижения!
            </div> 
              <div> &nbsp; </div>
            <div className='subtitle'>Зачем тебе Life Coin?</div>
            <div>
              <div className='paragraph'>Мотивация: </div>
              <div>
                Life Coin - это твой личный мотиватор для достижения целей. Выполняй задания, зарабатывай монеты и становись лучшей версией себя!
              </div>
                <div> &nbsp; </div>
              <div className='paragraph'>Полезные привычки: </div>
              <div>
                В приложении собраны задания, которые помогут тебе развить полезные привычки: от здорового образа жизни до саморазвития.
                5 заданий генерируются ежедневно еще 5 заданий формируются из выбранных приоритетных категорий.
              </div>
                <div> &nbsp; </div>
              <div className='paragraph'>Награда за старания: </div>
              <div>
                Накопленные монеты Life можно использовать для получения скидок на товары и услуги, участие в розыгрышах и других интересных акциях!
              </div>
            </div>
              <div> &nbsp; </div>
            <div className='subtitle'>Что можно делать в Life Coin?</div>
            <div>
                <div className='paragraph'>Выполнять задания:</div> 
                <div>
                  Выбирай задания из 21 категории, которые соответствуют твоим интересам и целям. Можно выбрать три приоритетные категории заданий.
                </div>
                  <div> &nbsp; </div>
                <div className='paragraph'>
                Собирать монеты:
                </div>
                <div>
                  За выполнение заданий ты получаешь монеты Life. 
                </div>
                  <div> &nbsp; </div>
                <div className='paragraph'>Получать бонусы: </div>
                <div>
                  Нажимай кнопку сбора монет каждые 2 часа и получай по 1 монете!
                </div>
                  <div> &nbsp; </div>
                <div className='paragraph'>Следить за прогрессом: </div>
                <div>В приложении есть удобный трекер прогресса, чтобы ты всегда знал, как далеко ты продвинулся.</div>
            </div>
            <div> &nbsp; </div>
            <div className='subtitle'>Зачем накапливать монеты Life?</div>
            <div>
                <div className='paragraph'>Скидки:</div> 
                <div>Используй монеты Life, чтобы получить скидки на покупки в магазинах, которые сотрудничают с приложением.</div>
                  <div> &nbsp; </div>
                <div className='paragraph'>Специальные предложения: </div>
                <div>
                  Получай эксклюзивные предложения и бонусы от партнеров Life Coin.
                  Начни свой путь к лучшей версии себя с Life Coin!
                </div>
            </div>
              <div> &nbsp; </div>
            <div className='subtitle'>Дополнительные советы:</div>

            <div>
                <div className='paragraph'>
                Выбирай задания, которые тебе интересны: 
                </div>
                <div>
                  Так ты получишь больше удовольствия от использования приложения.
                  Не пропускай кнопку сбора монет: Каждые 2 часа ты можешь получить бесплатную монету!
                </div>
                <div> &nbsp; </div>
                <div>Следи за новостями в приложении: </div>
                <div>Узнавай о новых заданиях, розыгрышах и акциях!</div>
                <div>
                Life Coin - это не просто приложение, это твой личный компаньон на пути к успеху!
                </div>
                <div> &nbsp; </div>
            </div>

        </div>
        <Basement current='home' />
    </div>
  );
};

export default About;
