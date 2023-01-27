import React from "react";
import Carousel from "../components/Landing/Carousel";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";

import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {/* <Carousel /> */}
      <Hero />
      <Features />
    </motion.div>
  );
};

export default Landing;
