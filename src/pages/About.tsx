import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface Mode {
  name: string;
  face: string;
  purpose: string;
  restrictions: string[];
  icon: string;
  bgColor: string;
  delay: number;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const modes: Mode[] = [
  {
    name: "Deep Work",
    face: "3",
    purpose: "Uninterrupted focus",
    restrictions: ["Blocks apps", "Blocks websites", "Mutes notifications"],
    icon: "psychology",
    bgColor: "bg-red-500",
    delay: 0.1,
  },
  {
    name: "Pomodoro",
    face: "1",
    purpose: "25-min cycles",
    restrictions: ["Focus timer", "Break reminder", "Distraction blocking"],
    icon: "schedule",
    bgColor: "bg-teal-400",
    delay: 0.2,
  },
  {
    name: "Entertainment",
    face: "2",
    purpose: "Leisure time",
    restrictions: ["Blocks work apps", "Curated sites", "Full freedom"],
    icon: "movie",
    bgColor: "bg-purple-500",
    delay: 0.3,
  },
  {
    name: "Meetings",
    face: "5",
    purpose: "Communication",
    restrictions: ["Optimized for calls", "Collaboration tools", "Clear focus"],
    icon: "videocam",
    bgColor: "bg-blue-500",
    delay: 0.4,
  },
  {
    name: "Offline",
    face: "4",
    purpose: "No internet",
    restrictions: ["Maximum isolation", "Local work only", "Zero distractions"],
    icon: "cloud_off",
    bgColor: "bg-gray-500",
    delay: 0.5,
  },
  {
    name: "Idle",
    face: "Up/Down",
    purpose: "Default mode",
    restrictions: ["No restrictions", "Full access", "Standard setup"],
    icon: "all_inclusive",
    bgColor: "bg-yellow-400",
    delay: 0.6,
  },
];

const benefits: Benefit[] = [
  {
    title: "Physicality Matters",
    description: "Flipping a cube is intentional, unlike clicking an app",
    icon: "touch_app",
    delay: 0.1,
  },
  {
    title: "Instant Accountability",
    description: "Family/colleagues see when you're in deep focus",
    icon: "visibility",
    delay: 0.2,
  },
  {
    title: "Multi-Device Sync",
    description: "Activation on phone auto-syncs to desktop & browser",
    icon: "sync",
    delay: 0.3,
  },
  {
    title: "Hardcore Blocking",
    description: "System-level restrictions (not just app-based)",
    icon: "block",
    delay: 0.4,
  },
  {
    title: "Time-Locked Safety",
    description: "Cube locks prevent accidental mode-switching mid-task",
    icon: "lock",
    delay: 0.5,
  },
  {
    title: "Offline Resilient",
    description: "Works even if one device disconnects",
    icon: "offline_bolt",
    delay: 0.6,
  },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.72, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, duration: 0.52, ease: easeOut },
  }),
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

const About: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const modesRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const modesInView = useInView(modesRef, { once: true, margin: "-80px" });
  const techInView = useInView(techRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });

  const handleNavigate = (anchor: string) => {
    navigate(`/#${anchor}`);
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="bg-[#f9f9f9] text-[#1b1b1b] font-sans overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section
        id="what-is-cubix"
        ref={heroRef}
        className="p-8 lg:px-20 lg:py-32 bg-white border-b-4 border-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={textItemVariants} className="mb-2">
              <span className="inline-block bg-black text-yellow-400 text-xs font-black uppercase tracking-widest px-3 py-1 mb-6">
                What is Cubix?
              </span>
            </motion.div>

            <motion.h1
              variants={textItemVariants}
              className="font-black uppercase leading-none tracking-tighter text-[clamp(40px,6vw,64px)] text-black mb-8"
            >
              The Smart Cube for{" "}
              <span className="block">
                Intentional{" "}
                <span className="bg-[#ff5722] text-white px-2 inline-block">
                  Focus
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={textItemVariants}
              className="text-[18px] font-medium leading-relaxed max-w-3xl text-[#1b1b1b] border-l-8 border-black pl-6 italic mb-8"
            >
              "Cubix is a smart cube-based productivity system that makes context-switching physical and intentional. Instead of managing focus through apps or keyboard shortcuts, users flip a physical smart cube to activate different productivity modes."
            </motion.p>

            <motion.div
              variants={textItemVariants}
              className="space-y-6 max-w-3xl"
            >
              <p className="text-base leading-relaxed text-[#1b1b1b]">
                The cube acts as a <strong>tangible interface that syncs across all devices</strong>—mobile, desktop, and browser—creating a unified distraction-blocking ecosystem.
              </p>
              <p className="text-base leading-relaxed text-[#1b1b1b]">
                <strong>The core innovation:</strong> A smart cube device with 6 detectable face orientations. Each face represents a different productivity mode that automatically controls what apps, websites, and notifications are allowed across all your devices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Flow */}
      <section id="workflow" className="p-8 lg:px-20 lg:py-20 bg-[#f9f9f9] border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={textItemVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="font-black text-[40px] uppercase leading-tight tracking-tighter text-black mb-12 inline-block border-b-8 border-[#b02f00]"
          >
            Real-Time Workflow
          </motion.h2>

          <div className="mt-12 space-y-6 max-w-4xl">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textItemVariants}
              className="bg-white border-4 border-black p-8"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 border-2 border-black flex items-center justify-center font-black text-xl text-white">
                  1
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase mb-2">User Flips Cube</h3>
                  <p className="text-sm leading-relaxed">Physical interaction triggers mode change</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textItemVariants}
              transition={{ delay: 0.1 }}
              className="bg-white border-4 border-black p-8"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-400 border-2 border-black flex items-center justify-center font-black text-xl text-black">
                  2
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase mb-2">Mobile Reads & Broadcasts</h3>
                  <p className="text-sm leading-relaxed">Phone reads orientation via Bluetooth, broadcasts mode change to all devices</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textItemVariants}
              transition={{ delay: 0.2 }}
              className="bg-white border-4 border-black p-8"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 border-2 border-black flex items-center justify-center font-black text-xl text-black">
                  3
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase mb-2">Desktop & Browser Sync</h3>
                  <p className="text-sm leading-relaxed">Desktop receives signal, blocks apps instantly. Browser extension blocks websites.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textItemVariants}
              transition={{ delay: 0.3 }}
              className="bg-white border-4 border-black p-8"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 border-2 border-black flex items-center justify-center font-black text-xl text-white">
                  4
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase mb-2">Distraction-Free Environment</h3>
                  <p className="text-sm leading-relaxed">User sees focused, distraction-free environment across all devices instantly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 5 Productivity Modes */}
      <section id="modes" ref={modesRef} className="p-8 lg:px-20 lg:py-20 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={textItemVariants}
            initial="hidden"
            animate={modesInView ? "visible" : "hidden"}
            className="font-black text-[40px] uppercase leading-tight tracking-tighter text-black mb-12 inline-block border-b-8 border-[#b02f00]"
          >
            The 5 Productivity Modes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {modes.map((mode) => (
              <motion.div
                key={mode.name}
                custom={mode.delay}
                variants={cardVariants}
                initial="hidden"
                animate={modesInView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={`${mode.bgColor} border-4 border-black p-6 cursor-pointer`}
                style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="material-symbols-outlined flex-shrink-0"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {mode.icon}
                  </span>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-black/60 mb-1">
                      Face {mode.face}
                    </div>
                    <h3 className="font-black text-lg uppercase">{mode.name}</h3>
                  </div>
                </div>

                <p className="text-sm font-medium mb-4">{mode.purpose}</p>

                <div className="space-y-2">
                  {mode.restrictions.map((restriction, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <span className="inline-block w-1.5 h-1.5 bg-black rounded-full"></span>
                      <span>{restriction}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section id="architecture" ref={techRef} className="p-8 lg:px-20 lg:py-20 bg-[#f9f9f9] border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={textItemVariants}
            initial="hidden"
            animate={techInView ? "visible" : "hidden"}
            className="font-black text-[40px] uppercase leading-tight tracking-tighter text-black mb-12 inline-block border-b-8 border-[#b02f00]"
          >
            Technical Architecture
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              variants={textItemVariants}
              initial="hidden"
              animate={techInView ? "visible" : "hidden"}
              className="bg-white border-4 border-black p-8"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              <h3 className="font-black text-xl uppercase mb-4 text-[#b02f00]">
                Mobile App (Flutter)
              </h3>
              <p className="font-bold mb-4">THE CONTROL CENTER</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Reads physical cube via Bluetooth</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Owns BLE connection and cube authority</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Broadcasts mode changes to all devices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Enforces app/website blocking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={textItemVariants}
              initial="hidden"
              animate={techInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="bg-white border-4 border-black p-8"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              <h3 className="font-black text-xl uppercase mb-4 text-[#b02f00]">
                Desktop App (React + Tauri)
              </h3>
              <p className="font-bold mb-4">THE ASSISTANT</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Listens to mobile's cube actions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Shows UI prompts and confirmations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Blocks applications (Windows registry)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Syncs with mobile and browser</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={textItemVariants}
              initial="hidden"
              animate={techInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="bg-white border-4 border-black p-8"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              <h3 className="font-black text-xl uppercase mb-4 text-[#b02f00]">
                Backend Server (Express.js)
              </h3>
              <p className="font-bold mb-4">THE RELAY</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>WebSocket relay for all devices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Broadcasts mode changes in real-time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Ensures multi-device sync</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Hosted live on Railway.app</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={textItemVariants}
              initial="hidden"
              animate={techInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              className="bg-white border-4 border-black p-8"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            >
              <h3 className="font-black text-xl uppercase mb-4 text-[#b02f00]">
                Browser Extension (Chrome)
              </h3>
              <p className="font-bold mb-4">THE WEB BLOCKER</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Blocks distracting websites instantly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Syncs with productivity modes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Manifest V3 + Declarative Net Request</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#b02f00] font-black">•</span>
                  <span>Seamless multi-device integration</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" ref={benefitsRef} className="p-8 lg:px-20 lg:py-20 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={textItemVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="font-black text-[40px] uppercase leading-tight tracking-tighter text-black mb-12 inline-block border-b-8 border-[#b02f00]"
          >
            Key Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                custom={benefit.delay}
                variants={cardVariants}
                initial="hidden"
                animate={benefitsInView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="bg-teal-400 border-4 border-black p-6 cursor-pointer"
                style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
              >
                <div className="aspect-square bg-black flex items-center justify-center p-4 border-2 border-white/20 mb-4">
                  <span
                    className="material-symbols-outlined text-teal-400"
                    style={{ fontSize: "4rem" }}
                  >
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="font-black text-lg uppercase mb-3">{benefit.title}</h3>
                <p className="text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section id="features" className="p-8 lg:px-20 lg:py-20 bg-[#f9f9f9] border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={textItemVariants}
              className="font-black text-[40px] uppercase leading-tight tracking-tighter text-black mb-8 inline-block border-b-8 border-[#b02f00]"
            >
              Advanced Feature
            </motion.h2>

            <motion.h3
              variants={textItemVariants}
              className="text-2xl font-black uppercase mt-12 mb-6"
            >
              Time-Locked Tasks
            </motion.h3>

            <motion.p
              variants={textItemVariants}
              className="text-base leading-relaxed text-[#1b1b1b] mb-4"
            >
              Users can create scheduled "tasks" that lock the cube face for a defined duration:
            </motion.p>

            <motion.ul
              variants={textContainerVariants}
              className="space-y-4 mb-8"
            >
              <motion.li
                variants={textItemVariants}
                className="flex gap-4 items-start"
              >
                <span className="font-black text-[#b02f00]">→</span>
                <span>
                  <strong>Example:</strong> "Deep Focus Session: 2 hours (2 PM - 4 PM)"
                </span>
              </motion.li>
              <motion.li
                variants={textItemVariants}
                className="flex gap-4 items-start"
              >
                <span className="font-black text-[#b02f00]">→</span>
                <span>
                  <strong>When active:</strong> Cube face is locked — user cannot flip to
                  a different mode until the task ends
                </span>
              </motion.li>
              <motion.li
                variants={textItemVariants}
                className="flex gap-4 items-start"
              >
                <span className="font-black text-[#b02f00]">→</span>
                <span>
                  <strong>Multi-device:</strong> Mobile, desktop, and browser all show
                  countdown timers
                </span>
              </motion.li>
              <motion.li
                variants={textItemVariants}
                className="flex gap-4 items-start"
              >
                <span className="font-black text-[#b02f00]">→</span>
                <span>
                  <strong>Offline handling:</strong> When offline mid-task, system queues
                  actions and syncs when reconnected
                </span>
              </motion.li>
            </motion.ul>

            <motion.p
              variants={textItemVariants}
              className="text-base leading-relaxed text-[#1b1b1b] font-medium italic border-l-8 border-black pl-6"
            >
              This ensures accountability: The cube physically prevents context-switching
              during critical focus periods.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Back to Home */}
      <section id="cta" className="p-8 lg:px-20 lg:py-20 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-2xl uppercase mb-4 tracking-tighter"
          >
            Ready to Transform Your Productivity?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base leading-relaxed mb-8 max-w-2xl text-[#1b1b1b]"
          >
            Download Cubix for your platform and start experiencing intentional focus
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleNavigate("download")}
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
              Download Now
            </button>
            <button
              onClick={() => handleNavigate("team")}
              className="
                bg-white text-black px-8 py-3
                font-black text-sm uppercase tracking-widest
                border-2 border-black
                transition-all duration-75
                hover:-translate-x-1 hover:-translate-y-1
                active:translate-x-0 active:translate-y-0
                cursor-pointer
                inline-block
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
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
