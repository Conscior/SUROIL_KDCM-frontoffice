import React from "react";
import Carousel from "../components/Carousel";
import Features from "../components/Features";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Carousel />
      <Features />
    </motion.div>
  );
};

export default Home;
