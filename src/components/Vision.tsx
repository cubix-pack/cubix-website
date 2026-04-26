import React from "react";
import { motion } from "framer-motion";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: string;
  bg: string;
  titleColor: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "SYNC",
    desc: "Connect the CUBIX core to your desktop and mobile. Your focus shouldn't have loopholes. When the cube flips, every screen bows.",
    icon: "rocket_launch",
    bg: "bg-white",
    titleColor: "text-black",
  },
  {
    num: "02",
    title: "CUSTOMIZE",
    desc: "Your discipline, your rules. Map your 5 most critical focus modes to each face of the cube. Choose which apps live and which apps die.",
    icon: "fingerprint",
    bg: "bg-teal-400",
    titleColor: "text-black",
  },
  {
    num: "03",
    title: "EXECUTE",
    desc: "No need to navigate menus and tabs just to be productive. One flip of the cube and you will reclaim your productivity",
    icon: "hub",
    bg: "bg-yellow-400",
    titleColor: "text-black",
  },
];

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="p-8 lg:px-16 lg:py-20 bg-orange-400 border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-[40px] uppercase tracking-tighter text-black mb-12 inline-block border-b-8 border-black leading-tight">
          The Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              className={`${step.bg} border-4 border-black p-6 flex flex-col gap-3`}
              style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              initial={{ scale: 0.95, opacity: 0.9 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Number badge */}
              <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-black text-2xl leading-none">
                {step.num}
              </div>

              <h3
                className={`font-black text-2xl uppercase ${step.titleColor}`}
              >
                {step.title}
              </h3>

              <p className="text-base font-normal leading-relaxed text-[#1b1b1b] flex-1">
                {step.desc}
              </p>

              <span className="material-symbols-outlined text-6xl mt-auto self-end opacity-80">
                {step.icon}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
