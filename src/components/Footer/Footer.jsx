import { Instagram, Linkedin, Send } from "lucide-react"
import DevHubLogo from "../../assets/devhublogo.svg"

function Footer() {
    return (
        <div className="mb-4 flex flex-col gap-4">
            <div className="mt-20 flex h-full w-auto items-center justify-center gap-2">
                <p>
                    Made with <span className="text-dh-red">❤ </span>
                    by
                </p>
                <a
                    className="hover:mouse-pointer mx-auto rounded-lg object-cover"
                    href="https://devhub.ilabccds.com"
                    target="_blank">
                    <img
                        className="mx-auto h-8 w-auto transition-all duration-300 ease-in-out hover:scale-105"
                        src={DevHubLogo}
                        alt="DevHub Logo"
                    />
                </a>
            </div>
            <div className="flex w-auto justify-center gap-4">
                <a
                    className="group relative cursor-pointer"
                    href="https://forms.office.com/r/JQm9nUgx8s"
                    target="_blank">
                    <Send className="h-10 w-10 p-1 text-gray-700 transition-colors hover:text-blue-500" />
                    <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
                        Join our Telegram
                    </span>
                </a>

                <a
                    className="group relative cursor-pointer"
                    href="https://instagram.com/ntu.devhub"
                    target="_blank">
                    <Instagram className="h-10 w-10 p-1 text-gray-700 transition-colors hover:text-pink-600" />
                    <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
                        Follow us on Instagram
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer
