import React from "react";

interface Contributor {
  name: string;
  role: string;
  icon: string;
  headerBg: string;
  patternStyle: React.CSSProperties;
  roleColor: string;
  iconColor: string;
}

const contributors: Contributor[] = [
  {
    name: "Jax Vorn",
    role: "Lead Architect",
    icon: "code",
    headerBg: "bg-[#ff5722]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#b02f00]",
    iconColor: "text-white",
  },
  {
    name: "Mina Sato",
    role: "Visual Terrorist",
    icon: "brush",
    headerBg: "bg-[#68fadd]",
    patternStyle: {
      backgroundImage:
        "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
    },
    roleColor: "text-[#006b5c]",
    iconColor: "text-black",
  },
  {
    name: "Rayn Kross",
    role: "Mesh Security",
    icon: "shield",
    headerBg: "bg-[#ffdf9e]",
    patternStyle: {
      backgroundImage:
        "radial-gradient(circle, rgba(0,0,0,0.1) 2px, transparent 2px)",
      backgroundSize: "12px 12px",
    },
    roleColor: "text-[#785900]",
    iconColor: "text-[#5b4300]",
  },
  {
    name: "Echo Zero",
    role: "Protocol Deviant",
    icon: "terminal",
    headerBg: "bg-[#ffdad6]",
    patternStyle: {
      backgroundImage:
        "linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
      backgroundSize: "10px 10px",
    },
    roleColor: "text-[#ba1a1a]",
    iconColor: "text-[#ba1a1a]",
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <h2 className="font-black text-[40px] uppercase tracking-tighter text-black leading-tight">
            Meet the Minds
          </h2>
          <div className="bg-black text-white px-6 py-2 font-black uppercase text-xs tracking-widest border-2 border-black">
            The Collective
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((c) => (
            <div
              key={c.name}
              className="border-4 border-black bg-white overflow-hidden"
              style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            >
              {/* Card header */}
              <div
                className={`h-48 ${c.headerBg} border-b-4 border-black relative overflow-hidden`}
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
                  href="#"
                  className="inline-flex items-center gap-2 font-black text-xs bg-black text-white px-4 py-2 hover:bg-[#006b5c] transition-colors uppercase w-full justify-center border-2 border-black"
                >
                  LinkedIn{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
