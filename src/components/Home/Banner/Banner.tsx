"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Banner = () => {
  const career = useRef(null);
  const wth = useRef(null);
  const care2 = useRef(null);

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

  useGSAP(() => {
    const car = career.current;
    const wdt = wth.current;
    const care = care2.current;

    gsap.set([car, wdt, care], {
      y: 100,
      opacity: 0,
    });

    const tl = gsap.timeline();
    tl.to(car, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 1.2,
      ease: "power3.out",
    })
      .to(
        wdt,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.2,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        care,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.2,
          ease: "power3.out",
        },
        "-=0.7"
      );
  });

  return (
    <div
      style={{
        backgroundImage:
          "url('https://aeccglobal.com.bd/images/2023/08/25/study-in-canada.webp')",
      }}
      className="h-72 md:h-screen bg-contain bg-no-repeat"
    >
      <section className="max-w-7xl mx-auto md:mt-16 ps-3">
        <div className="">
          <h1 className="text-[36px] md:text-[148px] font-bold text-gray-800">
            <span ref={career} className="inline-block">
              Career
            </span>{" "}
            <span
              ref={wth}
              className="inline-block bg-gradient-to-l from-violet-800 to-violet-400 bg-clip-text text-transparent"
            >
              with
            </span>{" "}
            <span
              ref={care2}
              className="inline-block bg-gradient-to-l from-gray-600 to-gray-800 bg-clip-text text-transparent"
            >
              {" "}
              Care2
            </span>
          </h1>
        </div>
        <div>
          <div className="block md:flex items-center justify-between mt-12 md:mt-24 space-y-3 text-center">
            <div className="flex items-center space-x-4 w-1/2">
              <div className="num px-3 md:px-6 py-3 md:py-6 bg-gray-900 text-white rounded-full md:text-3xl">
                50+
              </div>
              <div className="md:text-2xl text-gray-600">Country Alumni</div>
            </div>
            <div className="block md:flex items-center md:w-1/2 space-x-4">
              <p className="md:text-2xl mr-2 mb-3 md:mb-0">
                We provide digital services, study abroads tips & Visa.
              </p>
              <button
                ref={btnRef}
                className="bg-gradient-to-l from-indigo-600 to-indigo-800 px-4 md:px-12 py-3 text-white rounded-full text-sm md:text-2xl font-medium relative overflow-hidden w-1/2 md:w-1/2 h-12 md:h-[100px] hover:scale-105 transition-all duration-500"
              >
                <span
                  ref={text1Ref}
                  className="absolute text-center w-full left-0 top-1/2 -translate-y-1/2"
                >
                  Let&apos;s talk
                </span>
                <span
                  ref={text2Ref}
                  className="absolute text-center w-full left-0 top-1/2 -translate-y-1/2"
                >
                  Let&apos;s talk
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
