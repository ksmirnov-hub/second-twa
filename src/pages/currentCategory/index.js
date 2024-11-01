import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';

import './currentCategory.scss';

import Everyday from '../../images/categories/everyday';
import Morning from '../../images/categories/morning';
import Nutrition from '../../images/categories/nutrition';
import Sleep from '../../images/categories/sleep';
import Creativity from '../../images/categories/creativity';
import Child from '../../images/categories/child';
import Study from '../../images/categories/study';
import Meditation from '../../images/categories/medittation';
import Languages from '../../images/categories/languages';
import Planing from '../../images/categories/planing';
import NoProcrastination from '../../images/categories/noprocrastination';
import Performance from '../../images/categories/performance';
import Assistent from '../../images/categories/assistent';
import Yourself from '../../images/categories/yourself';
import StressManagement from '../../images/categories/stressmanagemnet';
import Listen from '../../images/categories/listen';
import HomeCategory from '../../images/categories/home';
import Ecolodgy from '../../images/categories/ecology';
import Emotion from '../../images/categories/emotion';
import Networking from '../../images/categories/networking';

import Usd from '../../images/usd.png';
import Location from '../../images/note.png';
import List from '../../images/category.png';
import HomeActive from '../../images/home-active.png';
import ArrowBack from '../../images/arrow-white.png';

import { useAddToFavoritesMutation } from '../../store';

const categoryImages = {
    'Повседневные': <Everyday />,
    'Утро': <Morning />,
    'Питание': <Nutrition />,
    'Сон': <Sleep />,
    'Творчество': <Creativity />,
    'Внутренний ребенок': <Child />,
    'Изучение языков': <Languages />,
    'Умение учиться': <Study />,
    'Медитация': <Meditation />,
    'Планирование': <Planing />,
    'Без прокрастинации': <NoProcrastination />,
    'Публичные выступления': <Performance />,
    'Развитие второй руки': <Assistent />,
    'Знание себя': <Yourself />,
    'Управление стрессом': <StressManagement />,
    'Активное слушание': <Listen />,
    'Быть дома': <HomeCategory />,
    'Экологическая сознательность': <Ecolodgy />,
    'Эмоциональный интеллект': <Emotion />,
    'Нетворкинг': <Networking />,
    /**'Благотворительность': Charity **/
}

// import { useFetchOneCategoryQuery } from '../../store';

const CurrentCategory = () => {
  const navigate = useNavigate();
  const { state = {} } = useLocation();
  const [
    addToFavorites,
    {
        isLoading,
        isSuccess,
        isError,
        error,
        reset
    }
  ] = useAddToFavoritesMutation(state?.category_id);

  useEffect(() => {
    if (isSuccess) {
        navigate('/categories');
    }
  }, [isSuccess]);

  const CategoryIcon = ({name}) => (categoryImages[name] || <Everyday />);

  return (
    <div className="current-category">
        <div className='header'>
            <div className='navigation-block'>
                <div className='header-arrow'>
                    <button
                        className='button-flat'
                        onClick={() => {
                            navigate('/tasks', {
                                state: {
                                    category_id: state?.category_id,
                                } })
                        }} 
                    >
                        <img src={ArrowBack} alt="" />
                    </button>
                </div>
                <div className='title'>Прогресс</div>
            </div>
        </div>
        <div className='content-category'>

            <div className='content-category-icon'>
                <CategoryIcon name={state?.name} />
            </div>
            <div className='content-category-name'>
                {state?.name}
            </div>
            <div className='content-category-description'>
                {state?.description}
            </div>

        </div>
        <div className='content-category-control'>
            <button
                onClick={() => {
                    addToFavorites(state?.category_id);
                }}
            >
               <div>Сделать приоритетом</div>  
            </button>
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

export default CurrentCategory;
