"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollTo = (id: string, offset = 80) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollBy(0, -offset);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col max-w-7xl mx-auto justify-center relative pt-16 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-900/90 -z-5"></div>

      <div className="container flex flex-col items-center justify-center text-center w-full mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="block text-zinc-200">Hey, I’m</span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400  to-emerald-700 bg-clip-text text-transparent">
              Mueez
            </span>
          </h1>

          <p className="md:text-xl sm:text-[18px] lg:text-3xl text-zinc-300 mb-4 font-medium leading-tight md:leading-relaxed">
            I am a professional{" "}
            <span className="text-emerald-400 font-bold"> UI/UX designer</span>{" "}
            creating graphics and user interfaces for web and mobile
            applications.
          </p>

          <span className="inline-block text-zinc-400 text-lg md:text-xl mb-2 mt-4 italic bg-zinc-800/50 px-4 py-2 rounded-lg border border-emerald-500/30">
            Passionate about{" "}
            <span className="text-emerald-400">helping clients</span> achieve
            their goals through innovative design solutions.
          </span>

          <div className="flex flex-row justify-center items-center  flex-wrap gap-6 mt-8">
            <Button
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10  text-lg font-semibold rounded-xl py-5 shadow-lg transition-all duration-150"
              onClick={() => scrollTo("projects", 40)}
            >
              Explore My Projects
            </Button>

            <Button
              variant="outline"
              className="border-2 border-emerald-400 text-emerald-400 px-10  text-lg font-semibold rounded-xl shadow-lg py-5 transition-all duration-150"
              onClick={() => scrollTo("contact", 80)}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
