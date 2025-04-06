import React from "react";
import { navItems } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-8 border-neutral-700 flex justify-between pt-4 text-sm px-2">
      <div className="flex flex-col gap-2 text-left">
        <a
          className="text-green-600 hover:text-green-500 transition-all"
          href="https://github.com/RiniShulhah/react-portfolio"
        >
          GitHub/Code
        </a>
        <span className="text-xs">
          made by Rini Shulhah w React/Vite & Tailwind
        </span>
      </div>
      <div className="flex flex-col gap-2 text-right">
        {navItems.map((item, index) => (
          <a
            key={index}
            className="text-blue-500 hover:text-blue-300 hover:scale-105 transition-all"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
