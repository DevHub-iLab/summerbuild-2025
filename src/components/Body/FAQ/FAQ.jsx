import { useState } from 'react';
import FAQTopic from "./FAQTopic.jsx";
import FAQExt from './FAQExt.jsx';

function FAQ(){

    const [active, setActive] = useState('General');
    const topics = ["General", "Registration", "Resources"];

    const handleClick = (item) => {
        setActive(item);
    };

    return (
        <div id='faq' className="flex flex-col mt-20">
          <h1 className="uppercase justify-center text-center font-bold md:mb-10 sm:mb-7.5 mb-5 md:text-4xl sm:text-3xl text-2xl">
            <span className="text-[#FA6B1C]">frequently </span>
            <span className="text-[#1E1E1E]">asked questions </span>
          </h1>
          <div className="flex w-auto justify-center mx-10">
            {topics.map((topic) => (
              <h1
                key={topic}
                className={`font-semibold md:mb-7.5 sm:mb-5 mb-2.5 md:mx-15 sm:mx-10 mx-5 md:text-[30px] sm:text-[25px] text-[18px] cursor-pointer ${
                  active === topic ? "text-[#1E1E1E]" : "text-[#81BFDA]"
                }`}
                onClick={() => setActive(topic)}
              >
                {topic}
              </h1>
            ))}
          </div>
          <FAQTopic active={active} />
          <FAQExt header="Have a question that is not addressed above?" content="Email devhubilab@e.ntu.edu.sg and have your queries answered!"/>
        </div>
      )
}
export default FAQ