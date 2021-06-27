import React from 'react';
import { motion } from 'framer-motion';
import "./Loader4.css";

const pulseVariant = {
    animate: (custom) => ({
        scale: [1, .7, 1],
        opacity: [1, .8, 1],
        borderRadius: ["20%", "50%", "20%"],
        transition: {
            duration: 4,
            delay: custom,
            repeat: Infinity
        }
    })
}

export default function Loader4() {
    return (
        <motion.div className="loaderContainer loader4">
            <motion.div
                className="innerCircle" 
                id="circle1"
                variants={pulseVariant}
                animate="animate"
                custom={0} 
            />
            <motion.div
                className="innerCircle" 
                id="circle2"
                variants={pulseVariant}
                animate="animate"
                custom={.2} 
            />
            <motion.div 
                className="innerCircle" 
                id="circle3"
                variants={pulseVariant}
                animate="animate"
                custom={.4}  
            />
        </motion.div>
    )
}
