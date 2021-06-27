import React from "react";
import { motion } from "framer-motion";
import "./CloseButton1.css";

const inOutVariant = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export default function Loader1() {
  return (
    <div className="loaderContainer animateArea">
      <motion.svg
        className="Xbutton"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transition={{ staggerChildren: 1.5 }}
      >
        <motion.path
          d="
            M 0, 100
            l 0, -100 
            "
          stroke="#FF0000"
          strokeWidth="10"
          variants={inOutVariant}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="
            M 0, 0
            l 100, 0
            "
          stroke="#FF0000"
          strokeWidth="10"
          variants={inOutVariant}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="
            M 100, 0
            l 0, 100
            "
          stroke="#FF0000"
          strokeWidth="10"
          variants={inOutVariant}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="
            M 100, 100
            l -100, 0
            "
          stroke="#FF0000"
          strokeWidth="10"
          variants={inOutVariant}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="
            M 25, 25
            l 50, 50
            "
          stroke="#FF0000"
          strokeWidth="7.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, transition: { duration: 1, delay: 1.5 } }}
        />
        <motion.path
          d="
            M 75, 25
            l -50, 50
            "
          stroke="#FF0000"
          strokeWidth="7.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, transition: { duration: 1, delay: 2 } }}
        />
      </motion.svg>
    </div>
  );
}
