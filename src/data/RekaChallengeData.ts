export type ChallengeCard = {
  id: number;
  area: string;
  problem: string;
  guidingQuestions: string[];
};

export type RekaChallengeSectionData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
  cards: ChallengeCard[];
};

export const rekaChallengeData: RekaChallengeSectionData = {
  eyebrow: "Special Track",
  title: "Reka AI Smart Cities Challenge",
  // subtitle:
  //   "An optional challenge track for teams who want to explore AI-powered solutions in urban contexts using Reka AI APIs.",
  // note: "Participation is optional, but teams joining this track can use these problem areas as starting points while still defining their own scope and approach.",
  subtitle:
  "In collaboration with Reka AI, special prizes will be awarded to teams that leverage Reka AI APIs and technologies to build impactful, real-world solutions.",
  note: "Full challenge details, including problem statements and judging criteria, are currently being finalised and will be released soon.",
  cards: [
    // {
    //   id: 1,
    //   area: "🚧 Coming Soon",
    //   problem:
    //     "",
    //   guidingQuestions: [],
    // },
    // {
    //   id: 1,
    //   area: "Smart Public Transport & Mobility",
    //   problem:
    //     "Commuters often face uncertainty when planning journeys, from crowded transport to inefficient routes.",
    //   guidingQuestions: [
    //     "What frustrations do commuters face during their journeys?",
    //     "What influences how people choose routes or transport modes?",
    //     "How do needs differ across different users?",
    //   ],
    // },
    // {
    //   id: 2,
    //   area: "Smart Facility / Issue Reporting",
    //   problem:
    //     "Reporting infrastructure or maintenance issues is often slow and unclear, leading to delays in resolution.",
    //   guidingQuestions: [
    //     "What makes issue reporting difficult or inefficient today?",
    //     "Where do breakdowns occur in the process?",
    //     "What would encourage users to report issues more consistently?",
    //   ],
    // },
  ],
};