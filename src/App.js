import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Ventures from "./Components/Ventures";
import Consulting from "./Components/Consulting";
import PastVentures from "./Components/PastVentures";
import Events from "./Components/Events";
import Newsroom from "./Components/Newsroom";
import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Delete bg-black to show background video example
// If they do a video, they should try to have the opening scene be the ending scene (Disrupt logo over a black backdrop?)
function App() {
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Consulting" element={<Consulting />} />
          <Route path="/Ventures" element={<Ventures />} />
          <Route path="/PastVentures" element={<PastVentures />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Newsroom" element={<Newsroom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
