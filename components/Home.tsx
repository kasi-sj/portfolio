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
    <div className="h-full  relative w-full min-h-screen flex flex-col items-center justify-center rounded-lg">
      <Boxes />
      <div className="flex flex-row justify-around items-center w-full mt-16">
        <div className="flex flex-col items-center lg:w-1/2  justify-center lg:items-start">
          <h1
            className={cn(
              "md:text-4xl text-xl font-semibold relative z-20" + ` ${theme.theme === "dark" ? "text-white" : "text-black"}`
            )}
          >
            Hi👋, I am Kasinathan S J
          </h1>
          <div className="w-full flex-row justify-start mt-5 ">
            <Chip color="default" size="md" radius="sm" className="mr-4">
              Full Stack Developer
            </Chip>
            <Chip color="default" size="md" radius="sm" className="">
              Compititive Programmer
            </Chip>
          </div>

          <p className={"mt-5 text-neutral-300 w-full " + ` ${theme.theme === "dark" ? "text-neutral-300" : "text-neutral-800"}`}>
            I am a CSE student from Madurai, Tamil Nadu, India, currently
            pursuing a Bachelor of Engineering in Information Technology at PSNA
            College of Engineering and Technology.
          </p>

          <div className="mt-5 flex flex-row gap-2">
            {siteConfig.socials.map((social) => {
              return (
                <div key={social.link}>
                  <Link href={social.link} isExternal>
                    <Button variant="faded">
                      <social.icon size={20} />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
          <Link href={"#projects"} className="mt-5 bg-inherit" isExternal>
            <Button variant="faded">View Projects</Button>
          </Link>
        </div>
        <Image src="/cartoon.png" />
      </div>
    </div>
  );
};

export default Home;
