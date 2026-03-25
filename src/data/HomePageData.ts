import SummerBuildGraphic from "../assets/summerbuildgraphic.png";

export const HomePageElements = {
  summerbuild: {
    pengi: {
      src: SummerBuildGraphic,
      alt: "SummerBuild Graphic"
    },
    title: {
      prefix: "Summer",
      highlight: "Build"
    },
    description: {
      prefix: "A 4-week program by",
      link: {
        text: "DevHub",
        url: "https://devhub.ilabccds.com",
        suffix: "@iLab"
      },
      suffix: "designed to empower students in building software projects."
    }
  },
  messageBox: {
    prefix: "✨ We provide a beginner-friendly environment",
    middle: "where you can",
    highlight: "build anything you imagine",
    suffix: "from web apps and mobile applications to innovative solutions that make a difference."
  },
  stats: [
    {
      id: "weeks",
      text: "4 Weeks"
    },
    {
      id: "beginner",
      text: "Beginner friendly"
    }
  ],
  aboutInfoCards: [
    {
      title: "Where?",
      value: "The Arc & LT3/6 @ NTU",
      icon: "mapPin",
    },
    {
      title: "When?",
      value: "25 May - 19 June",
      icon: "calendar",
    },
    {
      title: "Who can join?",
      value: "NTU students from any Year or Faculty",
      icon: "school",
    },
    {
      title: "Team Size?",
      value: "3 - 5 students per team",
      icon: "users",
    },
  ],

  
};
