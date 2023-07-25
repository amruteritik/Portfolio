import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import Link from "next/link";

import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
       <Circles />
      <div className="container mx-auto py-32 text-center  xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 mt-10"
          >
            Let&apos;s <span className="text-accent">connect..</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input name='name' type="text" placeholder="name" className="input" />
              <input name="email" type="text" placeholder="email" className="input" />
            </div>
            <input name="subject" type="text" placeholder="subject" className="input" />
            <textarea name="message" placeholder="message" className="textarea"></textarea>
            <Link
              className="btn rounded-full border border-white/50 max-w-[170px] 
                 px-8 transition-all duration-300 flex items-center justify-center
                 overflow-hidden hover:border-accent group "
                 href={"https://www.linkedin.com/in/ritik-amrute-87720a231"} target="_blank"
            >
              <span
                className="group-hover:-translate-y-[120%] 
                group-hover:opacity-0 transition-all duration-500 "
              >
                Let&apos;s talk
              </span>
              <BsArrowRight
                className=" -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
                group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </Link>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
