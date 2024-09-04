"use client"
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScript from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GitIcon from "@/assets/icons/github.svg";
import React from "@/assets/icons/react.svg";
import Chrome from "@/assets/icons/chrome.svg";
import MapImage from "@/assets/images/map.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "react",
    icon: <JavaScript classNane="size-10" />,
  },
  {
    title: "html",
    icon: <HtmlIcon classNane="size-10" />,
  },
  {
    title: "css",
    icon: <CssIcon classNane="size-10" />,
  },
  {
    title: "git",
    icon: <GitIcon classNane="size-10" />,
  },
  {
    title: "react",
    icon: <React classNane="size-10" />,
  },
  {
    title: "chrome",
    icon: <Chrome classNane="size-10" />,
  },
];

const hobies = [
  { title: "Painting", emoji: "$", left: "40%", top: "%" },
  { title: "Reading", emoji: "��", left: "8%", top: "12%" },
  { title: "Traveling", emoji: "���", left: "35%", top: "30%" },
  { title: "Cooking", emoji: "���", left: "62%", top: "56%" },
  { title: "Gardening", emoji: "���", left: "54%", top: "43%" },
  { title: "Hiking", emoji: "��", left: "1%", top: "54%" },
  { title: "Photography", emoji: "��", left: "41%", top: "67%" },
  { title: "Spending", emoji: "��", left: "12%", top: "77%" },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who i am, what i do,and what inspire me"
        />
        <div className="flex mt-20 flex-col gap-8">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 col-span-3 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore The books shaping my perspective."
                className="md:px-2"
              />

              <div className="w-40 mx-auto md:mt-0 mt-8">
                <Image src={BookImage} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px]   col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 pt-6 "
                title="My Reads"
                description="Explore The books shaping my perspective."
              />

              <div className="flex mt-6  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none py-0.5 gap-4 animate-marquee-left ">
                  {[...new Array(3)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                      {" "}
                      {toolboxItems.map((item) => (
                        <div
                          key={item.title}
                          className="inline-flex pb-4   items-center gap-4 py-2 border rounded-lg px-4"
                        >
                          <div className="size-8  text-emerald-300 ">
                            {item.icon}
                          </div>

                          <span>{item.title}</span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>{" "}
              </div>
              <div className="flex mt-4  gap-6  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none py-0.5 gap-4 animate-marquee-right ">
                  {[...new Array(6)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                      {" "}
                      {toolboxItems.map((item) => (
                        <div
                          key={item.title}
                          className="inline-flex pb-4    items-center gap-4 py-2 border rounded-lg px-4"
                        >
                          <div className="size-8  text-emerald-300 ">
                            {item.icon}
                          </div>

                          <span>{item.title}</span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>{" "}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:col-span-3">
            <Card className="h-[320px] mt-8 p-0 flex flex-col  w-full col-span-3 lg:col-span-3">
              <CardHeader
                title="My Reads"
                description="Explore The books shaping my perspective."
                className="px-6 py-6"
              />

              <div className="relative flex-1 " ref={constraintRef} >
                {hobies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center absolute gap-2 px-6 bg-gradient-to-t
                 from-emerald-300 to-sky-400 rounded-full py-1.5"
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }} drag

                    dragConstraints={constraintRef}
                    
                  >
                    <span className="font-medium text-gray-950 ">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                  
                ))}
               
              </div>
            </Card>
            <Card className="h-[320px] p-0 mt-8 object-left-top col-span-3 md:col-span-2 lg:col-span-0">
              <Image
                src={MapImage}
                alt="Book cover"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2 w-20 h-20
                     rounded-full bg-gradient-to-r
                      from-emerald-300 to-sky-400 
                            after:content-[''] after:absolute after:inset-0
                       after:outline after:outline-2
                          after:-outline-offset-2 after:rounded-full
                        
                           after:outline-gray-950/30"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r
                      from-emerald-300   animate-ping [animation-duration:2s] to-sky-400  -z-10"
                ></div>
                <Image src={SmileEmoji} alt="Book cover" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
