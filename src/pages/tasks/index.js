import React from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import './tasks.scss';

import ArrowBack from '../../images/arrow-white.png';
import ArrowRight from '../../images/arrow-right.png';

import Coins from '../../images/coins.png';
import Everyday from '../../images/categories/everyday.png';
import { Spinner } from '@chakra-ui/react';

import Basement from '../../components/basement';

import { useGetTasksQuery } from '../../store';

const Tasks = () => {
  const navigate = useNavigate();
  const { state = {} } = useLocation();
  const { isLoading, data = []} = useGetTasksQuery(state?.category_id);

  return (
    <div className="tasks">
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
                <div className='title'>Задания</div>
            </div>
        </div>
        <div className='tasks-content'>

            <div className='tasks-inner'>
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
                                          <div
                                            className="task active"
                                            key={index}
                                            onClick={() => {
                                                navigate('/task', { state: { task_id: item.id } })
                                            }}
                                          >
                                            <div className='task-photo'>
                                                <img src={Everyday} alt="Type" />
                                            </div>
                                            <div className='task-name'>
                                                <div>
                                                  <div>{item.name}</div>
                                                </div>
                                                <div className='category-name'>{item.category}</div>
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
            <Basement current='tasks' />
        </div>
    </div>
  );
};

export default Tasks;