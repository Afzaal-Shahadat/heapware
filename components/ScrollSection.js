"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Counter from "@/components/counter";
import Hero from "./Hero";
function ScrollSection() {
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
        translateX: "-300vw",
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
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section bg-[#F3ECEC] flex flex-col font-bold text-9xl">
            <h1>WHY</h1>
            <h1>CHOOSE US</h1>
          </div>
          <div className="scroll-section bg-[#F3ECCE]">
            <Hero />
          </div>
          <div className="scroll-section   bg-[#F3ECEC]">
            <Counter />
          </div>
          <div className="scroll-section bg-[#E0E3CC] texT-black flex flex-col">
            <h5 className="font-medium text-l">Have you project in mind?</h5>
            <div className=" pt-5">
              <h1 className="font-medium text-5xl text">
                Let’s make something great together!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
