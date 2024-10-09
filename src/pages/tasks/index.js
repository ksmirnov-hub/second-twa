import React from 'react';
import { useNavigate  } from 'react-router-dom';
import './tasks.scss';
import Usd from '../../images/usd.png';
import NoteActive from '../../images/note-active.png';
import Category from '../../images/category.png';
import ArrowBack from '../../images/arrow-white.png';
import ArrowRight from '../../images/arrow-right.png';
import Home from '../../images/home.png';
import Coins from '../../images/coins.png';
import Everyday from '../../images/categories/everyday.png';

const Tasks = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
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
        <div className='content'>

            <div className='categories'>
                <div className="task active">
                    <div className='task-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='task-name'>
                        <div>
                          <div>Покормить котов</div>
                        </div>
                        <div className='category-name'>Повседневные</div>
                        <div className='coins'>
                          <img src={Coins} />
                          <div className='coins-number'>1</div>
                        </div>
                    </div>
                    <div>
                      <img src={ArrowRight} />
                    </div>
                </div>
                <div
                  className="task active"
                  onClick={() => navigate('/task')}
                >
                    <div className='task-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='task-name'>
                        <div>
                          <div>Прочитать книгу</div>
                        </div>
                        <div className='category-name'>Повседневные</div>
                        <div className='coins'>
                          <img src={Coins} />
                          <div className='coins-number'>1</div>
                        </div>
                    </div>
                    <div>
                      <img src={ArrowRight} />
                    </div>
                </div>
                <div className="task active"
                  onClick={() => navigate('/task')}
                >
                    <div className='task-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='task-name'>
                        <div>
                          <div>Сходить в музей</div>
                        </div>
                        <div className='category-name'>Повседневные</div>
                        <div className='coins'>
                          <img src={Coins} />
                          <div className='coins-number'>1</div>
                        </div>
                    </div>
                    <div>
                      <img src={ArrowRight} />
                    </div>
                </div>
                <div className="task"
                  onClick={() => navigate('/task')}
                >
                    <div className='task-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='task-name'>
                        <div>
                          <div>Начать изучать язык</div>
                        </div>
                        <div className='category-name'>Повседневные</div>
                        <div className='coins'>
                          <img src={Coins} />
                          <div className='coins-number'>1</div>
                        </div>
                    </div>
                    <div>
                      <img src={ArrowRight} />
                    </div>
                </div>
                <div className="task"
                  onClick={() => navigate('/task')}
                >
                    <div className='task-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='task-name'>
                        <div>
                          <div>Узнать мнение незнакомца о фильме</div>
                        </div>
                        <div className='category-name'>Повседневные</div>
                        <div className='coins'>
                          <img src={Coins} />
                          <div className='coins-number'>1</div>
                        </div>
                    </div>
                    <div>
                      <img src={ArrowRight} />
                    </div>
                </div>
                <div className="task"
                  onClick={() => navigate('/task')}
                >
                    <div className='task-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='task-name'>
                        <div>
                          <div>Новое задание</div>
                        </div>
                        <div className='category-name'>Повседневные</div>
                        <div className='coins'>
                          <img src={Coins} />
                          <div className='coins-number'>1</div>
                        </div>
                    </div>
                    <div>
                      <img src={ArrowRight} />
                    </div>
                </div>
                <div className="task"
                  onClick={() => navigate('/task')}
                >
                    <div className='task-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='task-name'>
                        <div>
                          <div>Узнать мнение незнакомца о фильме</div>
                        </div>
                        <div className='category-name'>Повседневные</div>
                        <div className='coins'>
                          <img src={Coins} />
                          <div className='coins-number'>1</div>
                        </div>
                    </div>
                    <div>
                      <img src={ArrowRight} />
                    </div>
                </div>
                <div className="task"
                  onClick={() => navigate('/task')}
                >
                    <div className='task-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='task-name'>
                        <div>
                          <div>Узнать мнение незнакомца о фильме</div>
                        </div>
                        <div className='category-name'>Повседневные</div>
                        <div className='coins'>
                          <img src={Coins} />
                          <div className='coins-number'>2</div>
                        </div>
                    </div>
                    <div>
                      <img src={ArrowRight} />
                    </div>
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