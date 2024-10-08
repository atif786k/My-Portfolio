import "./App.css";
import Home from "./Components/1_HomePage/Home";
import AboutDetailed from "./Components/2_AboutPage/AboutDetailed";
import MoreProj from "./Components/3_ProjectPage/MoreProj";
import ScrollToTop from "./Components/ScrollToTop";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {});
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/aboutDetailed"
            element={<AboutDetailed />}
          ></Route>
          {/* <Route exact path="/moreProj" element={<MoreProj />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
