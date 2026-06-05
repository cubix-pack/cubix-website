import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../public/cubix_logo_cropped.svg";

const navLinks = [
  { label: "Download", id: "download" },
  { label: "Vision", id: "vision" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Team", id: "team" },
];

const NavBar: React.FC = () => {
  const [active, setActive] = useState("download");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      // On About page, don't track active section
      setActive("");
      return;
    }

    const sections = navLinks.map((link) =>
      document.getElementById(link.id),
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
        rootMargin: "-80px 0px 0px 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

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
          return (
            <a
              key={link.label}
              href={`#${link.id}`}
              className={`font-black uppercase tracking-tighter text-sm px-2 py-1 transition-all duration-75
              ${
                active === link.id
                  ? "border-b-4 border-black text-black"
                  : "opacity-80 text-black"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
