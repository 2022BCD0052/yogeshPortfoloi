import React, { ComponentPropsWithoutRef } from "react";
 import grainImage from "@/assets/images/grain.jpg"
 import { twMerge } from "tailwind-merge";
const Card = ({className,children,...other}:ComponentPropsWithoutRef<"div">) => {
  return (
    <div
 
      className={twMerge("bg-gray-700/60 border border-gray-600  shadow z-0 rounded-3xl relative  overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:pointer-events-none after:rounded-3xl after:outline-white/20 p-8",className)}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};   

export default Card;
