"use client";

import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    list: {name : string , icon : any}[];
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const theme = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full p-6 overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((skills, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl  flex-shrink-0  md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={skills.title}
          >
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
          </li>
        ))}
      </ul>
    </div>
  );
};
