import HTMLLogo from "../assets/htmlIcon.svg";
import ReactLogo from "../assets/reactIcon.svg";
import GitLogo from "../assets/workshops/gitIcon.png";
import ExpressLogo from "../assets/expressIcon.svg"
import TinkerTankerLogo from "../assets/tinkertankerIcon.svg";

export type WorkshopItem = {
  id: number;
  title: string;
  imageSrc: string;
  color?: string;
  date: string;
  time: string;
  location: string;
};

export const workshopPageData: WorkshopItem[] = [
  {
    id: 1,
    title: "HTML/CSS/JS",
    imageSrc: HTMLLogo,
    color: "#FADA7A",
    date: "25 May 2026",
    time: "1 PM – 4 PM",
    location: "NS LT3",
  },
  {
    id: 2,
    title: "React",
    imageSrc: ReactLogo,
    color: "#FADA7A",
    date: "25 May 2026",
    time: "1 PM – 4 PM",
    location: "NS LT3",
  },
  {
    id: 3,
    title: "Express.js",
    imageSrc: ExpressLogo,
    color: "#FADA7A",
    date: "26 May 2026",
    time: "10 AM – 12 PM",
    location: "NS LT6",
  },
  {
    id: 4,
    title: "AI Dev",
    imageSrc: TinkerTankerLogo,
    color: "#FADA7A",
    date: "26 May 2026",
    time: "10 AM – 12 PM",
    location: "NS LT6",
  },
  {
    id: 5,
    title: "Git Control",
    imageSrc: GitLogo,
    color: "#FADA7A",
    date: "26 May 2026",
    time: "1 PM - 4 PM",
    location: "NS LT6",
  },
  
];