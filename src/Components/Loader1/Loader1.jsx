import React from "react";
import { motion } from "framer-motion";
import "./Loader1.css";

const pulseVariant = {
  animate: {
    borderRadius: ["0%", "50%", "0%"],
    rotate: [0, 360, 720],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Loader1() {
  return (
    <div className="loader1">
      <motion.div id="thing1" variants={pulseVariant} animate="animate" />
      <motion.div id="thing2" variants={pulseVariant} animate="animate" />
      <motion.div id="thing3" variants={pulseVariant} animate="animate" />
    </div>
  );
}
