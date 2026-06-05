import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface WorkflowCard {
  number: string;
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const workflowCards: WorkflowCard[] = [
  {
    number: "01",
    title: "User Flips Cube",
    description: "Physical interaction triggers mode change",
    icon: "touch_app",
    delay: 0.1,
  },
  {
    number: "02",
    title: "Mobile Syncs",
    description: "Reads BLE, broadcasts to all devices",
    icon: "smartphone",
    delay: 0.2,
  },
  {
    number: "03",
    title: "Desktop Activates",
    description: "Receives signal, blocks apps instantly",
    icon: "monitor",
    delay: 0.3,
  },
  {
    number: "04",
    title: "Browser Enforces",
    description: "Extension blocks distracting websites",
    icon: "language",
    delay: 0.4,
  },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.72,
    y: 32,
  },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.52,
      ease: easeOut,
    },
  }),
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const textItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

const HowItWorksTeaser: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="p-8 lg:px-20 lg:py-20 bg-white border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h2
            variants={textItemVariants}
            className="font-black text-[40px] uppercase leading-tight tracking-tighter text-black mb-6 inline-block border-b-8 border-[#b02f00]"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={textItemVariants}
            className="text-[18px] font-medium leading-relaxed max-w-2xl text-[#1b1b1b] mt-6"
          >
            One flip of the cube triggers an instant multi-device sync. Your phone reads the orientation, broadcasts the mode, and your desktop, browser, and all connected devices lock in simultaneously.
          </motion.p>
        </motion.div>

        {/* Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workflowCards.map((card) => (
            <motion.div
              key={card.number}
              custom={card.delay}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="relative bg-yellow-400 border-4 border-black p-6 cursor-pointer"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              {/* Number Badge */}
              <div className="absolute -top-5 -left-5 z-10 bg-[#b02f00] text-white border-4 border-black px-3 py-2 font-black text-lg tracking-widest"
                style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}>
                {card.number}
              </div>

              {/* Icon */}
              <div className="aspect-square bg-black flex items-center justify-center p-4 border-2 border-white/20 mb-4">
                <span
                  className="material-symbols-outlined text-yellow-400"
                  style={{ fontSize: "4rem" }}
                >
                  {card.icon}
                </span>
              </div>

              {/* Title and Description */}
              <h3 className="font-black uppercase text-sm tracking-widest text-black mb-3">
                {card.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#1b1b1b]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA to Learn More */}
        <motion.div
          variants={textItemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          <p className="text-base leading-relaxed text-[#1b1b1b] max-w-2xl mb-8">
            Want to understand the complete system architecture, all productivity modes, and what makes Cubix different? Dive into the full breakdown.
          </p>
          <Link
            to="/about"
            className="
              bg-black text-white px-8 py-3
              font-black text-sm uppercase tracking-widest
              border-2 border-black
              transition-all duration-75
              hover:-translate-x-1 hover:-translate-y-1
              active:translate-x-0 active:translate-y-0
              cursor-pointer
              inline-block no-underline
            "
            style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "8px 8px 0px 0px rgba(0,0,0,1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "4px 4px 0px 0px rgba(0,0,0,1)")
            }
            onMouseDown={(e) => (e.currentTarget.style.boxShadow = "none")}
            onMouseUp={(e) =>
              (e.currentTarget.style.boxShadow =
                "4px 4px 0px 0px rgba(0,0,0,1)")
            }
          >
            How It Works →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksTeaser;
