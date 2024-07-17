'use client'
import { cn } from "@/lib/utils";
import { skills } from "@/config/site";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const Skills = () => {
  
  const theme = useTheme();
  return (
    <div className={" flex-col relative w-full p-6 min-h-screen"} id="skills">
      <BackgroundBeams />
      <h2
        className={cn(
          "lg:text-4xl text-2xl font-semibold w-full text-center mb-10 text-white relative z-20 "+` ${theme.theme === "dark" ? "text-white" : "text-black"}`
        )}
      >
        Skills
      </h2>
      <div className=" w-full h-full  flex justify-center items-center">
        <InfiniteMovingCards items={skills} speed="slow"/>
      </div>
    </div>
  );
};

export default Skills;
