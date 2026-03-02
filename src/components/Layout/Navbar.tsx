import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import SummerBuild25 from "../../assets/sb25.png";
import SummerBuild25Mobile from "../../assets/sb25mobile.png";

const Navbar = () => {
  const navigate = useNavigate();

  //const [navbar, setNavbar] = useState(false) // Tracks background change
  const [showNavbar, setShowNavbar] = useState(true); // Tracks visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Stores previous Y position
  const [navMobile, setNavMobile] = useState(false);

  //scroll smooth flow
  //const scrollToSection = (id : string) => {
  //    const element = document.getElementById(id)
  //    if (element) {
  //        const offsetY = 80
  //        const elementPosition = element.getBoundingClientRect().top
  //        const offsetPosition =
  //            elementPosition + window.pageYOffset - offsetY

  //        window.scrollTo({
  //            top: offsetPosition,
  //            behavior: "smooth",
  //        })
  //    }

  //    setNavMobile(false)
  //}

  //sticky navBar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollPos > prevScrollPos) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // Change background when scrolled past 20px
      //setNavbar(currentScrollPos >= 20)
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  //handle mobileNavbar
  const handleMobileNav = () => {
    setNavMobile(!navMobile);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="flex max-w-full justify-center">
        <div
          className={`max-w[90rem] md:max-w[70rem]  z-50 m-auto mt-6 w-full px-[4rem] transition-all duration-300 lg:px-[8rem]`}
        >
          <nav className={`transition-all duration-100`}>
            <ul
              className={`text[1rem] z-50 mx-auto hidden h-[4rem] items-center justify-around rounded-4xl bg-[#f8f4d8]/80 py-2 pr-4 font-bold text-[#323854] drop-shadow-xl backdrop-blur-md md:flex lg:text-[1.5rem] ${showNavbar ? "" : ""}`}
            >
              <li
                className="cursor-pointer transition-all duration-100 hover:underline"
                onClick={() => navigate("/")}
              >
                <img
                  src={SummerBuild25}
                  alt="SummerBuild Logo"
                  className="z-2 h-[4rem] w-[8rem] rounded-[3rem] transition-all duration-100 hover:scale-110"
                />
              </li>
              <li
                className="cursor-pointer transition-all duration-100 hover:underline"
                onClick={() => navigate("/previouswinner")}
              >
                Previous Winners
              </li>
              <li
                className="cursor-pointer transition-all duration-100 hover:underline"
                onClick={() => navigate("/schedule")}
              >
                Schedule
              </li>

              <li
                className="cursor-pointer transition-all duration-100 hover:underline"
                onClick={() => navigate("/milestone")}
              >
                Milestone
              </li>

              <li
                className="cursor-pointer transition-all duration-100 hover:underline"
                onClick={() => navigate("/workshops")}
              >
                Workshops
              </li>
              <li
                className="cursor-pointer transition-all duration-100 hover:underline"
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
        className={`fixed top-0 z-50 flex w-full justify-center py-2 transition-all duration-300`}
      >
        <div
          className={`flex w-[80%] flex-col items-center justify-start rounded-xl bg-[#f8f4d8]/80 p-2 shadow-lg backdrop-blur-md transition-all duration-300 md:hidden`}
        >
          {/* Mobile Menu Icon (Toggles Menu) */}
          <div onClick={handleMobileNav} className="cursor-pointer">
            <img
              src={SummerBuild25Mobile}
              alt="SummerBuild Logo"
              className="z-2 h-[2rem] w-[6rem]"
            />
          </div>

          {/* Menu Items (Shown Only When navMobile is True) */}
          <div
            className={`transform overflow-hidden transition-all duration-500 ease-in-out ${
              navMobile
                ? "max-h-[500px] scale-y-100 opacity-100"
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
