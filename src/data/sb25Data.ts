import freshmanTeam from "../assets/sb/2025/bestFreshman/bestFreshman.jpg";
import uiuxTeam from "../assets/sb/2025/bestUIUX/bestUIUX.jpg";
import innovativeTeam from "../assets/sb/2025/mostInnovative/mostInnovative.jpg";
import usefulTeam from "../assets/sb/2025/mostUseful/mostUseful.jpg";
export type IconType = "paintbrush" | "flask" | "wrench" | "users";

export type WinnerItem = {
  award: string;
  awardDescription: string;
  teamName: string;
  projectName: string;
  summary: string;
  members: string[];
  images: string[];
  tags: string[];
  color: string;
  winnerLink: string | null;
  iconType: IconType;
};

export const winners: WinnerItem[] = [
  {
    award: "Best UI/UX",
    awardDescription: "Create an intuitive user experience",
    teamName: "Sigma Bytes",
    projectName: "Sigma Bytes Project",
    summary:
      "Sigma Bites is a mobile app that turns food discovery into a fun, swipe-based experience. Using location data, users can browse nearby eateries, swipe to save or skip options, and even decide as a group through collaborative voting. With social features and saved favourites, it makes choosing what to eat faster, easier, and more engaging.",
    members: ["Thum Mun Kuan", "Lee Loong Kiat", "Aye Su Nandar Michelle", "Murali Iniya", "Emeline Riana Sahaya Velanganni"],
    images: [
      uiuxTeam
    ],
    tags: ["UI/UX", "Frontend", "Accessibility"],
    color: "#B1F0F7",
    winnerLink: "https://devpost.com/software/sigma-bytes",
    iconType: "paintbrush",
  },
  {
    award: "Most Innovative",
    awardDescription: "Innovate something completely new",
    teamName: "WaddleWeCookToday",
    projectName: "Finapet",
    summary:
      "FinaPet combines financial education and habit formation into a single gamified platform. By addressing motivational, educational, and emotional barriers, we hope to help users build better financial futures through fun, consistent engagement.",
    members: ["Kelvin Lek", "Toh Kok Soon", "Kyla Hong", "Tee Jia Hong"],
    images: [
      innovativeTeam
    ],
    tags: ["Innovation", "AI", "Product"],
    color: "#FADA7A",
    winnerLink: "https://devpost.com/software/finapet",
    iconType: "flask",
  },
  {
    award: "Most Useful",
    awardDescription: "Build a practical solution.",
    teamName: "Naan Stop",
    projectName: "Reunite",
    summary:
      "ReUnite is an AI-powered lost and found platform designed to modernise NTU’s current system. It allows users to report and search for lost items using both text and image matching, with features like AI-generated descriptions, geolocation tagging, and secure claiming. Built with React, Firebase, and Gemini AI, it also includes notifications and an admin dashboard. The goal is to make lost item recovery faster, more efficient, and scalable beyond NTU in the future.",
    members: ["Aishik Kumar Sarkar", "Thaluri Kavya", "Jeeva Anil", "Timma Ganesh Babu Shivaani", "Amish Venkat"],
    images: [
      usefulTeam
    ],
    tags: ["Utility", "Problem Solving", "Impact"],
    color: "#f7b1c1",
    winnerLink: "https://devpost.com/software/reunite-rna8vw",
    iconType: "wrench",
  },
  {
    award: "Best Freshmen Team",
    awardDescription: "Your entire team are all Year 1 students.",
    teamName: "14_CheckMate",
    projectName: "PlaceIt",
    summary:
      "PlaceIt! is an AR-powered platform that helps users visualise how furniture fits in their space before purchasing. Using 3D reconstruction from videos and augmented reality placement, it allows users to interact with realistic furniture models in their own environment. Built with React, Three.js, WebXR, and a Python photogrammetry pipeline, the project aims to improve buying decisions and expand into a marketplace for furniture vendors.",
    members: ["Wang Daniel", "Tan Wei Yong", "David Zhang Bingshun", "Soh Jun Jie", "Yee Rong Kun"],
    images: [freshmanTeam],
    tags: ["Freshmen", "Collaboration", "Hackathon"],
    color: "#CDEAC0",
    winnerLink: "https://devpost.com/software/placeit-c4t9z5",
    iconType: "users",
  },
];