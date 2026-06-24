import WinnersPage from "./WinnersPage"
import { winners } from "../data/Winners/sb25Data"

export default function SB25WinnersPage() {
    return (
        <WinnersPage
            year="2025"
            winners={winners}
            description="A showcase of standout teams and projects from SummerBuild 2025."
        />
    )
}
