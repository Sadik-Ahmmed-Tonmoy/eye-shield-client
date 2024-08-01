"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { LoginWithEmail } from "@/app/(withCommonLayout)/login/LoginWithEmail";
import { OTPVerification } from "@/app/(withCommonLayout)/otp-verification/OTPVerification";

const PageHorizontalScrollCarousel = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner h-screen w-[300vw] flex flex-row relative">
          <div className="scroll-section h-screen w-screen flex justify-center items-center bg-red-500">
         <LoginWithEmail/>
          </div>
          <div className="scroll-section h-screen w-screen  bg-green-500">
           <OTPVerification/>
          </div>
          <div className="scroll-section h-screen w-screen flex justify-center items-center bg-yellow-500">
            <h3>section- 1</h3>
          </div>
          {/* <div className="scroll-section h-screen w-screen flex justify-center items-center bg-blue-500">
            <h3>section- 1</h3>
          </div> */}
        
        </div>
      </div>
    </div>
  );
};

export default PageHorizontalScrollCarousel;
