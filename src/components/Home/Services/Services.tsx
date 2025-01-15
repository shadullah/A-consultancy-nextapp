"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  _id: string;
  title: string;
  img: string;
  latest: boolean;
  tag: string;
  description: string;
  features: string[];
}

interface Tag {
  _id: string;
  tagName: string;
  slug: string;
}

interface Region {
  name: string;
  countries: string[];
}

interface Data {
  services: Service[];
  tags: Tag[];
  regions: Region[];
}

const Services = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const cardsRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const element11 = cardsRef2.current;
    const container1 = containerRef2.current;

    if (!element11 || !container1 || loading) return;

    const animation = gsap.to(element11, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container1,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading, data?.services]);

  const getTagName = (tagId: string) => {
    const tag = data?.tags.find((t) => t._id === tagId);
    return tag?.tagName || "Unknown Tag";
  };

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef2}
      className="min-h-screen py-24 overflow-hidden bg-gray-100"
    >
      <div ref={cardsRef2} className="flex gap-8 px-20 w-[200vw]">
        {/* Services Intro Section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="w-[250px]">
            <h2 className="text-6xl font-bold mb-6">Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Comprehensive solutions for your international aspirations, from
              visa services to global consultancy.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        {data.services.map((service) => (
          <div
            key={service._id}
            className="w-[500px] h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg relative group"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-8 text-white">
              {/* Header Section */}
              <div className="flex items-start justify-between">
                {service.latest && (
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 transition-all duration-300">
                    Featured
                  </button>
                )}
              </div>

              {/* Bottom Section */}
              <div>
                <h3 className="text-3xl font-bold max-w-[70%] mb-4">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-8 line-clamp-2">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                    {getTagName(service.tag)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* View More Section */}
        <div className="max-w-7xl mx-auto px-4 py-20 flex justify-between items-center">
          <div className="w-[250px] space-y-6 text-center">
            <span className="text-5xl text-gray-500">Explore More</span>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
