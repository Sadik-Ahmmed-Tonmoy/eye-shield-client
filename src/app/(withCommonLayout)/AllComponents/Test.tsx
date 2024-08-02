'use client'

import { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Test = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]); // Adjust the values as needed

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 }
      });
    } else {
      controls.start({
        y: -50,
        opacity: 0,
        transition: { duration: 1 }
      });
    }
  }, [controls, inView]);

  return (
    <div
      style={{
        height: "200vh", // Increase this to have enough scrolling space
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div ref={ref}>
        <motion.div
          ref={textRef}
          animate={controls}
          initial={{ y: -100, opacity: 0 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "2rem",
            y
          }}
        //   style={{ y }} 
        >
          Hello, I'm animated text!
        </motion.div>
      </div>
    </div>
  );
};

export default Test;
