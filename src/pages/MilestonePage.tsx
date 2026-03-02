import { useEffect, useState } from "react";
import excelUrl from './SampleMilestone.xlsx?url';


import * as XLSX from "xlsx"

interface MilestoneTeam {
    milestoneTeam : string;
    milestoneAccomplished : boolean[];
}

interface ExcelRow {
  Team: string;
  [milestone: string]: string; 
}

export default function MilestonePage() {

 const [milestoneHeaderList,setMileStoneHeaderList] = useState<string[]>()
 const [milestoneTeamList,setMileStoneTeamList] = useState<MilestoneTeam[]>()

 // Parse excel sheet, this double renders 
  useEffect(() => {
    async function loadExcel() {
      //Place  SampleMilestone.xlsx in the same directory as page, it is imported above  
      try { 
      const response = await fetch(excelUrl);
      const arrayBuffer = await response.arrayBuffer();
      
      const workbook = XLSX.read(arrayBuffer);

      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      const data = XLSX.utils.sheet_to_json<ExcelRow>(sheet);

      if (data.length < 1) { 
        return 
      }

      const mileHeader : string[] = Array(Object.keys(data[0]).length - 2 ).fill('')

      setMileStoneTeamList(data.map((curTeam) => {
        let milestoneTeam = "";
        const milestoneAccomplished: boolean[] = [];

        let counter = 0;
        for (const [key, value] of Object.entries(curTeam)) {

          if (key === "Team") {
            milestoneTeam = String(value);
          } else {

            mileHeader[counter] = key
            milestoneAccomplished.push(value === "Y");
            counter += 1 
          }

        }

        return {
          milestoneTeam,
          milestoneAccomplished
        };
      }));

      setMileStoneHeaderList(mileHeader)

      }
      catch (e){
        console.error(e)
      }
    } 

    loadExcel();
  }
  , []);
    

  return (
    <section>

<div className="mt-20 overflow-x-auto">
  <table className="min-w-full border border-gray-300">
    
    <thead>
      <tr>
        <th className="border px-4 py-2 bg-gray-100">Team</th>

        {milestoneHeaderList?.map((header, index) => (
          <th key={index} className="border px-4 py-2 bg-gray-100">
            {header}
          </th>
        ))}

      </tr>
    </thead>

    <tbody>

      {milestoneTeamList?.map((team, teamIndex) => (
        <tr key={teamIndex}>

          <td className="border px-4 py-2 font-medium">
            {team.milestoneTeam}
          </td>

          {team.milestoneAccomplished.map((done, milestoneIndex) => (
            <td key={milestoneIndex} className="border px-4 py-2 text-center">
              {done ? "✅" : "❌"}
            </td>
          ))}

        </tr>
      ))}

    </tbody>

  </table>
</div>
    </section>
  );
}
