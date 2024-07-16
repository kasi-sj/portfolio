"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { projects } from "@/config/site";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Link } from "@nextui-org/link";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
const Projects = () => {
  const theme = useTheme();
  return (
    <div
      className={
        " flex-col w-full min-h-screen" 
      }
    >
      <h2
        className={cn(
          "lg:text-4xl text-2xl font-semibold w-full text-center my-10 text-white relative z-20" +
            ` ${theme.theme === "dark" ? "text-white" : "text-black"}`
        )}
      >
        Projects
      </h2>
      <TracingBeam className="px-6 ">
        {projects.map((project) => {
          return (
            <div key={project.github} className="my-5">
              <WobbleCard containerClassName="">
                <Card className="w-full bg-transparent">
                  <CardHeader className="text-white lg:text-3xl text-lg font-semibold pl-4">
                    {project.title}
                  </CardHeader>
                  <CardBody>
                    <Image
                      src={project.image}
                      width={500}
                      height={500}
                      alt="linkedin clone"
                      className=" object-contain rounded-2xl"
                    />
                  </CardBody>
                  <CardFooter>
                    <div className="flex flex-row justify-between p-2 w-full">
                      <div className="flex flex-col items-start justify-start gap-5 w-full">
                        <p className="text-white max-w-1/3 mt-5 lg:text-lg text-md font-medium">
                          {project.description}
                        </p>
                        <div className="flex flex-row justify-between items-center w-full">
                          <AvatarGroup isBordered>
                            {project.icons.map((Icon, index) => {
                              return (
                                <Avatar
                                  key={index}
                                  fallback={
                                    <div className="">
                                      <Icon className="text-center" size={30} />
                                    </div>
                                  }
                                  size="md"
                                />
                              );
                            })}
                          </AvatarGroup>
                          <div className="flex flex-row items-center justify-center gap-4">
                            <Link href={project.github} isExternal>
                              <span>
                                <FaGithub  size={40} color="white"/>
                              </span>
                            </Link>
                            <Button
                              href={project.link}
                              target="__blank"
                              className={`px-4 py-2  rounded-xl text-black text-xs font-normal ${
                                theme.theme === "dark" && "text-white"
                              }`}
                            >
                              View now →
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col  justify-start gap-5 items-end"></div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </WobbleCard>
            </div>
          );
        })}
      </TracingBeam>
    </div>
  );
};

export default Projects;
