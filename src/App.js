import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SecondPage from "./pages/SecondPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import FifthPage from "./pages/FifthPage";
import SixPage from "./pages/SixPage";
import SevenPage from "./pages/SevenPage";
import { PinkButtonTop } from "./components/buttons/PinkButtonTop";
import EighthPage from "./pages/EighthPage";
import ElevenPage from "./pages/ElevenPage";

function App() {
 
  return (
    <Router>
      <div className="m-0 p-0 overflow-x-hidden">
        <ScrollToTop />
        <Header /> 
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs/undergraduate/fashion-design" element={<SecondPage/>} />
          <Route path="/programs/undergraduate/interior-design" element={<ThirdPage/>} />
          <Route path="/programs/undergraduate/communication-design" element={<FourthPage/>} />
          <Route path="/programs/undergraduate/fashion-communication" element={<FifthPage/>} />
          <Route path="/programs/undergraduate/product-design" element={<SixPage/>} />
          <Route path="/programs/undergraduate/strategic-design-management" element={<SevenPage/>} />
          <Route path="/programs/undergraduate/animation-vfx" element={<EighthPage/>} />
          <Route path="/student-life" element={<ElevenPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
