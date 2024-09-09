import React from "react";
import { motion } from "framer-motion";

const AnimatedBox = () => {
    return (
        <motion.div 
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1,scale: 1}}
        transition={{duration:0.5}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.1}}

        style={{
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'cornflowerblue',
            cursor: 'pointer',
            alignItems: 'center',
            width: '100px',
            height: '100px',        
        }}
        >
            Click Me
        </motion.div>
    );
};

export default AnimatedBox;

