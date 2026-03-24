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
  ]
};
