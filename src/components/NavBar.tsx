import React, { useEffect, useState } from "react";
import logo from "../../public/cubix_logo_cropped.svg";

const navLinks = ["Features", "Vision", "Team", "Download"];

const NavBar: React.FC = () => {
  const [active, setActive] = useState("features");

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.toLowerCase()),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-80px 0px 0px 0px", // adjust based on navbar height
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50 bg-white"
      style={{ boxShadow: "0px 4px 0px 0px rgba(0,0,0,1)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => {
          const id = link.toLowerCase();

          return (
            <a
              key={link}
              href={`#${id}`}
              className={`font-black uppercase tracking-tighter text-sm px-2 py-1 transition-all duration-75
              ${
                active === id
                  ? "border-b-4 border-black text-black"
                  : "opacity-80 text-black"
              }`}
            >
              {link}
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <button className="bg-black text-white font-black uppercase tracking-tighter text-sm px-6 py-2 border-2 border-black hover:bg-yellow-400 hover:text-black transition-all active:translate-x-px active:translate-y-px">
        Get Started
      </button>
    </nav>
  );
};

export default NavBar;
