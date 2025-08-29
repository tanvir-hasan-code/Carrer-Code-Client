import React from "react";
import Team1 from "../../../assets/Team/Tim1.jpg";
import Team2 from "../../../assets/Team/Tim2.jpg";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-amber-300 my-5 rounded-2xl min-h-screen w-11/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 ">
          <motion.img
            animate={{
              y: [0, 200, 0],
              transition: { duration: 5, repeat: Infinity },
            }}
            src={Team1}
            className="max-w-sm rounded-lg shadow-2xl mx-auto rounded-tl-[100px] rounded-br-[100px] border-l-8 border-b-8 border-blue-500"
          />
          <motion.img
            animate={{
              x: [0, 180, 0],
              transition: { duration: 15, repeat: Infinity },
            }}
            src={Team2}
            className="max-w-sm rounded-lg shadow-2xl mx-auto rounded-tl-[100px] rounded-br-[100px] border-l-8 border-b-8 border-red-500"
          />
        </div>
        <div className="flex-1 ">
          <motion.h1
            animate={{
              color: ["#e5a600", "#74c547", "#ffffff", "#00ddb2", "#ab631b"],
              transition: { duration: 5, repeat: Infinity },
            }}
            className="text-5xl font-bold"
          >
            The Easiest Way to Get Your New Job
          </motion.h1>
          <motion.p initial={{y:200}} whileInView={{y:0,  transition: {duration: 2}}} className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </motion.p>
          <motion.button whileHover={{scale: 1.1}} whileTap={{scale:.8}} className="btn btn-primary btn-outline">Find Job Now</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
