"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const About = () => {
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
    <div>
      <section className="py-16 md:py-36 text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="block md:flex justify-between items-center">
            <div className="md:w-1/2 mr-6">
              <h2 className="text-4xl md:text-6xl font-semibold mb-8">
                About us{" "}
              </h2>
              <p className="text-md md:text-2xl mb-16 md:mb-36 mr-6">
                Care2 Training specializes in study abroad, work abroad, and
                recruitment solutions. We provide personalized guidance, trusted
                partnerships, and seamless processes to help individuals achieve
                their academic, career, and professional goals globally.
              </p>
              <div className="">
                <button
                  ref={btnRef}
                  className="bg-gradient-to-l from-indigo-600 to-indigo-800 px-8 md:px-12 py-3 text-white rounded-full text-xl md:text-2xl font-medium relative overflow-hidden w-full md:w-1/2 h-12 md:h-[80px] hover:scale-105 transition-all duration-500"
                >
                  <span
                    ref={text1Ref}
                    className="absolute text-center w-full left-0 top-1/2 -translate-y-1/2"
                  >
                    Learn More
                  </span>
                  <span
                    ref={text2Ref}
                    className="absolute text-center w-full left-0 top-1/2 -translate-y-1/2"
                  >
                    Learn More
                  </span>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-16 md:mt-56">
              <div className="flex items-center text-center bg-gray-200 py-12 rounded-3xl px-12">
                <div className="w-1/2">
                  <h3 className="text-xl md:text-5xl font-bold mb-6">5+</h3>
                  <p className="md:text-2xl">Years of Experience</p>
                </div>
                <div className="border-[0.1px] border-gray-500 h-24 md:h-48 w-[0.1px]"></div>
                <div className="w-1/2">
                  <h3 className="text-xl md:text-5xl font-bold mb-6">500+</h3>
                  <p className="md:text-2xl">Satisfied Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
