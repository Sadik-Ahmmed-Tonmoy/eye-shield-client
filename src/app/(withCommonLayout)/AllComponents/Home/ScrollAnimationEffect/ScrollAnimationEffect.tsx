'use client';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const ScrollAnimationEffect = () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['center end', 'start start'],
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loadedImages: HTMLImageElement[] = [];

            for (let i = 1; i <= 86; i++) {
                const img = new Image();
                img.src = `/images/${i}.webp`;
                loadedImages.push(img);
            }

            setImages(loadedImages);
        }
    }, []);

    const render = useCallback(
        (index: number) => {
            if (images[index - 1] && ref.current) {
                const context = ref.current.getContext('2d');
                if (context) {
                    context.clearRect(0, 0, ref.current.width, ref.current.height); // Clear the canvas
                    context.drawImage(images[index - 1], 0, 0);
                }
            }
        },
        [images]
    );

    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 86]);

    useMotionValueEvent(currentIndex, 'change', (latest) => {
        render(Number(latest.toFixed()));
    });

    useEffect(() => {
        if (images.length > 0) {
            render(1);
        }
    }, [images, render]);

    return (
        <div className='relative bg-red-500'>
            <h1 className='text-white sticky top-20'>asdas</h1>
            <div
                style={{
                    height: '2000px',
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div style={{ height: '3000px' }} />
                <canvas width={1000} height={1000} ref={ref} />
            </div>
        </div>
    );
};

export default ScrollAnimationEffect;
