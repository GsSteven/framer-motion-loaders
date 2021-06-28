import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import "./Loader6.css";

const speedInOutVariant = {
    animate: {
        y: [0, -30, -30, 0],
        x:[0, 75, 75, 150],
        opacity: [0, 1, 1, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity
        }
    }
}

export default function Loader6() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const colors = ["red", "blue", "green"];


    useEffect(() => {
        setInterval(() => {
            setCurrentIndex(current => current === colors.length - 1 ? 0 : current + 1);
        }, 1500);
    }, [colors.length]);


    return (
        <div className="loaderContainer loader6">
            <motion.div 
                style={{backgroundColor: colors[currentIndex]}}
                className="box" 
                id="box1"
                variants={speedInOutVariant}
                animate="animate"
            />
        </div>
    )
}
