import React from 'react';
import { useNavigate  } from 'react-router-dom';

import './basement.css';

import Usd from '../../images/controls/usd';
import UsdActiveIcon from '../../images/controls/usd-active';
import Note from '../../images/controls/note';
import NoteActiveIcon from '../../images/controls/note-active';
import List from '../../images/controls/list';
import ListActiveIcon from '../../images/controls/list-active';
import HomeActive from '../../images/controls/home-active';
import Home from '../../images/controls/home';

const Basement = ({
    current = ''
}) => {
  const navigate = useNavigate();

  return (
    <div className="down">
        <div className='down-control'>
        {
                current === 'stockpiles' ? <UsdActiveIcon /> : (
                    <button
                        className='button-flat'
                        onClick={() => {navigate('/stockpiles')}}  
                    >
                        <Usd />
                    </button>
                )
            }
        </div>
        <div className='down-control'>
            {
                current === 'tasks' ? <NoteActiveIcon /> : (
                    <button
                        className='button-flat'
                        onClick={() => {navigate('/tasks')}}  
                    >
                        <Note />
                    </button>
                )
            }
        </div>
        <div className='down-control'>
            {
                current === 'categories' ? <ListActiveIcon /> : (
                    <button
                        className='button-flat'
                        onClick={() => {navigate('/categories')}}  
                    >
                        <List />
                    </button>
                )
            }
        </div>
        <div className='down-control'>
            {
                current === 'home' ? <HomeActive /> : (
                    <button
                        className='button-flat'
                        onClick={() => {navigate('/home')}}  
                    >
                        <Home />
                    </button>
                )
            }
        </div>
    </div>
  );
};

export default Basement;
