import React, { useState, useEffect } from "react"
import { IoIosMenu, IoMdClose } from "react-icons/io"
import SummerBuild25 from "../../assets/sb25.png"
import SummerBuild25Mobile from "../../assets/sb25mobile.png"


function NewNav() {
    const [navbar, setNavbar] = useState(false) // Tracks background change
    const [showNavbar, setShowNavbar] = useState(true) // Tracks visibility
    const [prevScrollPos, setPrevScrollPos] = useState(0) // Stores previous Y position
    const [navMobile, setNavMobile] = useState(false)

    //scroll smooth flow
    const scrollToSection = id => {
        const element = document.getElementById(id)
        if (element) {
            const offsetY = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition =
                elementPosition + window.pageYOffset - offsetY

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }

        setNavMobile(false)
    }

    //sticky navBar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY

            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollPos > prevScrollPos) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }

            // Change background when scrolled past 20px
            setNavbar(currentScrollPos >= 20)
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [prevScrollPos])

    //handle mobileNavbar
    const handleMobileNav = () => {
        setNavMobile(!navMobile)
    }

    return (
        <>
            <svg
                class="absolute z-[-1] h-auto w-auto"
                viewBox="10 150 1440 1440">
                <path
                    d="M109.474 347.754C66.984 350.169 21.4949 328.709 9.13968e-06 308.962L4.67713e-05 0.000244141L2093 0.000375473L2093 359.887C1918.04 373.19 1932.98 320.479 1848.5 320.479C1795.51 318.608 1724.39 349.444 1649.61 359.887C1547.51 374.144 1459.75 317.19 1385.5 312.225C1276.03 304.903 1318.19 323.927 1231.21 327.668C1180.22 328.084 1153.72 325.589 1091.74 327.668C988.264 327.668 1021.95 366.01 828.5 371C714.629 371 637 357 494.5 384C368.5 363.807 388.686 308.962 336.92 308.962C249.44 308.962 151.964 345.338 109.474 347.754Z"
                    fill="#B2E1F2"
                    stroke="#fff"
                    strokeWidth={4}
                />
                <path
                    d="M128.469 294.757C81.632 304.804 41.7894 290.878 5.17208e-06 277.537L3.8976e-05 0.00012207L2093 0.000253402C2093 0.000253402 2072.06 207.765 2093 231.757L2093 314.542C2036.1 336.573 1991.36 285.381 1916.5 276.573C1850.31 268.785 1828.84 273.021 1760.58 276.573C1686.48 280.427 1670.47 242.734 1596 240.398C1530.75 238.35 1516.81 285.927 1471.5 266.333C1432.77 249.586 1419.2 244.116 1364 240.398C1294.57 235.721 1300.75 278.032 1230.5 276.573C1186.09 275.65 1138.64 269.863 1095 266.333C1016.58 259.989 1034.64 304.314 956.272 297.87C902.838 293.476 892.906 270.347 839.3 266.333C752.38 259.824 729.012 309.169 640.847 311.356C503.346 314.766 480.606 202.79 360.414 230.719C309.41 242.571 330.559 267.287 272.435 269.86C232.621 271.622 216.649 247.855 178.457 252.846C136.488 258.331 167.559 286.373 128.469 294.757Z"
                    fill="#8EDCF9"
                    stroke="#fff"
                    strokeWidth={3}
                    strokeOpacity={0.8}
                />
                <path
                    d="M125 148.629C80.6639 135.977 44.8535 153.071 1.19201e-05 141.099L2.52792e-05 -0.000183105L2093 0.000107918L2093 267C1972.34 267.207 2020.84 153.629 1904 171.78C1816.67 185.347 1824.69 123.07 1734.5 123.5C1640.47 123.948 1589.18 180.957 1505.5 155.129C1417.14 127.857 1382.93 85.6217 1297 115.584C1241.67 134.876 1204.09 124.377 1146.5 141.099C1020.5 177.688 1003.26 134.232 888.5 141.099C795.115 146.687 782.794 222.683 689 224.531C579.829 226.682 554.999 145.364 446 141.099C346.582 137.209 296.422 218.403 206 193.206C167.113 182.37 163.721 159.678 125 148.629Z"
                    fill="#66DAFB"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeOpacity={0.4}
                />
            </svg>

            {/* Desktop Navbar */}
            <div className="flex max-w-full justify-center">
                <div
                    className={`max-w[90rem] md:max-w[70rem] fixed z-50 m-auto mt-6 w-full px-[4rem] transition-all duration-300 lg:px-[8rem]`}>
                    <nav
                        className={`drop-shadow-xl backdrop-blur-md transition-all duration-100`}>
                        <ul
                            className={`text[1rem] z-50 mx-auto hidden h-[4rem] items-center justify-around rounded-4xl bg-[#f8f4d8]/80 py-2 pr-4 font-bold text-[#323854] md:flex lg:text-[1.5rem] ${showNavbar ? "" : ""}`}>
                            <li
                                className="cursor-pointer transition-all duration-100 hover:underline"
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }>
                                <img
                                    src={SummerBuild25}
                                    alt="SummerBuild Logo"
                                    className="z-2 h-[4rem] w-[8rem] rounded-[3rem] transition-all duration-100 hover:scale-110"
                                />
                            </li>
                            <li
                                className="cursor-pointer transition-all duration-100 hover:underline"
                                onClick={() => scrollToSection("achievements")}>
                                Achievements
                            </li>
                            <li
                                className="cursor-pointer transition-all duration-100 hover:underline"
                                onClick={() => scrollToSection("schedule")}>
                                Schedule
                            </li>

                            <li
                                className="cursor-pointer transition-all duration-100 hover:underline"
                                onClick={() => scrollToSection("workshop")}>
                                Workshops
                            </li>
                            <li
                                className="cursor-pointer transition-all duration-100 hover:underline"
                                onClick={() => scrollToSection("faq")}>
                                FAQ
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Mobile Navbar */}
            <div
                className={`fixed top-0 z-50 flex w-full justify-center py-2 transition-all duration-300`}>
                <div
                    className={`flex w-[80%] flex-col items-center justify-start rounded-lg bg-[#f8f4d8]/80 p-2 shadow-lg backdrop-blur-md transition-all duration-300 md:hidden`}>
                    {/* Mobile Menu Icon (Toggles Menu) */}
                    <div onClick={handleMobileNav} className="cursor-pointer">
                        <img
                            src={SummerBuild25Mobile}
                            alt="SummerBuild Logo"
                            className="z-2 h-[2rem] w-full"
                        />
                    </div>

                    {/* Menu Items (Shown Only When navMobile is True) */}
                    <div
                        className={`transform overflow-hidden transition-all duration-500 ease-in-out ${
                            navMobile
                                ? "max-h-[500px] scale-y-100 opacity-100"
                                : "max-h-0 scale-y-0 opacity-0"
                        }`}>
                        <ul className="mt-2 text-center text-lg font-bold text-[#FA6B1C] sm:text-xl md:text-2xl">
                            <li
                                className="cursor-pointer py-2"
                                onClick={() => {
                                    scrollToSection("achievements")
                                    setNavMobile(false)
                                }}>
                                Achievements
                            </li>
                            <li
                                className="cursor-pointer py-2"
                                onClick={() => {
                                    scrollToSection("schedule")
                                    setNavMobile(false)
                                }}>
                                Schedule
                            </li>
                            <li
                                className="cursor-pointer py-2"
                                onClick={() => {
                                    scrollToSection("workshop")
                                    setNavMobile(false)
                                }}>
                                Workshops
                            </li>
                            <li
                                className="cursor-pointer py-2"
                                onClick={() => {
                                    scrollToSection("faq")
                                    setNavMobile(false)
                                }}>
                                FAQ
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewNav
