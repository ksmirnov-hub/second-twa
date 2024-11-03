import React from 'react';
import { motion } from "framer-motion"
import { useNavigate  } from 'react-router-dom';
import Logo from '../../images/logo-home.png';
import LogoIcon from '../../images/logo';
import './hello.css';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="hello">
       <div className="center-block">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LogoIcon />
          </motion.div>
          <div className="hello-title">
            Life Coin
          </div>
          <div className="description">
            LIFE - это будущее, где время - это самая ценная валюта
          </div>
       </div>
    </div>
  );
};

export default Home;
