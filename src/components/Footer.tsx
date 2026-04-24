import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-8 bg-teal-400 border-t-4 border-black">
      {/* Brand */}
      <div className="flex flex-col items-center md:items-start gap-1">
        <span className="text-xl font-black text-black uppercase tracking-tight">
          CUBIX LABS
        </span>
        <p className="font-black uppercase text-xs tracking-widest text-black opacity-70">
          © 2026 CUBIX LABS.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="#"
          className="font-black uppercase text-xs tracking-widest text-black hover:bg-black hover:text-white px-2 py-1 transition-colors duration-100"
        >
          Github
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        {["share", "mail"].map((icon) => (
          <div
            key={icon}
            className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white hover:bg-black group transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-black group-hover:text-white transition-colors">
              {icon}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
