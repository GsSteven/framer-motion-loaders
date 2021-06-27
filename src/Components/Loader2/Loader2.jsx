import React from "react";
import { motion } from "framer-motion";
import "./Loader2.css";

const fadePulseVariant = {
  animate: (custom) => ({
    opacity: [1, 0, 1],
    scale: [1, 0.75, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: custom,
      repeat: Infinity,
    },
  }),
};

export default function Loader2() {
  return (
    <div className="loaderContainer loader2">
      <motion.div
        id="ball1"
        variants={fadePulseVariant}
        animate="animate"
        custom={0}
      />
      <motion.div
        id="ball2"
        variants={fadePulseVariant}
        animate="animate"
        custom={0.5}
      />
      <motion.div
        id="ball3"
        variants={fadePulseVariant}
        animate="animate"
        custom={1}
      />
    </div>
  );
}
