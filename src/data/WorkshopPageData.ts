import HTMLLogo from "../assets/htmlIcon.svg";
import ReactLogo from "../assets/reactIcon.svg";
import GitLogo from "../assets/gitIcon.png";
import TinkerTankerLogo from "../assets/tinkertankerIcon.svg";

export type WorkshopItem = {
  id: number;
  title: string;
  imageSrc: string;
  color?: string;
};

export const workshopPageData: WorkshopItem[] = [
  {
    id: 1,
    title: "HTML/CSS/JS Workshop",
    imageSrc: HTMLLogo,
    color: "#FADA7A",
  },
  {
    id: 2,
    title: "React Workshop",
    imageSrc: ReactLogo,
    color: "#FADA7A",
  },
  {
    id: 3,
    title: "AI Dev Workshop",
    imageSrc: TinkerTankerLogo,
    color: "#FADA7A",
  },
  {
    id: 4,
    title: "Git Control Workshop",
    imageSrc: GitLogo,
    color: "#FADA7A",
  },
  
];