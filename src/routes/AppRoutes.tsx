import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PreviousWinnersPage from "../pages/PreviousWinnersPage";
import SchedulePage from "../pages/SchedulePage";
import WorkshopPage from "../pages/WorkshopPage";
import FAQPage from "../pages/FAQPage";
import MilestonePage from "../pages/MilestonePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/previouswinner" element={<PreviousWinnersPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/workshops" element={<WorkshopPage />} />
      <Route path="/milestone" element={<MilestonePage />} />
      <Route path="/FAQ" element={<FAQPage />} />
    </Routes>
  );
};

export default AppRoutes;
