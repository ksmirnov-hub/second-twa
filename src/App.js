import { Routes, Route } from 'react-router-dom';

import './App.css';
import AppLayout from 'layouts/AppLayout';

import Start from 'pages/start/start';
import Home from 'pages/home';
import Account from 'pages/account';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>

      </Route>
    </Routes>
  );
};

export default App;