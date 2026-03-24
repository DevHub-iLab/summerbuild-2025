export type ScheduleItem = {
  dateTitle: string;
  description?: string;
  color: string;
  fontWeight: "400" | "500" | "600" | "700" | "bold";
  type: "week" | "event";
  icon?: string;
};

export const scheduleData: {
  scheduleHeader: string;
  scheduleHeaderOrange: string;
  scheduleSubtitle: string;
  allSchedules: ScheduleItem[];
} = {
  scheduleHeader: "PROGRAMME",
  scheduleHeaderOrange: "SCHEDULE",
  scheduleSubtitle:
    "A 4-week summer journey of workshops, mentorship, and milestone moments.",

  allSchedules: [
    {
      dateTitle: "Week 1",
      description: "Programme kick off!",
      color: "#6ECBF5",
      fontWeight: "bold",
      type: "week",
      icon: "☀️",
    },
    {
      dateTitle: "25 May",
      description: "Opening Ceremony",
      color: "#9EE7F5",
      fontWeight: "400",
      type: "event",
      icon: "🎉",
    },
    {
      dateTitle: "25–26 May",
      description: "Various Workshops",
      color: "#9EE7F5",
      fontWeight: "400",
      type: "event",
      icon: "🛠️",
    },
    {
      dateTitle: "Week 2–3",
      description: "Check-in Sessions with Mentors",
      color: "#6ECBF5",
      fontWeight: "bold",
      type: "week",
      icon: "👥",
    },
    {
      dateTitle: "Week 4",
      description: "Final stretch before submission and judging",
      color: "#6ECBF5",
      fontWeight: "bold",
      type: "week",
      icon: "🚀",
    },
    {
      dateTitle: "16 June",
      description: "Project Submission",
      color: "#9EE7F5",
      fontWeight: "400",
      type: "event",
      icon: "🗃️",
    },
    {
      dateTitle: "19 June",
      description: "Judging & Closing Ceremony",
      color: "#9EE7F5",
      fontWeight: "400",
      type: "event",
      icon: "🏁",
    },
  ],
};