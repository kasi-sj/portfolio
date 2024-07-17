'use client'
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useTheme } from "next-themes";

export default function Page() {
  const theme = useTheme();
  return (
    <div className={"h-full relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg"+` ${theme.theme === "dark" ? "bg-black" : "bg-white"}`}>
      <Home />
      <About />
      <Skills />
      <Achievements />
      <Projects/>
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
