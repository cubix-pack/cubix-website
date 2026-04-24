import React from "react";

const navLinks = ["Features", "Vision", "Team", "Download"];

const NavBar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50 bg-yellow-400 border-b-4 border-black"
      style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="border-2 border-black bg-white px-3 py-1">
          <span className="font-black text-xl tracking-tighter uppercase text-black">
            CUBIX
          </span>
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`font-black uppercase tracking-tighter text-sm text-black hover:bg-orange-500 hover:text-white px-2 py-1 transition-all duration-75 active:translate-x-px active:translate-y-px ${i === 0 ? "border-b-4 border-black" : "opacity-80"}`}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button className="bg-black text-white font-black uppercase tracking-tighter text-sm px-6 py-2 border-2 border-black hover:bg-white hover:text-black transition-all active:translate-x-px active:translate-y-px">
        Get Started
      </button>
    </nav>
  );
};

export default NavBar;
