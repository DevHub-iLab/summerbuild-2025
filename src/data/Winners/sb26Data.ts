import type { WinnerItem } from "./winnerData"
import ClareTan from "../../assets/sb/2026/ClareTan.jpg"
import FiveMusketeers from "../../assets/sb/2026/5Musketeers.jpg"
import abc from "../../assets/sb/2026/abc.jpg"
import CodeBlooded from "../../assets/sb/2026/CodeBlooded.jpg"
import Omega from "../../assets/sb/2026/Omega.jpg"
import MeowMeow from "../../assets/sb/2026/MeowMeow.jpg"
import SunsettersReka from "../../assets/sb/2026/SunsettersReka.jpg"
import SummerbuildBros from "../../assets/sb/2026/Summerbuild Bros.jpg"
import LockedInForThis from "../../assets/sb/2026/LockedInForThis.jpg"
import SunsettersChampion from "../../assets/sb/2026/SunsettersChampion.jpg"

type SB26WinnersData = {
    mainAwards: {
        champion?: WinnerItem
        firstRunnerUp?: WinnerItem
        secondRunnerUp?: WinnerItem
    }
    specialAwards: WinnerItem[]
    rekaAwards: WinnerItem[]
}

export const sb26WinnersData: SB26WinnersData = {
    mainAwards: {
        champion: {
            award: "Champion",
            teamName: "Sunsetters",
            projectName: "Pilly",
            summary:
                "Pilly is an AI pharmacy assistant that streamlines medication dispensing while improving patient visibility during long pharmacy waits. It helps pharmacists verify medications, count pills, manage queues, capture delay reasons, and send reminders, while patients can track their queue, receive real-time updates, scan medication labels, view instructions in multiple languages, and ask an AI chatbot medication-related questions. The platform aims to reduce errors, ease pharmacist workload, and make pharmacy collection more transparent, accessible, and patient-friendly.",
            members: [
                "Chong Kai Ying",
                "Tan Shu Yi, Stefanie",
                "Ho Shi Yu",
                "Chen Jia Wei",
                "Tan Zi Xuan",
            ],
            images: [SunsettersChampion],
            color: "#FADA7A",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054126-sunsetters-pilly?_gl=1*b97ktb*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0Nzk4JGo2MCRsMCRoMA..",
            iconType: "trophy",
        },
        firstRunnerUp: {
            award: "1st Runner-Up",
            teamName: "LockedInForThis",
            projectName: "Steve",
            summary:
                "STEVE is a mobile photography assistant designed to help users take better, more aesthetic photos during dates or outings. The app guides the photographer on angles, framing, and composition, while also helping the person being photographed adjust their pose through simple, real-time feedback. With an inclusive silhouette-based interface, AI-generated guidance, and plans for moodboard-based styling, pose expansion, and smarter camera adjustments, STEVE turns casual photo-taking into a guided, confidence-boosting experience.",
            members: [
                "Lee Kok Peng",
                "Chow Kwok Yao",
                "Marcus Yeong Mun Hong",
                "Cheong Yang Ming Chaoton",
            ],
            images: [LockedInForThis],
            color: "#D9D9D9",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054557-steve?_gl=1*45zr35*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0ODIyJGozNiRsMCRoMA..",
            iconType: "medal",
        },
        secondRunnerUp: {
            award: "2nd Runner-Up",
            teamName: "Summerbuild Bros",
            projectName: "RecycleRight",
            summary:
                "RecycleRight is a recycling companion that helps Singaporeans make better recycling decisions from home to drop-off. Users can scan an item to find out whether it can be recycled, understand why, and learn what steps to take before placing it in the bin. The app also helps users find nearby recycling points and encourages communities to recycle more responsibly through friendly neighbourhood challenges. By making recycling rules easier to understand and act on, RecycleRight aims to reduce contamination in blue bins and support a cleaner, more sustainable Singapore.",
            members: ["Sim Hua An David", "Chan Weibin", "Bryan Lee Chong Han"],
            images: [SummerbuildBros],

            color: "#B1F0F7",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054187-summerbuild-bros-recycleright?_gl=1*8xw9x1*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0ODMzJGoyNSRsMCRoMA..",
            iconType: "award",
        },
    },
    rekaAwards: [
        {
            award: "Best Use of Reka AI",
            teamName: "Sunsetters",
            projectName: "Pilly",
            summary:
                "Pilly is an AI-powered pharmacy assistant that improves medication collection for both pharmacists and patients. The team used Reka AI to power medication-scanning features, helping extract and interpret medication label information so users can receive clearer guidance and pharmacists can rely on an added verification layer. Combined with live queue updates, delay notifications, reminders, and multilingual support, Pilly makes pharmacy collection safer, clearer, and more accessible.",
            members: [
                "Chong Kai Ying",
                "Tan Shu Yi, Stefanie",
                "Ho Shi Yu",
                "Chen Jia Wei",
                "Tan Zi Xuan",
            ],
            images: [SunsettersReka],
            color: "#FDBA74",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054126-sunsetters-pilly?_gl=1*b97ktb*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0Nzk4JGo2MCRsMCRoMA..",
            iconType: "sparkles",
        },
        {
            award: "Best Smart Cities Solution",
            teamName: "MeowMeow",
            projectName: "AuraSight",
            summary:
                "AuraSight is an accessibility companion designed to help visually impaired users navigate cities with greater confidence and independence. Worn using a lanyard-mounted phone, it uses Reka AI to understand the user’s surroundings and detect potential head-level hazards, such as low barriers, construction obstacles, or sudden street obstructions. Instead of requiring users to constantly check their phone, AuraSight provides hands-free audio warnings and voice controls, making urban navigation safer and less stressful. As the winner of Best Smart Cities Solution, AuraSight shows how AI can make public spaces more inclusive by giving visually impaired pedestrians an added layer of real-time awareness and protection.",
            members: [
                "Mohamad Danial Bin Hasani",
                "Law Yu Xiang",
                "Ethan Isaac Silfanus",
                "Cha Heng Ping",
            ],
            images: [MeowMeow],
            color: "#FCD34D",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054540-meowmeow-aurasight?_gl=1*el78j3*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0ODQ1JGoxMyRsMCRoMA..",
            iconType: "city",
        },
    ],
    specialAwards: [
        {
            award: "Best UI/UX Design",
            teamName: "ClareTan",
            projectName: "styleAI",
            summary:
                "styleAI is an AI-powered fashion assistant that helps users discover outfits that suit their appearance, preferences, and occasions. Users can upload selfies, wardrobe pieces, and inspiration images to receive personalised styling suggestions that consider their event, personal style, and Singapore’s warm climate. The platform also lets users preview outfit ideas visually before deciding what to wear, making styling more convenient and confidence-boosting. By combining personalised recommendations with wardrobe organisation and visual try-on support, styleAI helps users make better outfit choices with less guesswork.",
            members: [
                "Tan Soon Kang",
                "Hou Yunzhe Kelvin",
                "Liow Zi Hao Samuel",
                "",
            ],
            images: [ClareTan],
            color: "#FFB3B3",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054492-claretan-styleai?_gl=1*xv6sme*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0ODU3JGoxJGwwJGgw",
            iconType: "palette",
        },
        {
            award: "Best AI Integration",
            teamName: "5 Musketeers :))",
            projectName: "Dora",
            summary:
                "Dora is an AI travel companion that makes exploring unfamiliar cities easier and more intuitive. It simplifies public transport directions, translates signs and text, explains cultural context, and helps travellers understand their surroundings beyond literal information. The team used Reka AI for visual understanding, translation, and contextual interpretation, allowing Dora to provide travel guidance that feels practical, personalised, and human-friendly. As the winner of Best AI Integration, Dora shows how AI can turn scattered travel information into a smoother and more meaningful travel experience.",
            members: [
                "Prakriti Muralidharan",
                "Vinayagasubramanian Lakshmisurya",
                "Pasumarthy Srihitha",
                "Thaluri Kavya",
                "Raja Latchiya Dhurga",
            ],
            images: [FiveMusketeers],
            color: "#CDEAC0",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054159-dora?_gl=1*17a3pul*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0ODcwJGo2MCRsMCRoMA..",
            iconType: "bot",
        },
        {
            award: "Most Innovative",
            teamName: "abc",
            projectName: "FraudNot",
            summary:
                "FraudNot is a scam-detection assistant built directly into Telegram, making it easy for users to check suspicious messages, screenshots, or voice notes in a familiar platform. Instead of giving a simple yes-or-no answer, FraudNot analyses the content against real Singapore scam patterns and returns a clear verdict, confidence level, scam type, warning signs, and recommended next steps. It can also help users draft a police report, reducing the friction of taking action after encountering a possible scam. As the winner of Most Innovative, FraudNot stands out for turning scam awareness into a practical, accessible, and action-oriented tool that helps users respond faster and with greater confidence.",
            members: ["Lim Hong Shun", "Law Yan Heng "],
            images: [abc],
            color: "#FFC6D9",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1053775-abc-fraudnot?_gl=1*hyu7o*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0ODk4JGozMiRsMCRoMA..",
            iconType: "lightbulb",
        },
        {
            award: "Best Freshmen",
            teamName: "CodeBlooded",
            projectName: "SeeAhead",
            summary:
                "SeeAhead is an AI-powered social navigation app designed to support autistic, ADHD, and anxious individuals in everyday situations that may feel confusing or overwhelming. Users can point their camera at a scene and receive a calm, plain-language explanation of what is happening, including the mood of the space, possible social cues, what to expect next, and any sensory challenges to be aware of. The team used Reka AI to help interpret real-world scenes and provide guidance that is clear, literal, and non-judgemental. With features such as check-ins, breathing support, and quick access to trusted contacts, SeeAhead helps users feel more prepared, reassured, and independent in unfamiliar or stressful environments.",
            members: [
                "Sooraj Senthil",
                "S. Arun Karthick",
                "Kalimullakhan Ashvak",
            ],
            images: [CodeBlooded],
            color: "#D6E6FF",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054353-seeahead?_gl=1*1qar4zz*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0OTA4JGoyMiRsMCRoMA..",
            iconType: "graduation",
        },
        {
            award: "People’s Choice",
            teamName: "Omega",
            projectName: "Overgrown",
            summary:
                "Overgrown is a screen-time companion that helps teens and young adults reduce doomscrolling in a gentler and more encouraging way. Instead of suddenly cutting users off or showing harsh reminders, the app uses flowers that slowly grow on screen to make users more aware of how long they have been scrolling. When users step away from social media, they are rewarded through streaks, unlockable flower designs, and a friends system that encourages healthier habits together. By turning screen-time control into a calmer and more positive experience, Overgrown helps users disengage from social media without guilt and build better digital habits over time.",
            members: [
                "Goh Chun Sheng",
                "Lim Ee Than",
                "Asha Meredith Solomon",
                "Kothari Kashvi Chintan",
                "Ty Neo Yi-Xin",
            ],
            images: [Omega],
            color: "#E7D6FF",
            winnerLink:
                "https://summerbuild-2026.devpost.com/submissions/1054182-omega-overgrown?_gl=1*10wdnto*_gcl_au*MTcxMjc4OTQyOS4xNzc0NDk2NDU3*_ga*MTY4ODQ3MzU5My4xNzc0NDk2NDU3*_ga_0YHJK3Y10M*czE3ODIxODM4MjckbzgxJGcxJHQxNzgyMTg0OTE4JGoxMiRsMCRoMA..",
            iconType: "heart",
        },
    ],
}
