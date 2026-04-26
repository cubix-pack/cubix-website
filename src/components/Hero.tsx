import React from "react";
import { motion } from "framer-motion";
import CUBIX_IMG from "../../public/cube.jpeg";

interface DownloadBtn {
  icon: string;
  label: string;
  bgClass: string;
  textClass: string;
}

const buttons: DownloadBtn[] = [
  {
    icon: "Window",
    label: "Windows",
    bgClass: "bg-red-500",
    textClass: "text-white",
  },
  {
    icon: "android",
    label: "Android",
    bgClass: "bg-teal-400",
    textClass: "text-white",
  },
  {
    icon: "browser_updated",
    label: "Chrome Extension",
    bgClass: "bg-yellow-400",
    textClass: "text-black",
  },
];

const Hero: React.FC = () => {
  return (
    <header
      id="download"
      className="relative grid grid-cols-1 mt-4 lg:grid-cols-12 min-h-[680px] border-b-4 border-black overflow-hidden"
    >
      {/* Left Content */}
      <div className="lg:col-span-7 p-8 lg:px-16 lg:py-20 flex flex-col justify-center bg-white">
        <div className="mb-2">
          <span className="inline-block bg-black text-yellow-400 text-xs font-black uppercase tracking-widest px-3 py-1 mb-6">
            Physical x Digital Sync
          </span>
        </div>
        <h1 className="font-black uppercase leading-none tracking-tighter text-[clamp(40px,6vw,64px)] text-black mb-4">
          THE CUBE IS THE{" "}
          <span className="block">
            Key{" "}
            <span className="bg-[#ff5722] text-white px-2 inline-block">
              LOCK IN.
            </span>
          </span>
        </h1>
        <p className="text-[18px] font-medium leading-relaxed mb-10 max-w-xl text-[#1b1b1b]">
          Stop fighting your distractions and start dominating your workflow.
          CUBIX syncs your physical environment with your digital space. One
          flip, total silence, zero excuses.
        </p>

        <div className="flex flex-wrap gap-4">
          {buttons.map((btn) => (
            <motion.button
              key={btn.label}
              className={`neo-btn ${btn.bgClass} ${btn.textClass} border-4 border-black px-6 py-3 font-black text-base uppercase flex items-center gap-2`}
              initial={{ scale: 0.95, opacity: 0.9 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className="material-symbols-outlined text-xl">
                {btn.icon}
              </span>
              {btn.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="lg:col-span-5 bg-teal-400 border-l-4 border-black flex items-center justify-center relative p-8 overflow-hidden min-h-[400px]">
        {/* Dot Pattern Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <img
          src={CUBIX_IMG}
          alt="Cubix Character - neo-brutalist cube robot"
          className="relative z-10 w-full max-w-sm border-4 border-black rotate-2"
          style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
        />
      </div>
    </header>
  );
};

export default Hero;
