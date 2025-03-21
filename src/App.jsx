import NewNav from "./components/Navbar/NewNav.jsx"
import Tagline from "./components/Body/Tagline.jsx"
import Countdown from "./components/Body/Countdown/Countdown.jsx"
import About from "./components/Body/About/About.jsx"
import Challenge from "./components/Body/Challenge/Challenge.jsx"
import Achievement from "./components/Body/Achievement/Achievement.jsx"
import Prizes from "./components/Body/Prizes/Prizes.jsx"
import Schedule from "./components/Body/Schedule/Schedule.jsx"
import Workshop from "./components/Body/Workshop/Workshop.jsx"
import FAQ from "./components/Body/FAQ/FAQ.jsx"
import Sponsor from "./components/Body/Sponsor/Sponsor.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
    return (
        <div>
            <section id="nav">
                <NewNav />
            </section>
            <div className="flex flex-col items-center justify-center">
                <Tagline />
                <Countdown />
                <About />
                <Challenge />
                <section id="achievements">
                    <Achievement />
                </section>
                <section id="schedule">
                    <Schedule />
                </section>
                <section id="workshop">
                    <Workshop />
                </section>
                <section id="faq">
                    <FAQ />
                </section>
                <Sponsor />
                <Footer />
            </div>
        </div>
    )
}

export default App
