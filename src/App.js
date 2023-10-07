import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Publishes from "./pages/publishes";
import Contact from "./pages/contact";
function App() {
  return (
    <div className="App">
      <Router>
        {/* this is navbar component */}
        <Nav />
        <Routes>
          {/* this is pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/publishes" element={<Publishes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate to = "/" />} />
          {/* <Route path="/:notf" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;
