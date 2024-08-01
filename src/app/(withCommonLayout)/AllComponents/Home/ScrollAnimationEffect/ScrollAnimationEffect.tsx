"use client";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ScrollAnimationEffect = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end start"],
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 1; i <= 237; i++) {
        const img = new Image();
        img.src = `/sunglassImages/${i}.webp`;
        loadedImages.push(img);
      }

      setImages(loadedImages);
    }
  }, []);

  const render = useCallback(
    (index: number) => {
      if (images[index - 1] && ref.current) {
        const context = ref.current.getContext("2d");
        if (context) {
          context.clearRect(0, 0, ref.current.width, ref.current.height); // Clear the canvas
          context.drawImage(images[index - 1], 0, 0);
        }
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 237]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    if (images.length > 0) {
      render(1);
    }
  }, [images, render]);

  return (
    <div className="relative">
      <div
        style={{
        //   height: "1000px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div style={{ height: "3000px" }} /> */}
        <canvas className="h-screen w-screen " width={1000} height={500} ref={ref} />
      </div>
    </div>
  );
};

export default ScrollAnimationEffect;
