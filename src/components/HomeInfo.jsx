import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { homeStagesInfo } from "../constants";
import 'animate.css'; // Import animate.css styles
import { useMediaQuery } from 'react-responsive';

const HomeInfo = ({ currentStage }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const desktopStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(173, 216, 230, 0.3)', 
    backdropFilter: 'blur(3px)', 
    border: '1px solid rgba(255, 255, 255, 0.2)', 
    width: '520px',
    height: '240px',
    margin: '0 auto',
    padding: '10px 30px 10px 0px',
    borderRadius: '10px',
  };

  const phoneStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(173, 216, 230, 0.3)', 
    backdropFilter: 'blur(3px)', 
    border: '1px solid rgba(255, 255, 255, 0.2)', 
    width: "310px", 
    height: '200px',
    margin: '0 auto',
    padding: '5px',
    borderRadius: '6px',
  };

  const ctaBackgroundStyle = {
    color: '#000',
    border: '1px solid #000',
    borderRadius: '8px',
    textDecoration: 'none',
    padding : '18px',
    fontWeight: 'bold'
  };

  const commonStyle = isMobile ? phoneStyle : desktopStyle;

  return (
    homeStagesInfo[currentStage - 1].ctaText.length === 0 ? (
      <div className="animate__animated animate__jackInTheBox" style={commonStyle}>
        <h1 className='sm:text-base sm:leading-snug text-center py-4 px-8 text-black font-bold mx-5'>
          {homeStagesInfo[currentStage - 1].title}
        </h1>
      </div>
    ) : (
      <div className='animate__animated animate__jackInTheBox' style={commonStyle}>
        <h1 className='sm:text-base sm:leading-snug text-center py-4 px-8 text-black font-bold mx-5'>
          {homeStagesInfo[currentStage - 1].title}
        </h1>
        <Link
          to={homeStagesInfo[currentStage - 1].link}
          className='inline-flex items-center border border-black p-2 rounded-m'
          style={ctaBackgroundStyle}
        >
          {homeStagesInfo[currentStage - 1].ctaText}
          <img src={arrow} alt='arrow' className='w-4 h-4 ml-2 object-contain' style={{ filter: 'invert(1)' }} />
        </Link>
      </div>
    )
  );
};

export default HomeInfo;
