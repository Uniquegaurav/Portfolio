import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const commonStyle = {
    backgroundColor: 'rgba(255, 182, 193, 0.5)',
    backdropFilter: 'blur(10px)',
  };

  if (currentStage === 1) {
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-black mx-5' style={commonStyle}>
        Hi, I'm
        <span className='font-semibold mx-2 text-black'>Adrian</span>
        👋
        <br />
        A Software Engineer from Croatia 🇭🇷
      </h1>
    );
  }

  const infoText = {
    2: "Worked with many companies and picked up many skills along the way",
    3: "Led multiple projects to success over the years. Curious about the impact?",
    4: "Need a project done or looking for a dev? I'm just a few keystrokes away",
  };

  return (
    <div className='info-box' style={commonStyle}>
      <p className='font-medium sm:text-xl text-center'>{infoText[currentStage]}</p>
      <Link to={currentStage === 2 ? '/about' : currentStage === 3 ? '/projects' : '/contact'} className='neo-brutalism-white neo-btn'>
        {currentStage === 2 ? 'Learn more' : currentStage === 3 ? 'Visit my portfolio' : 'Let\'s talk'}
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
  );
};

export default HomeInfo;
