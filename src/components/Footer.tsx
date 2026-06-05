import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 bg-teal-400 border-t-4 border-black">
      {/* Brand */}
      <div className="flex flex-col items-center md:items-start gap-1 mb-8 md:mb-0">
        <span className="text-xl font-black text-black uppercase tracking-tight">
          CUBIX
        </span>
        <p className="font-black uppercase text-xs tracking-widest text-black opacity-70">
          © 2026 CUBIX.
        </p>
      </div>

      {/* GitHub Link on Right */}
      <a
        href="https://github.com/cubix-pack"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 font-black uppercase text-xs tracking-widest text-black hover:bg-black hover:text-white px-4 py-2 border-2 border-black transition-colors duration-100"
        style={{ boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "4px 4px 0px 0px rgba(0,0,0,1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "2px 2px 0px 0px rgba(0,0,0,1)";
        }}
      >
        <span className="material-symbols-outlined text-lg">
          code
        </span>
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
