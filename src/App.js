import { Routes, Route } from 'react-router-dom';

import './App.css';
import AppLayout from './layouts/AppLayout';
import Start from './pages/start/start';
import Home from './pages/home';
import Hello from './pages/hello';
import Account from './pages/account';
import Calendar from './pages/calendar';
import Categories from './pages/categories';
import { useState, useEffect } from 'react';

const App = () => {

  const [startPage, setStartPage] = useState(<Hello />);

  useEffect(() => {
    setTimeout(() => {
      setStartPage(<Start />)
    }, 3000)
  }, [])

  const renderStart = () => {

    setTimeout(() => {

    }, 3000)
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={startPage} />
        <Route path="start" element={<Start />} />
        <Route path="hello" element={<Hello />} />
        <Route path="categories" element={<Categories />} />
        <Route  path="home" element={<Home />} />
        <Route  path="account" element={<Account />} />
        <Route  path="calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
};

export default App;