import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { homeStagesInfo } from "../constants";
import 'animate.css'; // Import animate.css styles
import { motion } from "framer-motion";

const HomeInfo = ({ currentStage }) => {
  const commonStyle = {
    backgroundColor: 'rgba(173, 216, 230, 0.3)', 
    backdropFilter: 'blur(3px)', 
    border: '1px solid rgba(255, 255, 255, 0.2)', 
    width: '420px',
    height: '140px',
    margin: '0 auto',
    padding: '10px',
    borderRadius: '10px',
  };

  return (
    homeStagesInfo[currentStage - 1].ctaText.length === 0 ? (
      <div className="animate__animated animate__rollIn" style={commonStyle}>
      <h1 className='sm:text-base sm:leading-snug text-center py-4 px-8 text-black font-bold mx-5' >
        {homeStagesInfo[currentStage - 1].title}
      </h1>
      </div>
    ) : (
      <div className='animate__animated animate__rollIn' style={commonStyle}>
      <h1 className='sm:text-base sm:leading-snug text-center py-4 px-8 text-blac font-bold mx-5'>
        {homeStagesInfo[currentStage - 1].title}
      </h1>
      <Link
        to={homeStagesInfo[currentStage - 1].link}
        className='mt-4 neo-btn inline-flex items-center border border-black p-2 rounded-m'
        style={{ color: '#000' }}
      >
        {homeStagesInfo[currentStage - 1].ctaText}
        <div src={arrow} alt='arrow' className='no w-4 h-4 ml-2 object-contain' style={{ filter: 'invert(1)'}} />
      </Link>
    </div>
    )
  );
};

export default HomeInfo;
