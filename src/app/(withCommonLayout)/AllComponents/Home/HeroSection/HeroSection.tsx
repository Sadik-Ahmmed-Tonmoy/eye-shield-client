"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ellipseImage from "../../../../../assets/elements/Ellipse 1 (2).png";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import AddToCartCard from "@/components/ui/AddToCartCard/AddToCartCard";
import SingleCardSwiper from "@/components/ui/SingleCardSwiper/SingleCardSwiper";

const HeroSection = () => {
  const fakeData = [
    {
      id: 1,
      title: "Sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolor.",
      image: "https://i.ibb.co/25QB5YV/sunglasses-floating-white-background-job-id-4e0f9dbd0a1645e0b3c3a401ce2c01fe-1.png",
    },
    {
      id: 2,
      title: "Sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolor.",
      image: "https://i.ibb.co/30dKDRt/9652b011-a4db-4d20-86d9-ef7b078c5f8f-removebg-preview-1-1-1.png",
    },
    {
      id: 3,
      title: "Sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolor.",
      image: "https://i.ibb.co/9GKLrs2/eyeglasses-wear-1.png",
    },
    {
      id: 4,
      title: "Sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolor.",
      image: "https://i.ibb.co/ydrNMdg/9652b011-a4db-4d20-86d9-ef7b078c5f8f-removebg-preview.png",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fakeData.length);
    }, 4000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [fakeData.length]);

  const currentItem = fakeData[currentImageIndex];

  const words = `Oxygen gets you high. In a catastrophic em `;
  return (
    <>
      {/* <FollowerPointerCard className="">
        <div className="h-[calc(100vh-300px)] bg-[#3aa1a7] dark:bg-dot-white/[0.3] bg-dot-black/[0.3] flex justify-center items-center relative overflow-hidden">
          <Image src={ellipseImage} alt="" className="h-[80%] w-[80%] opacity-55" height={50} width={50} />
          <TextGenerateEffect words={words} className="absolute" />
          <AnimatePresence>
            <motion.img
              key={currentItem.image}
              src={currentItem.image}
              alt={currentItem.title}
              className="absolute z-10 h-[100%] w-[40%] object-cover"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100vw" }}
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{
                x: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.8 },
                scale: { duration: 1, delay: 0.9 },
              }}
            />
            <motion.div
              key={currentItem.id}
              className="absolute z-10 bottom-10 left-10 text-white"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100vw" }}
              transition={{
                x: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.8 },
                scale: { duration: 2, delay: 0.5 },
              }}
            >
              <h2 className="text-4xl font-bold">{currentItem.title}</h2>
              <p className="text-lg mt-2">{currentItem.description}</p>
            </motion.div>
          </AnimatePresence>
          <BackgroundBeams />
          <div className="absolute inset-0 bg-dot-thick-neutral-200 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />
        </div>
      </FollowerPointerCard> */}

      <HeroHighlight>
        {/* <BackgroundBeams /> */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 mx-auto w-full">
          
            <WobbleCard containerClassName="col-span-1 bg-[#3aa1a7]">
              <div className="flex items-center justify-center bg-[#0E0E10]  rounded-2xl ">
                <TextRevealCard text={`${"Why shades?"}`} revealText={`${"To look cool!"}`}></TextRevealCard>
              </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px] bg-[#3aa1a7] " className="">
              <SingleCardSwiper />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#3aa1a7] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.
                </p>
              </div>
              {/* <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              /> */}
            </WobbleCard>
          </div>
        </div>
      </HeroHighlight>
    </>
  );
};

export default HeroSection;
