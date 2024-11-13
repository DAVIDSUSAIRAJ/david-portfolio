import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import Nav from "./component/nav";

// import Home from "./pages/home";
// import About from "./pages/about";
// import Skills from "./pages/skills";
// import Publishes from "./pages/publishes";
// import Contact from "./pages/contact";
// // import Resume from "./pages/resume";

// Lazy load page components
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Skills = lazy(() => import("./pages/skills"));
const Publishes = lazy(() => import("./pages/publishes"));
const Contact = lazy(() => import("./pages/contact"));
// const Resume = lazy(() => import("./pages/resume"));

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/publishes" element={<Publishes />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/*" element={<Navigate to="/" />} />
            {/* <Route path="/:notf" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
