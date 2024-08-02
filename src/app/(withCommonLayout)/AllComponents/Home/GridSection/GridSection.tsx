"use client";
import React from "react";
import { motion } from "framer-motion";
import MyContainer from "@/components/ui/MyContainer/MyContainer";
import SingleCardSwiper from "@/components/ui/SingleCardSwiper/SingleCardSwiper";

const GridSection = () => {
  return (
    <div>
      <MyContainer>
        <motion.div
          initial={{ y: -15 }}
          animate={{ y: -30 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
          className="bg-red- grid grid-cols-3 gap-5"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-blue-50 rounded-md">
            1
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#70e0e6] dark:bg-dot-white/[0.3] bg-dot-black/[0.3]  rounded-md col-span-2">
            <SingleCardSwiper />
          </motion.div>
        </motion.div>
      </MyContainer>
    </div>
  );
};

export default GridSection;
