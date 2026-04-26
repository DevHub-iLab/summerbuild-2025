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
  highlights: {
    title: string;
    description: string;
  }[];
  cards: ChallengeCard[];
  cta?: {
    label: string;
    link: string;
  };
};

export const rekaChallengeData: RekaChallengeSectionData = {
  eyebrow: "Special Track",
  title: "Reka Vision Challenge",
  subtitle:
    "In collaboration with Reka, special prizes are up for grabs for teams who leverage Reka Vision APIs and technologies in creative and impactful ways.",
  highlights: [
    {
      title: "Build with Reka Vision",
      description:
        "Create AI-driven applications or dashboards using Reka Vision capabilities.",
    },
    {
      title: "Show end-to-end impact",
      description:
        "Showcase flows from processing video inputs to generating actionable insights.",
    },
    {
      title: "Win dedicated awards",
      description:
        "Eligible teams can compete for Best Use of Reka AI and Best Smart Cities Solution.",
    },
  ],
  cards: [],
  cta: {
    label: "Find out more",
    link: "https://reka.ai/products/vision",
  },
};