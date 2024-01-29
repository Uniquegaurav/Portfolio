import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { homeStagesInfo } from "../constants";
import 'animate.css'; // Import animate.css styles

const HomeInfo = ({ currentStage }) => {
  const commonStyle = {
    backgroundColor: 'rgba(255, 182, 193, 0.5)',
    backdropFilter: 'blur(10px)',
  };

  return (
    homeStagesInfo[currentStage-1].ctaText.length === 0 ? (
      <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-black mx-5 animate__animated animate__rollIn' style={commonStyle}>
        {homeStagesInfo[currentStage-1].title}
      </h1>
    ) : (
      <div className='info-box animate__animated animate__rollIn' style={commonStyle}>
        <p className='font-medium sm:text-xl text-center'>{homeStagesInfo[currentStage-1].title}</p>
        <Link to={homeStagesInfo[currentStage-1].link} className='neo-brutalism-white neo-btn'>
          {homeStagesInfo[currentStage-1].ctaText}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    )
  );
};

export default HomeInfo;
