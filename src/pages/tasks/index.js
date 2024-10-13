import React from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import './tasks.scss';
import Usd from '../../images/usd.png';
import NoteActive from '../../images/note-active.png';
import Category from '../../images/category.png';
import ArrowBack from '../../images/arrow-white.png';
import ArrowRight from '../../images/arrow-right.png';
import Home from '../../images/home.png';
import Coins from '../../images/coins.png';
import Everyday from '../../images/categories/everyday.png';
import { Spinner } from '@chakra-ui/react';

import { useGetTasksQuery } from '../../store';

const Tasks = () => {
  const navigate = useNavigate();
  const { state = {} } = useLocation();
  const { isLoading, data = []} = useGetTasksQuery(state?.category_id);

  return (
    <div className="tasks">
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
        <div className='tasks-content'>

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
                                        return (
                                          <div className="task active" key={index}>
                                            <div className='task-photo'>
                                                <img src={Everyday} alt="Type" />
                                            </div>
                                            <div className='task-name'>
                                                <div>
                                                  <div>{item.name}</div>
                                                </div>
                                                <div className='category-name'>Повседневные</div>
                                                <div className='coins'>
                                                  <img src={Coins} alt="Coins" />
                                                  <div className='coins-number'>{item.reward}</div>
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
    </div>
  );
};

export default Tasks;