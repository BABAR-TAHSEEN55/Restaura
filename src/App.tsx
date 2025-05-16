import HeroSection from "./components/heroSection";
import Nav from "./components/nav";
import Dish from "./components/Dish";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Footer from "./components/Footex";
import Reservation from "./components/Reservation.tsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Nav />
      <Dish />
      <About />
      <Mission />
      <Expertise />
      <Reservation />
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
};

export default App;
