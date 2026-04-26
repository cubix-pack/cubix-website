import React from "react";
import { motion } from "framer-motion";

interface Contributor {
  name: string;
  role: string;
  icon: string;
  headerBg: string;
  patternStyle: React.CSSProperties;
  roleColor: string;
  iconColor: string;
  linkedin: string;
}

// Team:
/**
 * 1- George Bahij: Mobile Dev / UI/UX
 * 2- Karim Nader: Website Dev
 * 3- Pierre Ehab: Database Design
 * 4- George Ibrahim: UI/UX Design & Desktop Dev
 * 5- Adham Mansour: Hardware Design
 * 6- Ahmed Essam: Database Design & Dev
 * 7- Hussien Mohammed: Desktop Dev
 * 8- Mathiew Botros: Env Leaker
 * 9- Hassan Eladl: Desktop Dev
 * 10- Youssef Maged: Desktop Dev & Cube Design
 * 11- Omar Nagy: Hardware Dev
 */

const contributors: Contributor[] = [
  {
    name: "George Bahij",
    role: "Mobile Dev & UI/UX Design",
    icon: "code",
    headerBg: "bg-[#ff5722]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#b02f00]",
    iconColor: "text-white",
    linkedin: "https://www.linkedin.com/in/george-bahij-1411831ba/",
  },
  {
    name: "Karim Nader",
    role: "Website Dev",
    icon: "brush",
    headerBg: "bg-[#68fadd]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#006b5c]",
    iconColor: "text-black",
    linkedin: "",
  },
  {
    name: "Pierre Ehab",
    role: "Database Design",
    icon: "storage",
    headerBg: "bg-[#ffeb3b]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#b38600]",
    iconColor: "text-black",
    linkedin: "",
  },
  {
    name: "George Ibrahim",
    role: "UI/UX Design & Desktop Dev",
    icon: "desktop_windows",
    headerBg: "bg-[#8bc34a]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#4b7c00]",
    iconColor: "text-black",
    linkedin: "",
  },
  {
    name: "Adham Mansour",
    role: "Hardware Design",
    icon: "memory",
    headerBg: "bg-[#e91e63]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(60deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#9a0036]",
    iconColor: "text-white",
    linkedin: "",
  },
  {
    name: "Ahmed Essam",
    role: "Database Design & Dev",
    icon: "storage",
    headerBg: "bg-[#9c27b0]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(120deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#6a0080]",
    iconColor: "text-white",
    linkedin: "",
  },
  {
    name: "Hussien Mohamed",
    role: "Desktop Dev",
    icon: "desktop_windows",
    headerBg: "bg-[#3f51b5]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(75deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#001970]",
    iconColor: "text-white",
    linkedin: "",
  },
  {
    name: "Mathiew Botros",
    role: "Env Leaker",
    icon: "public",
    headerBg: "bg-[#00bcd4]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(15deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#004d52]",
    iconColor: "text-black",
    linkedin: "",
  },
  {
    name: "Hassan Eladl",
    role: "Desktop Dev",
    icon: "desktop_windows",
    headerBg: "bg-[#cddc39]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(30deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#697000]",
    iconColor: "text-black",
    linkedin: "",
  },
  {
    name: "Youssef Maged",
    role: "Desktop Dev & Cube Design",
    icon: "desktop_windows",
    headerBg: "bg-[#ff9800]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#b26a00]",
    iconColor: "text-black",
    linkedin: "",
  },
  {
    name: "Omar Nagy",
    role: "Hardware Dev",
    icon: "memory",
    headerBg: "bg-[#e91e63]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(60deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#9a0036]",
    iconColor: "text-white",
    linkedin: "",
  },
];

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="p-8 lg:px-16 lg:py-20 bg-[#eeeeee] border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
          <h2 className="font-black text-[40px] uppercase tracking-tighter text-black leading-tight">
            Meet the Minds
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((c) => (
            <motion.div
              key={c.name}
              className="border-4 border-black bg-white overflow-hidden"
              style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              initial={{ scale: 0.95, opacity: 0.9 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Card header */}
              <div
                className={`h-20 ${c.headerBg} border-b-4 border-black relative overflow-hidden`}
              >
                <div className="absolute inset-0" style={c.patternStyle} />
                <span
                  className={`material-symbols-outlined absolute bottom-[-20px] right-[-20px] opacity-30 ${c.iconColor}`}
                  style={{ fontSize: "96px" }}
                >
                  {c.icon}
                </span>
              </div>
              {/* Card body */}
              <div className="p-4">
                <h4 className="font-black text-2xl uppercase leading-tight">
                  {c.name}
                </h4>
                <p
                  className={`font-black uppercase text-xs tracking-widest mb-4 ${c.roleColor}`}
                >
                  {c.role}
                </p>
                <a
                  target="_blank"
                  href={c.linkedin}
                  className="inline-flex items-center gap-2 font-black text-xs bg-black text-white px-4 py-2 hover:bg-teal-400 transition-colors uppercase w-full justify-center border-2 border-black"
                >
                  LinkedIn{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
