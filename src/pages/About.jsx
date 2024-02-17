import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { motion,useAnimation } from "framer-motion";
import { useEffect } from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";



const About = () => {

  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      x: 0,
      y: 0,
      rotate: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }, [controls]);

  const skillsList = skills.map((skill, index) => (
    <motion.div
      key={skill.name}
      animate={controls}
      initial={{
        x: Math.random() * window.innerWidth - 200,
        y: Math.random() * window.innerHeight - 200,
        opacity: 0,
      }}
      transition={{ delay: index * 0.1 }}
      drag
      className='block-container w-20 h-20 relative'
    >
      <div className='btn-back rounded-xl' />
      <div className='btn-front rounded-xl flex justify-center items-center'>
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className='w-1/2 h-1/2 object-contain'
        />
        <motion.div
          className='absolute inset-0 flex items-center justify-center text-black font-semibold text-center opacity-0 bg-black bg-opacity-0 transition-opacity duration-300'
          whileHover={{ opacity: 0.7 }}
        >
          {skill.name}
        </motion.div>
      </div>
    </motion.div>
  ));
  

  const skillsSection1 = skillsList.slice(0, Math.ceil(skillsList.length / 3));
  const skillsSection2 = skillsList.slice(
    Math.ceil(skillsList.length / 3),
    Math.ceil((2 * skillsList.length) / 3)
  );
  const skillsSection3 = skillsList.slice(
    Math.ceil((2 * skillsList.length) / 3),
    skillsList.length
  );


  return (
    <div className="mt-12">
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>About Me</p>
        <h2 className={`${styles.sectionHeadTextAbout}`}> Hello, I'm Gaurav.</h2>
      </motion.div>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>


      <div>
      <div className='mt-16 flex flex-wrap gap-12'>{skillsSection1}</div>
      <div className='mt-16 flex flex-wrap gap-12'>{skillsSection2}</div>
      <div className='mt-16 flex flex-wrap gap-12'>{skillsSection3}</div>
    </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

    </div>
  );
};


export default SectionWrapper(About,"");
