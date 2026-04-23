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
  cta?: {
    label: string;
    link: string;
  };
};

export const rekaChallengeData: RekaChallengeSectionData = {
  eyebrow: "Special Track",
  title: "Reka Vision Challenge",
  // subtitle:
  //   "An optional challenge track for teams who want to explore AI-powered solutions in urban contexts using Reka AI APIs.",
  // note: "Participation is optional, but teams joining this track can use these problem areas as starting points while still defining their own scope and approach.",
  subtitle: "In collaboration with Reka, special prizes are up for grabs for teams who leverage Reka's Vision APIs and technologies in creative and impactful ways.",
  note: "You can explore areas like Smart Cities, Transportation, or Security, and experiment with Reka Vision capabilities to build next-generation applications or dashboards. Teams may showcase end-to-end flows, from ingesting video data to generating actionable insights. Full challenge details will be announced soon.",
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
  cta: {
    label: "Find out more",
    link: "https://reka.ai/products/vision", 
  },
};