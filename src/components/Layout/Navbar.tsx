import { useNavigate } from "react-router-dom";

import { useState, useEffect, useRef  } from "react";
import SummerBuild25 from "../../assets/sb25.png";
import SummerBuild25Mobile from "../../assets/sb25mobile.png";

const HIDE_THRESHOLD = 120; // must scroll this far from top before navbar can hide
const SHOW_THRESHOLD = 60; // must scroll up this much before navbar reappears
const SCROLL_DELTA = 8; // ignore tiny accidental scrolls

const Navbar = () => {
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(true); // Tracks visibility
  const [navMobile, setNavMobile] = useState(false);

  const lastScrollY = useRef(0);
  const scrollUpDistance = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // always show near top
      if (currentScrollY <= HIDE_THRESHOLD) {
        setShowNavbar(true);
        scrollUpDistance.current = 0;
        lastScrollY.current = currentScrollY;
        return;
      }

      // ignore very tiny scroll movements
      if (Math.abs(diff) < SCROLL_DELTA) {
        return;
      }

      // scrolling down
      if (diff > 0) {
        scrollUpDistance.current = 0;

        if (currentScrollY > HIDE_THRESHOLD) {
          setShowNavbar(false);
        }
      }

      // scrolling up
      if (diff < 0) {
        scrollUpDistance.current += Math.abs(diff);

        if (scrollUpDistance.current >= SHOW_THRESHOLD) {
          setShowNavbar(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //handle mobileNavbar
  const handleMobileNav = () => {
    setNavMobile(!navMobile);
  };

  return (
    <>
      {/* Desktop Navbar */}
<div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${
          showNavbar
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        <div className="z-50 mt-6 w-full max-w-360 px-16 transition-all duration-300 lg:px-32">
    <nav className="transition-all duration-100">
      <ul className="z-50 mx-auto hidden h-16 items-center justify-center rounded-4xl bg-[#f8f4d8]/80 px-6 py-2 font-bold text-[#323854] drop-shadow-xl backdrop-blur-md md:flex lg:text-2xl">
  <li 
    className="flex w-50 justify-center cursor-pointer transition-all duration-100 hover:underline"
    onClick={() => navigate("/")}
  >
    <img
      src={SummerBuild25}
      alt="SummerBuild Logo"
      className="h-16 w-32 rounded-[3rem] transition-all duration-100 hover:scale-110"
    />
  </li>

  <li 
    className="flex w-55 justify-center text-center cursor-pointer transition-all duration-100 hover:underline" 
    onClick={() => navigate("/previouswinner")}
  >
    Previous Winners
  </li>
  <li 
    className="flex w-55 justify-center text-center cursor-pointer transition-all duration-100 hover:underline"
    onClick={() => navigate("/schedule")}
  >
    Schedule
  </li>
  <li 
    className="flex w-55 justify-center text-center cursor-pointer transition-all duration-100 hover:underline"
    onClick={() => navigate("/workshops")}
  >
    Workshops
  </li>
  {/* <li 
    className="flex w-55 justify-center text-center cursor-pointer transition-all duration-100 hover:underline"
    onClick={() => navigate("/milestone")}
  >
    Milestones
  </li> */}
  <li 
    className="flex w-55 justify-center text-center cursor-pointer transition-all duration-100 hover:underline"
    onClick={() => navigate("/FAQ")}
  >
    FAQ
  </li>
</ul>
    </nav>
  </div>
</div>
      {/* Mobile Navbar */}
      <div
        className={`top-0 z-50 flex w-full justify-center py-2 transition-all duration-300`}
      >
        <div
          className={`flex w-[80%] flex-col items-center justify-start rounded-xl bg-[#f8f4d8]/80 p-2 shadow-lg backdrop-blur-md transition-all duration-300 md:hidden`}
        >
          {/* Mobile Menu Icon (Toggles Menu) */}
          <div onClick={handleMobileNav} className="cursor-pointer">
            <img
              src={SummerBuild25Mobile}
              alt="SummerBuild Logo"
              className="z-2 h-8 w-24"
            />
          </div>

          {/* Menu Items (Shown Only When navMobile is True) */}
          <div
            className={`transform overflow-hidden transition-all duration-500 ease-in-out ${
              navMobile
                ? "max-h-125 scale-y-100 opacity-100"
                : "max-h-0 scale-y-0 opacity-0"
            }`}
          >
            <ul className="mt-2 text-center text-lg font-bold text-[#FA6B1C] sm:text-xl md:text-2xl">
              <li
                className="cursor-pointer py-2"
                onClick={() => {
                  navigate("/");
                  setNavMobile(false);
                }}
              >
                Home
              </li>
              <li
                className="cursor-pointer py-2"
                onClick={() => {
                  navigate("/previouswinner");
                  setNavMobile(false);
                }}
              >
                Previous Winners
              </li>
              <li
                className="cursor-pointer py-2"
                onClick={() => {
                  navigate("/schedule");
                  setNavMobile(false);
                }}
              >
                Schedule
              </li>
              
              {/* <li
                className="cursor-pointer py-2"
                onClick={() => {
                  navigate("/milestone");
                  setNavMobile(false);
                }}
              >
              Milestone

              </li> */}
              <li
                className="cursor-pointer py-2"
                onClick={() => {
                  navigate("/schedule");
                  setNavMobile(false);
                }}
              >
                Schedule
              </li>
              <li
                className="cursor-pointer py-2"
                onClick={() => {
                  navigate("/workshops");
                  setNavMobile(false);
                }}
              >
                Workshops
              </li>
              <li
                className="cursor-pointer py-2"
                onClick={() => {
                  navigate("/FAQ");
                  setNavMobile(false);
                }}
              >
                FAQ
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
