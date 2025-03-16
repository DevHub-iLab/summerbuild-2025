import React, { useState, useEffect } from 'react';
import { IoIosMenu, IoMdClose } from "react-icons/io";
import logo from "../../assets/icon.png";

function NewNav() {
    const [navbar, setNavbar] = useState(false) // Tracks background change
    const [showNavbar, setShowNavbar] = useState(true) // Tracks visibility
    const [prevScrollPos, setPrevScrollPos] = useState(0) // Stores previous Y position
    const [navMobile, setNavMobile] = useState(false)

    //scroll smooth flow
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      setNavMobile(false)
    };

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
          setNavbar(currentScrollPos >= 20);
          setPrevScrollPos(currentScrollPos);
      };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    //handle mobileNavbar
    const handleMobileNav = () => {
        setNavMobile(!navMobile)
    }
  
    return (
      <>
        <svg class="absolute top-0 left-0 w-auto h-auto z-[-1]" viewBox="0 0 1440 320">
            <path fill="#f8f4d8" fill-opacity="1" d="M0,160L17.1,154.7C34.3,149,69,139,103,128C137.1,117,171,107,206,122.7C240,139,274,181,309,218.7C342.9,256,377,288,
            411,288C445.7,288,480,256,514,229.3C548.6,203,583,181,617,181.3C651.4,181,686,203,720,213.3C754.3,224,789,224,823,208C857.1,192,891,160,926,160C960,160,994,
            192,1029,186.7C1062.9,181,1097,139,1131,112C1165.7,85,1200,75,1234,85.3C1268.6,96,1303,128,1337,160C1371.4,192,1406,224,1423,240L1440,256L1440,0L1422.9,0C1405.7,
            0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,
            0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>
        </svg>

        {/* Desktop Navbar */}
        <div className={`fixed top-0 w-full z-50 transition-transform duration-300 
        ${showNavbar ? "translate-y-0" : "-translate-y-full" }`}>
            <nav className={`transition-all duration-100 
            ${navbar ? 'bg-[#f8f4d8] shadow-md' : 'bg-transparent'}`}>
            <ul className="hidden md:flex z-50 md: justify-around items-center h-24 max-w-[1240px] font-bold mx-auto px-4 text-[#FA6B1C] md:text-2xl sm:text-xl text-lg">
              <li className="pt-4 cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
              <li className="pt-4 cursor-pointer" onClick={() => scrollToSection('schedule')}>Schedule</li>
              <li className="pt-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <img src={logo} alt="Logo" className="h-20 w-auto" />
                  </li>
              <li className="pt-4 cursor-pointer" onClick={() => scrollToSection('workshop')}>Workshops</li>
              <li className="pt-4 cursor-pointer" onClick={() => scrollToSection('faq')}>FAQ</li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className={`fixed top-0 w-full z-50 transition-transform duration-300 
            ${showNavbar ? "translate-y-0" : "-translate-y-full" }`}>
            <div className={`transition-all duration-100 ${navMobile || navbar ? 'bg-[#f8f4d8] shadow-md' : 'bg-transparent'} 
            p-5 flex flex-col justify-start items-center w-full md:hidden`}>
                {/* Mobile Menu Icon (Toggles Menu) */}
                <div onClick={handleMobileNav} className='cursor-pointer'>
                    {navMobile ? (
                        <IoMdClose className='text-[#FA6B1C]' size={30}/>
                    ) : (
                        <IoIosMenu className='text-[#FA6B1C]' size={30}/>
                    )}
                </div>

                {/* Menu Items (Shown Only When navMobile is True) */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden transform 
                ${navMobile ? 'max-h-[500px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'}`}>
                    <ul className="font-bold text-[#FA6B1C] md:text-2xl sm:text-xl text-lg text-center mt-5">
                        <li className="py-5 cursor-pointer" onClick={() => { scrollToSection('about'); setNavMobile(false); }}>About</li>
                        <li className="py-5 cursor-pointer" onClick={() => { scrollToSection('schedule'); setNavMobile(false); }}>Schedule</li>
                        <li className="py-5 cursor-pointer" onClick={() => { scrollToSection('workshop'); setNavMobile(false); }}>Workshops</li>
                        <li className="py-5 cursor-pointer" onClick={() => { scrollToSection('faq'); setNavMobile(false); }}>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>

      </>
    );
  }
  
  export default NewNav;