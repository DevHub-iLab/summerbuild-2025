import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Layout/Navbar";
import WaveBar from "./components/Layout/WaveBar";

import Footer from "./components/Layout/Footer";
// import Sidebar from "./components/Layout/Sidebar";

function App() {
  return (
    <>
      <WaveBar />

      <Navbar />

      {/* <Sidebar /> */}

      <section className="sm:px-6 mt-10 lg:mt-35 xl:mt-45">

        <AppRoutes />

        <Footer />


      </section>
    </>
  );
}

export default App;
