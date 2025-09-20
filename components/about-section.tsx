"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, ChevronRight, BriefcaseBusiness, Code } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentRef = useRef(null);
  const experienceCardRef = useRef(null);
  const highlightsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Image container animation
      gsap.from(imageContainerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 0.8,
        },
      });

      gsap.from(contentRef.current?.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 45%",
          scrub: 0.5,
        },
      });

      gsap.from(experienceCardRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 0.7,
        },
      });

      gsap.from(highlightsRef.current?.children, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: highlightsRef.current,
          start: "top 85%",
          end: "top 65%",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const downloadResume = () => {
    const pdfPath = "/resume/Mueez_Resume.pdf";

    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Mueez_Resume.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-28 md:py-36 w-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-400/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold tracking-wider text-emerald-400 uppercase mb-3 relative">
            About Me
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r  text-white  text-transparent">
            From Concept to Creation
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div
            ref={imageContainerRef}
            className="w-full lg:w-2/5 relative order-2 lg:order-1"
          >
            <div className="relative z-10 mx-auto lg:ml-0 lg:mr-auto max-w-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-purple-500 blur-sm opacity-70 -m-0.5"></div>
              <div className="group relative bg-slate-900 p-2 rounded-2xl">
                <Image
                  src="/Profile-Photoroom.png"
                  alt="Mueez"
                  width={600}
                  height={800}
                  className="rounded-xl  shadow-lg w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                <div
                  ref={experienceCardRef}
                  className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 p-4 rounded-xl shadow-xl"
                >
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-blue-400">
                      1.5
                    </span>
                    <span className="text-slate-300 text-sm">
                      Years of Experience
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -left-5 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 border-b-2 border-r-2 border-indigo-500/30 rounded-br-lg"></div>
            </div>
          </div>

          <div ref={contentRef} className="w-full lg:w-3/5 order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  <span className="text-emerald-400">Mueez ur Rehman</span> —
                  UI/UX Designer
                </h4>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I am a dedicated UI/UX Designer with a passion for crafting
                  intuitive and engaging digital experiences. My expertise spans
                  wireframing, prototyping, and usability testing, with a strong
                  focus on creating user-centered designs that balance
                  aesthetics and functionality. I excel in translating complex
                  problems into elegant solutions and am committed to staying
                  current with design trends and technologies.
                </p>
              </div>

              <div ref={highlightsRef} className="space-y-3">
                <h5 className="text-lg font-semibold text-white mb-2">
                  What I Bring to the Table:
                </h5>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="ml-2 text-slate-300">
                    <span className="text-white font-medium">
                      Design Excellence
                    </span>{" "}
                    — Crafting intuitive, user-friendly, and visually engaging
                    digital experiences with a strong focus on usability and
                    accessibility.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="ml-2 text-slate-300">
                    <span className="text-white font-medium">
                      Technical Expertise
                    </span>{" "}
                    — Skilled in
                    <span className="text-emerald-300"> Design systems</span>,
                    <span className="text-emerald-300"> Prototyping</span>, and
                    <span className="text-emerald-300">
                      {" "}
                      tools like Figma, Adobe XD, and Sketch
                    </span>{" "}
                    to deliver consistent and scalable designs.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="ml-2 text-slate-300">
                    <span className="text-white font-medium">
                      Emerging Trends
                    </span>{" "}
                    — Currently exploring for
                    <span className="text-emerald-300"> Web3</span> and
                    blockchain platforms to create innovative and future-ready
                    user experiences.
                  </p>
                </div>
                <div className="flex flex-wrap relative top-3 self-end items-end justify-start gap-4">
                  <Button
                    className="bg-gradient-to-r from-emerald-600  hover:from-emerald-700 text-white px-6 py-6 text-base font-medium rounded-lg shadow-lg  transition duration-300 flex items-center"
                    onClick={downloadResume}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="py-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
