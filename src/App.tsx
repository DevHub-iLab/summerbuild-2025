import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Layout/Navbar";
import WaveBar from "./components/Layout/WaveBar";

import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";

import Tagline from "./components/Tagline";

function App() {
  return (
    <>
      <WaveBar />

      <Navbar />

      <Sidebar />
      <Tagline />

      <section className="py-16 md:py-25 px-4 sm:px-6 lg:px-8">
        <AppRoutes />

        <Footer />
      </section>
    </>
  );
}

export default App;
