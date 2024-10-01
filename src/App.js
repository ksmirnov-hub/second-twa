import { Routes, Route } from 'react-router-dom';

import './App.css';
import AppLayout from './layouts/AppLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>

      </Route>
    </Routes>
  );
};

export default App;