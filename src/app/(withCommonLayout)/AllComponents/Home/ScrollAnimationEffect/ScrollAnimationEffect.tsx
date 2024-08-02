"use client";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const ScrollAnimationEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: canvasRef,
    offset: ["center end", "end start"],
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 1; i <= 162; i++) {
        const img = new Image();
        img.src = `/sunglassGreenEffectImages/${i}.webp`;
        loadedImages.push(img);
      }

      setImages(loadedImages);
      setImagesLoaded(true);
    }
  }, []);

  const render = useCallback(
    (index: number) => {
      if (images[index - 1] && canvasRef.current) {
        const context = canvasRef.current.getContext("2d");
        if (context) {
          context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear the canvas
          context.drawImage(images[index - 1], 0, 0);
        }
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 162]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const img = new Image();
        img.src = "/sunglassGreenEffectImages/1.webp";
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }
    }
  }, [images]);

  return (
    <div className="relative h-screen -mt-[160px]">
      {
        imagesLoaded &&   <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 2, bounce: 0.8, damping: 5, stiffness: 100, delay: 1, ease: "easeInOut", }}
         
        className="text-3xl text-white text-center  sticky top-[35%]  flex justify-center items-center inset-0"
      >
            <TextRevealCard text={`${"Why don't sunglass lenses ever get lost?"}`} revealText={`${"Because they always stay 'focused'!"}`}></TextRevealCard>
      </motion.div>
      }
    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="h-screen"
      >
        <canvas className="h-screen w-screen" width={1000} height={500} ref={canvasRef} style={{ display: imagesLoaded ? "block" : "none" }} />
      </div>
    </div>
  );
};

export default ScrollAnimationEffect;
