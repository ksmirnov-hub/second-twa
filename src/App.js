import { Routes, Route } from 'react-router-dom';

import './App.css';
import AppLayout from './layouts/AppLayout';
import Start from './pages/start/start';
import Home from './pages/home';
import Hello from './pages/hello';
import Account from './pages/account';
import Calendar from './pages/calendar';
import Categories from './pages/categories';
import Tasks from './pages/tasks';
import CurrentTask from './pages/currentTask';
import CurrentCategory from './pages/currentCategory';
import About from './pages/about';
import StockPiles from './pages/stockpiles';

import { useState, useEffect } from 'react';
import { profileActions } from '../src/store';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
	const profile = useSelector((state) => state.profile);
  const [ startPage, setStartPage ] = useState(<Hello />);

  useEffect(() => {
    const isNewUser = profile.is_new_user;
    if (profile.id) {
      setTimeout(() => {
        setStartPage(isNewUser ? <Start /> : <Home />)
      }, 3000)
    }
  }, [profile])

	useEffect(() => {
			dispatch(profileActions.getProfile());
	}, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={startPage} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="about" element={<About />} />
        <Route path="start" element={<Start />} />
        <Route path="hello" element={<Hello />} />
        <Route path="stockpiles" element={<StockPiles />} />
        <Route path='task' element={<CurrentTask />} />
        <Route path='category' element={<CurrentCategory />} />
        <Route path="categories" element={<Categories />} />
        <Route path="home" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
};

export default App;