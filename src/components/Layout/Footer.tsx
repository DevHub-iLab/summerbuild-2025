import { Instagram } from "lucide-react";
import DevHubLogo from "../../assets/devhublogo.svg";
import ILabLogo from "../../assets/ilablogo.svg";

function Footer() {
  return (
    <footer className="mt-5 sm:mt-20 mb-6 flex flex-col items-center gap-6 px-4">
      {/* Brand strip */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
        {/* Made by */}
        <div className="flex flex-col items-center gap-2 text-center sm:text-left">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-black/40">
            Made by
          </p>

          <a
            href="https://devhub.ilabccds.com"
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-300 hover:scale-[1.04]"
          >
            <img
              src={DevHubLogo}
              alt="DevHub Logo"
              className="h-7 w-auto"
            />
          </a>
        </div>

        {/* Divider (desktop only) */}
        <div className="hidden h-6 w-px bg-black/10 sm:block" />

        {/* Supported by */}
        <div className="flex flex-col items-center gap-2 text-center sm:text-left">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-black/40">
            Supported by
          </p>
          <a
            href="https://www.ntu.edu.sg/i-lab"
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-300 hover:scale-[1.04]"
          >
            <img
              src={ILabLogo}
              alt="iLab Logo"
              className="h-8 w-auto transition-transform duration-300 hover:scale-[1.04]"
            />
          </a>
        </div>
      </div>

      {/* Instagram */}
      <div className="flex items-center gap-3">
        <a
          href="https://instagram.com/ntu.devhub"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-black/60 transition-colors hover:text-pink-500"
        >
          <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          
          <span className="text-sm font-medium">
            @ntu.devhub
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;