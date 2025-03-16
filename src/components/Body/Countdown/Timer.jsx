import React, { useState, useEffect } from "react"
function Timer(props) {
    const calculateTimeLeft = () => {
        const difference = +new Date(props.targetDate) - +new Date()
        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }
        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    // Update the timer every second
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer)
    })

    // Create timer components for display
    const timerComponents = Object.keys(timeLeft).map(interval => (
        <span
            key={interval}
            className="mx-1.5 flex flex-col items-center text-base font-semibold uppercase sm:mx-3 sm:text-xl">
            <p>{interval}</p>
            <p>{timeLeft[interval]}</p>
        </span>
    ))

    return (
        <div
            className="my-5 flex flex-col items-center rounded-md bg-[#FADA7A] p-5"
            onMouseEnter={e => {
                e.currentTarget.style.animation = "wiggle 1s ease-in-out"
            }}
            onMouseLeave={e => {
                e.currentTarget.style.animation = "none"
            }}>
            <h2 className="mb-4 text-xl font-bold sm:text-3xl">
                {props.timer}
            </h2>
            <div className="flex max-w-[300px] items-center sm:max-w-[500px]">
                {timerComponents.length ? (
                    timerComponents
                ) : (
                    <span className="text-xl">Time's up!</span>
                )}
            </div>
        </div>
    )
}

export default Timer
