export type ScheduleEvent = {
  dateTitle: string;
  description: string;
  icon?: string;
};

export type ScheduleWeek = {
  weekTitle: string;
  description?: string;
  color: string;
  icon?: string;
  events: ScheduleEvent[];
};

export const scheduleData = {
  scheduleHeader: "PROGRAMME",
  scheduleHeaderOrange: "SCHEDULE",
  scheduleSubtitle:
    "A 4-week summer journey of workshops, mentorship, and milestone moments.",

  weeks: [
    {
      weekTitle: "Week 1",
      description: "Programme kick off!",
      color: "#6ECBF5",
      icon: "☀️",
      events: [
        {
          dateTitle: "25 May",
          description: "Opening Ceremony",
          icon: "🎉",
        },
        {
          dateTitle: "25–26 May",
          description: "Various Workshops",
          icon: "🛠️",
        },
      ],
    },
    {
      weekTitle: "Week 2–3",
      description: "Check-in Sessions with Mentors",
      color: "#6ECBF5",
      icon: "👥",
      events: [],
    },
    {
      weekTitle: "Week 4",
      description: "Final stretch before submission and judging",
      color: "#6ECBF5",
      icon: "🚀",
      events: [
        {
          dateTitle: "16 June",
          description: "Project Submission",
          icon: "🗃️",
        },
        {
          dateTitle: "19 June",
          description: "Judging & Closing Ceremony",
          icon: "🏁",
        },
      ],
    },
  ],
};