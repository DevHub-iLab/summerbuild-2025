import { FlaskConical } from "lucide-react"

function ChallengeCard(props) {
    return (
        <div
            className="col-span-1 grid h-full w-full grid-cols-4 rounded-lg py-2"
            style={{ backgroundColor: props.color }}>
            <div className="col-span-1 flex h-full w-full items-center justify-center px-2 py-4 lg:px-0">
                <FlaskConical size={48} color="#FA6B1C" />
            </div>
            <div className="col-span-3 flex w-full flex-col items-start justify-around pr-4">
                <h1 className="text-xl font-bold">{props.text}</h1>
                <h2 className="text-lg">{props.description}</h2>
            </div>
        </div>
    )
}

export default ChallengeCard
