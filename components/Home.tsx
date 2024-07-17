'use client'
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Button, Image, Link } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";
import { Chip } from "@nextui-org/chip";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

const Home = () => {
  const theme = useTheme();
  return (
    <div id="home" className="h-full overflow-hidden relative w-full min-h-screen flex flex-col items-center justify-center rounded-lg">
      <Boxes />
      <div className="flex flex-row justify-between items-center w-full ">
        
      <div className={" flex flex-col gap-4 py-4 z-30 border-l-2"+` ${theme.theme === "dark" ? "bg-black" : "bg-white"}`}>
            {siteConfig.socials.map((social) => {
              return (
                <div key={social.link}>
                  <Link href={social.link} isExternal>
                  <div className="px-4">
                    <social.icon size={30} className={` ${theme.theme === "dark" ? "text-white" : "text-black"}`}/>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
        <div className="flex flex-col items-center  justify-center ml-2">
          <h1
            className={cn(
              "md:text-7xl text-2xl font-semibold relative z-20" + ` ${theme.theme === "dark" ? "text-white" : "text-black"}`
            )}
          >
            Hi👋, I am Kasinathan S J
          </h1>
          <div className="flex-row flex-grow  items-center mt-5 ">
            <Chip color="default" size="md" radius="sm" className="mr-6" >
              Full Stack Developer
            </Chip>
            <Chip color="default" size="md" radius="sm" >
              Compititive Programmer
            </Chip>
          </div>
          <p className={"mt-5 z-20 text-neutral-300 text-center gap-1 text-center lg:w-2/3 md:text-3xl text-xl" + ` ${theme.theme === "dark" ? "text-neutral-300" : "text-neutral-800"}`}>
            I am a CSE student from Madurai, Tamil Nadu, India, currently
            pursuing a Bachelor of Engineering in Information Technology at PSNA
            College of Engineering and Technology.
          </p>
          <Link href={"#projects"} className="mt-5 bg-inherit" isExternal>
            <Button variant="faded">Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
