import ArrowIcon from "@/assets/icons/arrow-up-right.svg"
const FooterLink = [
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "Facebook",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "GitHub",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/25
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10
      ">

      </div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col gap-6 items-center md:flex-row md:justify-between">
          <div className="text-white/40">@copy;. All right reserved</div>
          <nav className="flex flex-col items-center gap-5 md:flex-row lg:md:flex-row">
            {FooterLink.map((item, index) => (
              <a className="inline-flex items-center gap-2" key={index} href={item.href}>
                <span className="font-semibold">{item.title}</span>
                <ArrowIcon className="size-4"/>
                
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
