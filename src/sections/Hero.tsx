import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 reative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 animate-ping"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
    
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="laptop" />

          <div className="bg-gray-950 border-gray-800 px-4 py-1.5  flex items-center gap-4 rounded-lg">
            <div
              className="bg-green-500 size-2.5 rounded-full
                            relative"
            >
              <div className="bg-green-800 absolute rounded-full inset-0 animate-ping"></div>
            </div>
            <div className="text-sm font-medium">Available for new Project</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiance
          </h1>
          <p className="mt-4 text-center text-white/60  md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sodales, ipsum non facilisis lobortis, arcu enim fermentum nulla, ut
            hendrerit mi arcu at velit. Donec at orci ac neque fermentum
            consectetur.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-center items-center  mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore MY work</span>
            <ArrowDown className="size-4" />
          </button>

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👏</span>
            <span className="font-semibold">Get in Touch</span>
          </button>
        </div>
      </div>
    </div>
  );
};
