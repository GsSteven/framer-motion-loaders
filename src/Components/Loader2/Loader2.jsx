import React from "react";
import { motion } from "framer-motion";
import "./Loader2.css";

export default function Loader2() {
  return (
    <div className="loader2">
      <motion.div
        id="ball1"
        animate={{
          opacity: [1, 0, 1],
          scale: [1, 0.75, 1],
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      />
      <motion.div
        id="ball2"
        animate={{
          opacity: [1, 0, 1],
          scale: [1, 0.75, 1],
          transition: {
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      />
      <motion.div
        id="ball3"
        animate={{
          opacity: [1, 0, 1],
          scale: [1, 0.75, 1],
          transition: {
            duration: 2,
            delay: 1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      />
    </div>
  );
}
