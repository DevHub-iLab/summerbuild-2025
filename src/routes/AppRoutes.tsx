import { Routes, Route, Navigate } from "react-router-dom"

import HomePage from "../pages/HomePage"
import SB25WinnersPage from "../pages/SB25WinnersPage"
import SB26WinnersPage from "../pages/SB26WinnersPage"
import SchedulePage from "../pages/SchedulePage"
import WorkshopPage from "../pages/WorkshopPage"
import FAQPage from "../pages/FAQPage"
import MilestonePage from "../pages/MilestonePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            {/* New winners routes */}
            <Route
                path="/winners"
                element={<Navigate to="/winners/2026" replace />}
            />
            <Route path="/winners/2025" element={<SB25WinnersPage />} />
            <Route path="/winners/2026" element={<SB26WinnersPage />} />
            {/* <Route path="/previouswinner" element={<SB25WinnersPage />} /> */}

            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/workshops" element={<WorkshopPage />} />
            <Route path="/milestone" element={<MilestonePage />} />
            <Route path="/FAQ" element={<FAQPage />} />
        </Routes>
    )
}

export default AppRoutes
