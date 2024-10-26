import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';

import './currentCategory.scss';

import Everyday from '../../images/categories/everyday-large.png';

import Usd from '../../images/usd.png';
import Location from '../../images/note.png';
import List from '../../images/category.png';
import HomeActive from '../../images/home-active.png';
import ArrowBack from '../../images/arrow-white.png';

// import { useFetchOneCategoryQuery } from '../../store';

const CurrentCategory = () => {
  const navigate = useNavigate();
  const { state = {} } = useLocation();
  // const {isLoading, isError, data = []} = useFetchOneCategoryQuery(state?.category_id);

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
                <div className='title'>Пргоресс</div>
            </div>
        </div>
        <div className='content-category'>

            <div className='content-category-icon'>
                <img width="170px" height="170px" src={Everyday} />
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
                onClick={() => {}}
            >
                Сделать приоритетом
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
