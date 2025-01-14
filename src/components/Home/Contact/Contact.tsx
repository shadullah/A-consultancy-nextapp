"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Contact = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const buttn = btnRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    if (buttn && text1 && text2) {
      gsap.set(text1, {
        y: 0,
        opacity: 1,
      });
      gsap.set(text2, {
        y: 50,
        opacity: 0,
      });

      buttn.addEventListener("mouseenter", () => {
        gsap.to(text1, {
          y: -50,
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        });
        gsap.to(text2, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
          delay: 0.1,
        });
      });

      buttn.addEventListener("mouseleave", () => {
        gsap.set(text1, { y: 0, opacity: 1 });
        gsap.set(text2, { y: 50, opacity: 0 });
      });
    }
  });
  return (
    <div className="bg-black">
      <div className="bg-[radial-gradient(circle_at_-30%_21%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_30%),_radial-gradient(circle_at_120%_80%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_30%)] text-center">
        <div className="md:w-1/2 mx-auto py-24 space-y-12">
          <h3 className="bg-gradient-to-l from-violet-800 to-violet-400 bg-clip-text text-transparent text-2xl md:text-4xl font-medium">
            Contact us
          </h3>
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            We&apos;re always open for you to discuss, get in touch with us.
          </h1>
          <button
            ref={btnRef}
            className="bg-gradient-to-l from-indigo-600 to-indigo-800 px-8 md:px-12 py-3 text-white rounded-full text-xl md:text-2xl font-medium relative overflow-hidden w-72 md:w-1/2 h-12 md:h-[80px] hover:scale-105 transition-all duration-500"
          >
            <span
              ref={text1Ref}
              className="absolute text-center w-full left-0 top-1/2 -translate-y-1/2"
            >
              info@care2training.com
            </span>
            <span
              ref={text2Ref}
              className="absolute text-center w-full left-0 top-1/2 -translate-y-1/2"
            >
              info@care2training.com
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
