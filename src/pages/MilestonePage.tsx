import { useEffect, useState } from "react";
import excelUrl from "./SampleMilestone.xlsx?url";
import * as XLSX from "xlsx";

interface MilestoneTeam {
  milestoneTeam: string;
  milestoneAccomplished: boolean[];
}

interface ExcelRow {
  Team: string;
  [milestone: string]: string;
}

export default function MilestonePage() {
  const [milestoneHeaderList, setMileStoneHeaderList] = useState<string[]>();
  const [milestoneTeamList, setMileStoneTeamList] = useState<MilestoneTeam[]>();
  const [openTeam, setOpenTeam] = useState<number | null>(null);

  useEffect(() => {
    async function loadExcel() {
      try {
        const response = await fetch(excelUrl);
        const arrayBuffer = await response.arrayBuffer();

        const workbook = XLSX.read(arrayBuffer);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json<ExcelRow>(sheet);

        if (data.length < 1) return;

        const mileHeader: string[] = [];

        const teams = data.map((curTeam) => {
          let milestoneTeam = "";
          const milestoneAccomplished: boolean[] = [];

          let counter = 0;

          for (const [key, value] of Object.entries(curTeam)) {
            if (key === "Team") {
              milestoneTeam = String(value);
            } else {
              mileHeader[counter] = key;
              milestoneAccomplished.push(value === "Y");
              counter++;
            }
          }

          return {
            milestoneTeam,
            milestoneAccomplished,
          };
        });

        setMileStoneTeamList(teams);
        setMileStoneHeaderList(mileHeader);
      } catch (e) {
        console.error(e);
      }
    }

    loadExcel();
  }, []);

  function completionPercent(team: MilestoneTeam) {
    const done = team.milestoneAccomplished.filter(Boolean).length;
    return Math.round((done / team.milestoneAccomplished.length) * 100);
  }

  
  if (milestoneTeamList == null || milestoneTeamList?.length === 0) {
    return null;
  }

  return (




    <section className="max-w-5xl mx-auto space-y-6">

      <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-4xl">
        <span className="text-[#1E1E1E]">Milestones </span>
        <span className="text-[#FA6B1C]">26</span>
      </h1>

      {milestoneTeamList?.map((team, index) => {
        const percent = completionPercent(team);
        const teamColor = "var(--color-sb-orange)";

        return (
          <div
            key={index}
            className="group relative rounded-3xl border-2 border-[var(--color-sb-yellow-100)] hover:border-[var(--color-sb-orange)]/50 transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg"
          >

            <div className="relative p-6">
              {/* Header Section */}
              <div
                className="flex items-center gap-6 cursor-pointer"
                onClick={() => setOpenTeam(openTeam === index ? null : index)}
              >
                {/* Progress Circle */}
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 rotate-[-90deg] transform">
                    {/* Background circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="var(--color-sb-yellow-100)"
                      strokeWidth="8"
                      fill="white"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke={teamColor}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={214}
                      strokeDashoffset={214 - (214 * percent) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  
                  {/* Center display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold" style={{ color: teamColor }}>
                      {percent}%
                    </span>
                  </div>
                </div>

                {/* Team Info */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[var(--color-dh-grey-100)] group-hover:translate-x-2 transition-transform">
                    {team.milestoneTeam}
                  </h2>
                </div>

                {/* Expand/Collapse Button */}
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                    openTeam === index 
                      ? 'bg-[var(--color-dh-red)] text-white rotate-180' 
                      : 'bg-[var(--color-sb-yellow-200)] text-[var(--color-dh-grey-100)]'
                  }`}
                >
                  {openTeam === index ? "↓" : "→"}
                </div>
              </div>

              {/* Expanded Milestones */}
              {openTeam === index && (
                <div className="mt-8 pt-6 border-t-2 border-[var(--color-sb-yellow-100)] animate-fadeIn">
                  {/* Wave path for milestones */}
                  <div className="relative py-8">
                    {/* SVG Wave Line */}
                      <svg className="absolute  left-0 w-full h-16 -translate-y" preserveAspectRatio="none">
                        <path
                        d="M0,40 C100,35 200,45 300,40 S500,35 600,40 S800,45 900,40 S1100,35 1200,40"
                        fill="none"
                        stroke="var(--color-sb-yellow-200)"
                        strokeWidth="4"
                        strokeDasharray="8 8"
                        opacity="0.5"
                        />
                      </svg>

                    {/* Milestones */}
                    <div className="flex justify-between relative">
                      {team.milestoneAccomplished.map((done, i) => {
                        const isLast = i === team.milestoneAccomplished.length - 1;
                        
                        return (
                          <div
                            key={i}
                            className="flex flex-col items-center text-center group/milestone"
                          >
                            {/* Milestone Marker */}
                            <div className="relative">
                              {/* Simple circle marker */}
                              <div
                                className={`w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-300
                                  ${done 
                                    ? 'shadow-lg scale-110' 
                                    : ''
                                  } group-hover/milestone:scale-110 cursor-pointer`}
                                style={{
                                  backgroundColor: done ? teamColor : 'var(--color-sb-yellow-100)'
                                }}
                              >

                              </div>
                              
                              {/* Ripple effect for completed milestones */}
                              {done && (
                                <div 
                                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                                  style={{ backgroundColor: teamColor }}
                                ></div>
                              )}
                            </div>

                            {/* Milestone Label */}
                            <div className="mt-3 max-w-[100px]">
                              <p 
                                className={`text-xs font-bold px-2 py-1 rounded-full
                                  ${done ? 'text-[var(--color-dh-grey-100)]' : 'text-gray-500'}`}
                                style={{
                                  backgroundColor: done ? `${teamColor}20` : 'var(--color-sb-yellow-100)'
                                }}
                              >
                                {milestoneHeaderList?.[i]}
                              </p>
                            </div>

                            {/* Completion badge for last milestone */}
                            {isLast && done && (
                              <div 
                                className="mt-2 text-xs px-2 py-1 rounded-full animate-bounce text-[var(--color-dh-grey-100)]"
                                style={{ backgroundColor: 'var(--color-sb-yellow-200)' }}
                              >
                                Complete
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      </section>
  );
}

// Add this to your global CSS or tailwind config
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.5s ease-out;
// }
