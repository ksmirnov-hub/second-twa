import React from 'react';
import { motion } from "framer-motion"
import { useNavigate  } from 'react-router-dom';
import Logo from '../../images/logo-home.png';
import LogoIcon from '../../images/logo';
import './hello.css';


const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="hello"
      initial={{
        background: 'radial-gradient(50.56% 70.56% at 70% 38.03%, #40E48F 0%, #00B858 100%)'
      }}
      animate={{
        background: 'radial-gradient(70.56% 70.56% at 50% 38.03%, #40E48F 0%, #00B858 100%)'
      }}
      transition={{ duration: 0.7 }}
    >
       <div className="center-block">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="img"
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
    </motion.div>
  );
};

export default Home;
