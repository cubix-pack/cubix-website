import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StoryCard {
  icon: string;
  label: string;
  rotate: string;
  badge?: string;
  delay: number;
}

const cards: StoryCard[] = [
  {
    icon: "emergency_home",
    label: "The Core Origin",
    rotate: "-rotate-1",
    badge: "Established 2026",
    delay: 0.1,
  },
  {
    icon: "bolt",
    label: "Pure Power",
    rotate: "rotate-1",
    delay: 0.2,
  },
  {
    icon: "settings",
    label: "System Logic",
    rotate: "-rotate-2",
    delay: 0.3,
  },
  {
    icon: "grade",
    label: "Elite Focus",
    rotate: "rotate-2",
    delay: 0.4,
  },
];

// Card scale-in animation variant
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
      ease: [0.22, 1, 0.36, 1], // custom spring-like ease
    },
  }),
};

// Left-side text stagger
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const OurStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="our story"
      ref={sectionRef}
      className="p-8 lg:px-20 lg:py-20 bg-white border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* ── Left: Text Content ─────────────────────────── */}
        <motion.div
          className="lg:col-span-7"
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.h2
            variants={textItemVariants}
            className="font-black text-[40px] uppercase leading-tight tracking-tighter text-black mb-12 inline-block border-b-8 border-[#b02f00]"
          >
            Our Story
          </motion.h2>

          <div className="space-y-6">
            {/* Pull quote */}
            <motion.p
              variants={textItemVariants}
              className="font-medium text-[18px] leading-relaxed border-l-8 border-black pl-6 italic text-[#1b1b1b]"
            >
              "The world was getting too soft. Too many notifications, too many
              'gentle reminders.' We needed a sledgehammer for the digital age."
            </motion.p>

            {/* Body paragraph 1 */}
            <motion.p
              variants={textItemVariants}
              className="text-base leading-relaxed text-[#1b1b1b]"
            >
              CUBIX was born in a basement filled with discarded circuit boards
              and too much caffeine. We didn't want another app to track your
              time; we wanted to <strong>break reality</strong>. We believe the
              interface between human and machine should be raw, tactile, and
              unapologetic.
            </motion.p>

            {/* Body paragraph 2 */}
            <motion.p
              variants={textItemVariants}
              className="text-base leading-relaxed text-[#1b1b1b]"
            >
              Our mission is simple: provide a high-contrast digital experience
              that forces you to choose. Deep work or no work. There is no
              middle ground in the CUBIX ecosystem. We built this for the
              rogues, the builders, and the ones who refuse to be distracted by
              the noise.
            </motion.p>

            {/* CTA button */}
            <motion.div variants={textItemVariants} className="pt-3">
              <button
                className="
                  bg-black text-white px-8 py-3
                  font-black text-sm uppercase tracking-widest
                  border-2 border-black
                  transition-all duration-75
                  hover:-translate-x-1 hover:-translate-y-1
                  active:translate-x-0 active:translate-y-0
                  cursor-pointer
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
                Join the Resistance
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Right: Card Grid ───────────────────────────── */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.label}
              custom={card.delay}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
              className={`
                relative bg-teal-400 border-4 border-black p-4 w-full
                cursor-pointer ${card.rotate}
              `}
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              {/* "Established" badge — only on first card */}
              {card.badge && (
                <div
                  className="
                    absolute -top-5 -left-5 z-10
                    bg-yellow-400 border-4 border-black
                    px-2 py-1
                    font-black uppercase text-[9px] tracking-widest
                  "
                  style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                >
                  {card.badge}
                </div>
              )}

              {/* Icon area */}
              <div className="aspect-square bg-black flex items-center justify-center p-6 border-2 border-white/20">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: "6rem" }}
                >
                  {card.icon}
                </span>
              </div>

              {/* Label */}
              <div className="mt-4 bg-white border-2 border-black p-2 text-center font-black uppercase tracking-widest text-[10px]">
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
