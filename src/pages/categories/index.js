import React from 'react';
import { useNavigate  } from 'react-router-dom';
import trim from 'lodash/trim';
import './categories.css';

import { Spinner } from '@chakra-ui/react';

import Everyday from '../../images/categories/everyday.png';
import Morning from '../../images/categories/morning.png';
import Nutrition from '../../images/categories/nutrition.png';
import Sleep from '../../images/categories/sleep.png';
import Creativity from '../../images/categories/creativity.png';
import Child from '../../images/categories/child.png';
import Languages from '../../images/categories/languages.png';
import Study from '../../images/categories/study.png';
import Meditation from '../../images/categories/meditation.png';
import Planing from '../../images/categories/planning.png';
import NoProcrastination from '../../images/categories/noprocrastination.png';
import Performance from '../../images/categories/performance.png';
import Assistent from '../../images/categories/assistent.png';
import Yourself from '../../images/categories/yourself.png';
import StressManagement from '../../images/categories/stressmanagement.png';
import Listen from '../../images/categories/listen.png';
import HomeCategory from '../../images/categories/home.png';
import Ecolodgy from '../../images/categories/ecolodgy.png';
import Emotion from '../../images/categories/emotion.png';
import Networking from '../../images/categories/networking.png';
import Charity from '../../images/categories/charity.png';
import Usd from '../../images/usd.png';
import Location from '../../images/note.png';
import CategoriesActive from '../../images/categories-active.png';
import ArrowBack from '../../images/arrow-white.png';
import ArrowRight from '../../images/arrow-right.png';
import Home from '../../images/home.png';

import { useFetchCategoriesQuery } from '../../store';

const categoryImages = {
    'Повседневные': Everyday,
    'Утро': Morning,
    'Питание': Nutrition,
    'Сон': Sleep,
    'Творчество': Creativity,
    'Внутренний ребенок': Child,
    'Изучение языков': Languages,
    'Умение учиться': Study,
    'Медитация': Meditation,
    'Планирование': Planing,
    'Без прокрастинации': NoProcrastination,
    'Публичные выступления': Performance,
    'Развитие второй руки': Assistent,
    'Знание себя': Yourself,
    'Управление стрессом': StressManagement,
    'Активное слушание': Listen,
    'Быть дома': HomeCategory,
    'Экологическая сознательность': Ecolodgy,
    'Эмоциональный интеллект': Emotion,
    'Нетворкинг': Networking,
    'Благотворительность': Charity
}

const Categories = () => {
  const navigate = useNavigate();
  const {isLoading, isError, data = []} = useFetchCategoriesQuery();

  const elementWidth = () => {
    return Math.floor(Math.random() * (100 - 0));
  };
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
                <div className='title'>Домой</div>
            </div>
        </div>
        <div className='content'>

            <div className='categories'>
                {
                    isLoading ? (
                        <>
                            <div className='spinner'>
                                <Spinner size='xl' />
                            </div>
                        </>
                    ) : (
                            <>
                                {
                                    data.map((item, index) => {
                                        const progress = elementWidth();
                                        return (
                                            <div
                                                className="category"
                                                key={index}
                                                onClick={() => {
                                                    navigate('/category', {
                                                        state: {
                                                            category_id: item.id,
                                                            description: item.description,
                                                            name: item.name
                                                        } })
                                                }}
                                            >
                                                <div className='category-photo'>
                                                    <img src={categoryImages[trim(item.name)] || Everyday} />
                                                </div>
                                                <div className='category-progress'>
                                                    <div>{item.name}</div>
                                                    <div className='progress-bar'>
                                                        <div className='base'></div>
                                                        <div className='progress' style={{
                                                            width: `${progress}%`,
                                                            }}>
                                                        </div>
                                                    </div>
                                                    <div className='progress-result'>
                                                        {
                                                            progress + '/100'
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={ArrowRight} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                }
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
                <img src={CategoriesActive} alt="" />
            </div>
            <div>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/home')}}  
                >
                    <img src={Home} alt="" />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Categories;
