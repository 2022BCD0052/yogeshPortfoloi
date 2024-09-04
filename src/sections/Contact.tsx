/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import ArrowUpRighticon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-300 text-gray-900 items-center
            text-center overflow-hidden py-8 px-10 rounded-3xl md:text-left  "
        >
          <div
            className="absolute inset-0 opacity-5 z-100"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          >
            {" "}
          </div>
          <div className="flex flex-col md:gap-16 gap-8 md:flex-row items-center">
            <div>
              <h2 className="font-serif font-semibold text-2xl md:text-3xl">
                let's create something amazing together
              </h2>
              <p className="mt-2 text-sm md:text-base">
                We'd love to hear from you. Let's connect and create something
                extraordinary together.
              </p>
            </div>
            <div>
              <Link href={""}>
                <button className="text-white w-max bg-gray-900 border shadow border-gray-950 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRighticon className="size-4" />
                </button>
              </Link>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
