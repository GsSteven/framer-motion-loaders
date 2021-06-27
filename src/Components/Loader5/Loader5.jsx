import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Loader5.css";

//img imports
import sad from "./images/sad-smiley.png";
import ok from "./images/ok-smiley.png";
import happy from "./images/happy-smiley.png";
import overjoy from "./images/overjoy-smiley.png";

export default function Loader5() {
  const images = [sad, ok, happy, overjoy];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 5000);
  }, [images.length]);

  return (
    <div className="loaderContainer loader5">
      <img id="backImage" src={images[activeIndex]} alt="" />
      <motion.div
        className="panel"
        id="panel1"
        animate={{
          y: [0, -200, -200, 0, 0, 0],
          transition: { duration: 5, delay: 0.6, repeat: Infinity },
        }}
      />
      <motion.div
        className="panel"
        id="panel2"
        animate={{
          x: [0, 200, 200, 200, 0, 0, 0],
          transition: { duration: 5, delay: 0.5, repeat: Infinity },
        }}
      />
      <motion.div
        className="panel"
        id="panel3"
        animate={{
          y: [0, 200, 200, 200, 200, 0, 0],
          transition: { duration: 5, repeat: Infinity },
        }}
      />
    </div>
  );
}
