/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "sb-orange": "var(--color-sb-orange)",
                "sb-blue": {
                    100: "var(--color-sb-blue-100)",
                    200: "var(--color-sb-blue-200)",
                },
                "sb-yellow": {
                    100: "var(--color-sb-yellow-100)",
                    200: "var(--color-sb-yellow-200)",
                },
                "dh-orange": "var(--color-dh-orange)",
                "dh-red": "var(--color-dh-red)",
                "dh-grey": {
                    100: "var(--color-dh-grey-100)",
                    200: "var(--color-dh-grey-200)",
                },
            },
        },
    },
    plugins: [],
}
