import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Ventures from "./Components/Ventures";
import Consulting from "./Components/Consulting";
import PastVentures from "./Components/PastVentures";
import Events from "./Components/Events";
import Newsroom from "./Components/Newsroom";
import Layout from "./components/Layout";
import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/finnovate" element={<Ventures />} />
            <Route path="/past-ventures" element={<PastVentures />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newsroom" element={<Newsroom />} />
          </Route>
          <Route path="/PastVentures" element={<Navigate to="/past-ventures" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
