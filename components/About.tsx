'use client'
import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import LanguageIcon from "@mui/icons-material/Language";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import { TfiCup } from "react-icons/tfi";
import { GrSystem } from "react-icons/gr";
import { Button } from "@nextui-org/button";
import { IoMdDownload } from "react-icons/io";
import { Link } from "@nextui-org/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { useTheme } from "next-themes";

const items = [
  {
    title: <LanguageIcon className="h-8 w-8" />,
    description:
      "Web Development",
  },
  {
    title: <AppSettingsAltIcon className="h-8 w-8" />,
    description:
      "Mobile Development",
  },
  {
    title: <TfiCup className="h-8 w-8" />,
    description:
      "Competitive Programming",
  },
  {
    title: <GrSystem className="h-8 w-8" />,
    description:
      "System Design",
  }
]
const About = () => {
  
  const theme = useTheme();
  return (
    <div className={" flex-col w-full min-h-screen"}>
      <h2
        className={cn(
          "lg:text-4xl text-2xl font-semibold w-full text-center my-10 text-white relative z-20"+` ${theme.theme === "dark" ? "text-white" : "text-black"}`
        )}
      >
        About
      </h2>
      <div className={"flex flex-col lg:flex-row "+ ` ${theme.theme === "dark" ? "text-white" : "text-black"}`}>
        <div className="flex flex-col   w-full lg:w-1/2 items-start lg:p-10 p-2">
          <h3 className="lg:text-3xl text-lg font-semibold">Know me better</h3>
          <div className="mt-5 lg:text-lg text-md font-medium">
            {`Hi, I’m Kasi Nathan S J, I’m a competitive programmer with a keen
                interest in web development .`}
          </div>
          <div className="mt-5 lg:text-lg text-md font-medium">
            {`. I have strong skills in Java and
                javaScript programming languages . My passion for coding has led me to
                explore various domains of computer science.`}
          </div>
          <div className="mt-5 lg:text-lg text-md font-medium">
            {` I am always eager to
                learn new technologies and apply them to real-world problems. I am
                currently seeking opportunities to work on challenging projects that
                will help me grow as a developer.`}
            <div />
          </div>
          <Link isExternal>
            <Button className="mt-5">
              Download Resume <IoMdDownload />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 items-start lg:p-10 p-2">
          <h3 className="lg:text-3xl text-lg font-semibold">
            Area of Interests
          </h3>
            <HoverEffect className="w-full h-full" items={items} />
        </div>
      </div>
    </div>
  );
};

export default About;
