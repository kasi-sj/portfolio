'use client'
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
const Skills = () => {
  
  const theme = useTheme();
  return (
    <div className={" flex-col relative w-full overflow-hidden p-6 min-h-screen"+` ${theme.theme !== "dark" ? "bg-white" : "bg-black"}`}>
      <BackgroundBeams />
      <h2
        className={cn(
          "lg:text-4xl text-2xl font-semibold w-full text-center mb-10 text-white relative z-20 "+` ${theme.theme === "dark" ? "text-white" : "text-black"}`
        )}
      >
        Skills
      </h2>
      <div className="grid grid-cols-12  w-full h-full gap-6">
        {siteConfig.skills.map((skills) => (
          <Card className="w-full h-full col-span-4 " key={skills.title}>
            <CardHeader>
              <h3 className="lg:text-xl text-lg font-semibold p-4">
                {skills.title}
              </h3>
            </CardHeader>
            <CardBody className="w-full flex flex-row flex-wrap gap-4">
              {skills.list.map((skill) => (
                <button key={skill.name} className={`shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black  text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex flex-row gap-1 h-10 justify-center items-center` +` ${theme.theme === "dark" ? "text-white border-white" : "text-black border-black"}`}>
                  <skill.icon className="h-4 w-4" />
                  {skill.name}
                </button>
              ))}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
