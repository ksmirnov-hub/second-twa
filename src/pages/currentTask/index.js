import React from 'react';
import { useNavigate  } from 'react-router-dom';
import './currentTask.scss';
import Usd from '../../images/usd.png';
import NoteActive from '../../images/note-active.png';
import Category from '../../images/category.png';
import ArrowBack from '../../images/arrow-white.png';
import Home from '../../images/home.png';
import Expand from '../../images/expand.png';
import Collapse from '../../images/collapse.png';

const Tasks = () => {
  const navigate = useNavigate();

  return (
    <div className="current">
        <div className='header-categories'>
            <div className='arrow'>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/start')}}  
                >
                    <img src={ArrowBack} alt="" />
                </button>
            </div>
            <div className='title'>Задания</div>
        </div>
        <div className='current-task-content'>
            <div className='current-task-title'>
                <div>
                    Узнай мнение незнакомца о фильме
                </div>
                <div className='date'>
                    01.01.2024
                </div>
            </div>
            <div className='task-instructions'>
                <div className='howto'>
                    <div>Как делать:</div>
                    <div>Сходи в кинотеатр на какой-нибудь новый фильм...</div>
                    <div>
                        <button>
                            <div className='expand'>
                                <div>Читать подробнее</div>
                                <div>
                                    <img src={Expand} alt="" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='howto'>
                    <div>Зачем делать:</div>
                    <div>Эта практика формирует круг знакомств и...</div>
                    <div>
                        <button>
                            <div className='expand'>
                                <div>Читать подробнее</div>
                                <div>
                                    <img src={Expand} alt="" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='controls'>
                <div>
                    <button>
                        Выполнено
                    </button>
                </div>
                <div>
                    <button>
                        Отказаться
                    </button>
                </div>
            </div>
        </div>
        <div className="down">
            <div>
                <img src={Usd} alt="" />
            </div>
            <div>
                <img src={NoteActive} alt="" />
            </div>
            <div>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/categories')}}  
                >
                  <img src={Category} alt="" />
                </button>
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

export default Tasks;