import HeroSection from "./components/heroSection";
import Nav from "./components/nav";
import Dish from "./components/Dish";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Footer from "./components/Footex";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Nav />
      <Dish />
      <About />
      <Mission />
      <Expertise />
      <Footer />
    </div>
  );
};

export default App;
