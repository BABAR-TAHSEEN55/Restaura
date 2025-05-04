import about from "../assets/about.jpeg";
import { motion } from "framer-motion";
import { ABOUT } from "../constants/constants.tsx";

const About = () => {
  return (
    <section className="container mx-auto mb-7 " id="about">
      <h2 className="italic text-white text-3xl tracking-tighter  text-center mb-8 lg:text-8xl leading-loose">
        {" "}
        About Us
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2 ">
          <img src={about} className="lg:-rotate-4" />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl tracking-tighter text-white lg:text-8xl
            "
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-2 "
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-wlxl text-white"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
