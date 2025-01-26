import React from "react";
import { CUSINES } from "../../restaura-assets/constants";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      stagerChildren: 1,
    },
  },
};
const ItemsVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
    },
  },
};
const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-8xl text-white">
        Expertise
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        {CUSINES.map((cusine, index) => (
          <motion.div
            key={index}
            variants={ItemsVariants}
            className="flex items-center border-b-4 border-dotted border-neutral-700 py-2"
          >
            <div className="w-1/3  text-white flex-shrink-0 pr-8 text-2xl">
              {cusine.number}
            </div>
            <div className="w-1/3 flex-shrink-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="h-auto rounded-3xl"
              />
            </div>
            <div className="pl-8">
              <h3 className="text-4xl tracking-tighter text-rose-300 uppercase">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter text-white">
                {" "}
                {cusine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;

//TODO : why cusine was not working when i did cusine , index ?
