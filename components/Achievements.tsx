'use client'
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
const Achievements = () => {
  const theme = useTheme();
  return (
    <div className={" flex-col w-full min-h-screen"}>
      <h2
        className={cn(
          "lg:text-4xl text-2xl font-semibold w-full text-center my-10 text-white relative z-20"+` ${theme.theme === "dark" ? "text-white" : "text-black"}`
        )}
      >
        Achievements
      </h2>
      <div className="flex flex-row gap-1 justify-center items-center">
      {siteConfig.achievements.map((achievement, index) => (
        <AchievementCard  key={index} data={achievement} />
      ))}
      </div>
    </div>
  );
};

interface AchievementCardProps {
  data: {
    image: string;
    genere: string;
    points: string[];
    link: string;
  };
}
const AchievementCard = ({ data  }: AchievementCardProps) => {
  const theme = useTheme()?.theme;
  return (
    <CardContainer className="inter-var" >
      <CardBody className={`bg-gray-50 relative group/card  ${theme === "dark" && "hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]"}  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  `}>
        {data.points.map((point) => (
          <CardItem
            key={point}
            as="p"
            translateZ="60"
            className={`text-neutral-500 text-sm max-w-sm mt-2 ${theme === "dark" && "text-neutral-300"}`}
          >
            {point}
          </CardItem>
        ))}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={data.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            className={`text-lg font-bold text-neutral-600 ${theme==="dark" && "text-white"}`}
          >
            {data.genere}
          </CardItem>
          <CardItem
            translateZ={25}
            as="a"
            href={data.link}
            target="__blank"
            className={`px-4 py-2  rounded-xl text-black text-xs font-normal ${theme==="dark" && "text-white"}`}
          >
            View now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Achievements;
