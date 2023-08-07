import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  
} from "react-icons/fa";

import { AiFillDatabase} from 'react-icons/ai'

import {
  SiPayloadcms,
  SiNextdotjs,
  SiFramer,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// import CountUp from "react-countup";

const aboutData = [
  {
    title: "skill Stack",
    info: [
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <FaJs key={2} />,
          <FaReact key={3} />,
          <SiNextdotjs key={4} />,
          <SiFramer key={5} />,
        ],
      },
      {
        title: "Backend Development",
        icons: [<FaNodeJs key={0} />, <SiExpress key={1} />, <SiMongodb key={2} /> ,<AiFillDatabase key={3} />,<SiPayloadcms key={4} /> ],
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.Tech - IIT Hyderabad",
        stage: "2020-2024",
      },
      {
        title: "Web Development Course - Udemy",
        stage: "2022",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer Intern - Sapy MediaTech Pvt. Ltd",
        stage: " 2023 (Apr-July)",
      },
      // {
      //   title: "Intern - ReadyCoder Pvt. Ltd",
      //   stage: "Summer 2023",
      // },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Passion <span className="text-accent"> Fuels </span> Purpose
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 mb:px-0 text-slate-150  "
          >
            I am Ritik, a full stack web developer with a passion for creating beautiful, 
            functional and user-centered digital experiences. I believe that design is about 
            more than just making things look pretty - it&apos;s about solving problems and creating intuitive, 
            enjoyable experiences for users.
          </motion.p>
          {/* <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
                        after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={10} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Years of experience
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
                        after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={120} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Satisfied clients
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
                        after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={40} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Finished projects
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
                        after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={30} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Awards won
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:h-[280px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                  } 
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                     after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap--x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex mx-2"> - </div>
                  
                  <div >{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white" key={itemIndex} >{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
