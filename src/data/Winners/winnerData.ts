export type IconType =
    | "paintbrush"
    | "flask"
    | "wrench"
    | "users"
    | "trophy"
    | "medal"
    | "award"
    | "palette"
    | "bot"
    | "lightbulb"
    | "graduation"
    | "heart"
    | "sparkles"
    | "city"

export type WinnerItem = {
    award: string
    teamName: string
    projectName: string
    summary: string
    members: string[]
    images: string[]
    color: string
    winnerLink: string | null
    iconType: IconType
}
