import { useTheme } from "next-themes";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <footer className={"w-full flex py-3 min-h-5"+` ${theme.theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}>
      <div className={"h-2 "} />
      <p className={`text-center w-full py-10 `}>
        © 2024. Made by Kasi Nathan S J.
      </p>
    </footer>
  );
};

export default Footer;
