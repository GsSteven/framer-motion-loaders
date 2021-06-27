import React from "react";
import { motion } from "framer-motion";
import "./Loader3.css";

const colors = {
  1: "#FF0000",
  2: "#00FF00",
  3: "#0000FF",
  4: "#FFFF00"
}

const colorChangeVariant = {
  animate: (custom) => ({
    rotate: [0, 90, 180, 270, 360],
    borderRadius:["0%", "50%", "0%", "50%", "0%"],
    backgroundColor: custom,
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity
    }
  })
}

export default function Loader3() {
  return <div className="loader3 loaderContainer">
    <motion.div 
      className="square" 
      id="square1" 
      variants={colorChangeVariant}
      animate="animate"
      custom={[colors[1], colors[2], colors[3], colors[4], colors[1]]}
    />
    <motion.div 
      className="square" 
      id="square2"
      variants={colorChangeVariant}
      animate="animate"
      custom={[colors[4], colors[1], colors[2], colors[3], colors[4]]}
    />
    <motion.div 
      className="square" 
      id="square3"
      variants={colorChangeVariant}
      animate="animate"
      custom={[colors[3], colors[4], colors[1], colors[2], colors[3]]}
    />
    <motion.div 
      className="square" 
      id="square4" 
      variants={colorChangeVariant}
      animate="animate"
      custom={[colors[2], colors[3], colors[4], colors[1], colors[2]]} 
    />
  </div>;
}
