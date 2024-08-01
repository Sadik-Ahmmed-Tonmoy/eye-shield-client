"use client";
import Image from "next/image";
import styles from "./CenterZoomParallax.module.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const CenterZoomParallax = () => {
  const parallaxContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxContainer,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/jgl5gnk0/sunglass/6/m/z/m-style-green-101-sp-original-imaf4sg2e7dshwcf.jpeg?q=20&crop=false",
      scale: scale4,
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-sunglass/j/y/k/free-size-kamal0545-rmkk-original-imaghefggaphd5ke.jpeg?q=20&crop=false",
      scale: scale5,
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sunglass/q/7/c/44-avi-gold-clear-avi-gold-green-impavid-original-imaeyfk2jfurbagr.jpeg?q=90&crop=false",
      scale: scale8,
    },
    {
      src: "https://rukminim2.flixcart.com/image/750/900/xif0q/sunglass/g/w/u/k-k00015-free-size-rmkk-original-imagq9q2ywgr4mdf.jpeg?q=20&crop=false",
      scale: scale6,
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/km57hjk0/sunglass/g/i/e/free-size-aviator-mirrored-blue-black-silver-creek-original-imagf4bjfgbzbhqx.jpeg?q=90&crop=false",
      scale: scale9,
    },
  ];
  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div style={{ scale }} key={index} className={styles.el}>
            <div  className={styles.imageContainer}>
              <Image
                src={src}
                fill
                alt="image"
                // placeholder="blur"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CenterZoomParallax;
