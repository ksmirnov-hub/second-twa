import React from 'react';
import { useNavigate  } from 'react-router-dom';

import './categories.css';

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
import Home from '../../images/home.png';

const Categories = () => {
  const navigate = useNavigate();
  const elementWidth = 50;
  return (
    <div className="home">
        <div className='header-home'>
            <div className='arrow'>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/start')}}  
                >
                    <img src={ArrowBack} alt="" />
                </button>
            </div>
            <div className='title'>Прогресс</div>
        </div>
        <div className='content'>

            <div className='categories'>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Everyday} />
                    </div>
                    <div className='category-progress'>
                        <div>Повседневные</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${elementWidth}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>20/20</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Morning} />
                    </div>
                    <div className='category-progress'>
                        <div>Утро</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${100}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>20/20</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Nutrition} />
                    </div>
                    <div className='category-progress'>
                        <div>Питание</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Sleep} />
                    </div>
                    <div className='category-progress'>
                        <div>Сон</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Creativity} />
                    </div>
                    <div className='category-progress'>
                        <div>Творчество</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Child} />
                    </div>
                    <div className='category-progress'>
                        <div>Внутренний ребенок</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Languages} />
                    </div>
                    <div className='category-progress'>
                        <div>Изучение языков</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Study} />
                    </div>
                    <div className='category-progress'>
                        <div>Умение учиться</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Meditation} />
                    </div>
                    <div className='category-progress'>
                        <div>Медитация</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Planing} />
                    </div>
                    <div className='category-progress'>
                        <div>Планирование</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={NoProcrastination} />
                    </div>
                    <div className='category-progress'>
                        <div>Без прокрастинации</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Performance} />
                    </div>
                    <div className='category-progress'>
                        <div>Публичные выступления</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Assistent} />
                    </div>
                    <div className='category-progress'>
                        <div>Развитие второй руки</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Yourself} />
                    </div>
                    <div className='category-progress'>
                        <div>Знание себя</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={StressManagement} />
                    </div>
                    <div className='category-progress'>
                        <div>Управление стрессом</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Listen} />
                    </div>
                    <div className='category-progress'>
                        <div>Активное слушание</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={HomeCategory} />
                    </div>
                    <div className='category-progress'>
                        <div>Быть дома</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Ecolodgy} />
                    </div>
                    <div className='category-progress'>
                        <div>Экологическая сознательность</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Emotion} />
                    </div>
                    <div className='category-progress'>
                        <div>Эмоциональный интеллект</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Networking} />
                    </div>
                    <div className='category-progress'>
                        <div>Нетворкинг</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
                <div className="category">
                    <div className='category-photo'>
                        <img src={Charity} />
                    </div>
                    <div className='category-progress'>
                        <div>Благотворительность</div>
                        <div className='progress-bar'>
                            <div className='base'></div>
                            <div className='progress' style={{
                                width: `${30}%`,
                                }}>
                            </div>
                        </div>
                        <div className='progress-result'>25/75</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="down">
            <div>
                <img src={Usd} alt="" />
            </div>
            <div>
                <img src={Location} alt="" />
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
