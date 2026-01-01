import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { TextAlignJustify } from "lucide-react";

import SummerBuild25 from "../../assets/sb25.png";
//import SummerBuild25Mobile from "../../assets/sb25mobile.png"

export default function Sidebar() {
  const [sideBar, toggleSideBar] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex  h-full items-center  fixed z-10">
        <div className="absolute z-100 max-w-fit rounded-4xl bg-[#f8f4d8]/80  py-2 px-2  ml-4 font-bold text-[#323854] drop-shadow-xl backdrop-blur-md md:flex lg:text-[1.5rem] hover:bg-[#ffffff]/40">
          <TextAlignJustify
            className="transition-all duration-100 hover:scale-110 "
            onClick={() => {
              toggleSideBar(!sideBar);
            }}
          />
        </div>
        {sideBar ? (
          <div className="flex flex-col rounded-4xl bg-[#f8f4d8]/80 py-4 px-10  ml-4 font-bold text-[#323854] drop-shadow-xl backdrop-blur-md md:flex lg:text-[1.5rem] gap-4">
            <div className="flex max-w-full justify-center">
              <img
                src={SummerBuild25}
                alt="SummerBuild Logo"
                className="z-2 h-[4rem]  rounded-[3rem] max-w-fit transition-all duration-100 hover:scale-110"
              />
            </div>

            <button
              className="cursor-pointer transition-all duration-100 hover:underline"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="cursor-pointer transition-all duration-100 hover:underline"
              onClick={() => navigate("/previouswinner")}
            >
              Previous Winners
            </button>
            <button
              className="cursor-pointer transition-all duration-100 hover:underline"
              onClick={() => navigate("/schedule")}
            >
              Schedule
            </button>
            <button
              className="cursor-pointer transition-all duration-100 hover:underline"
              onClick={() => navigate("/workshops")}
            >
              Workshops
            </button>
            <button
              className="cursor-pointer transition-all duration-100 hover:underline"
              onClick={() => navigate("/FAQ")}
            >
              FAQ
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
  {
    /*

            <button onClick={
                   () => { 
               toggleSideBar(!sideBar) 
               console.log(sideBar)
                   }
            }> 

            TestingTestingTestingTestingTestingTestingTestingTestingTesting
            TestingTestingTestingTestingTestingTestingTestingTestingTesting
            TestingTestingTestingTestingTestingTestingTestingTestingTesting
            TestingTestingTestingTestingTestingTestingTestingTestingTesting
            TestingTestingTestingTestingTestingTestingTestingTestingTesting
            </button>
            */
  }

  {
    /*
            {  sideBar ? (
                <div>
                    Hidden Stuff
                </div>
            ) : (

                <div>
                    Nothing is here                

            TestingTestingTestingTestingTestingTestingTestingTestingTesting
                </div>

            )


            }
            */
  }
}
