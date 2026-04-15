import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Ventures from "./Components/Ventures";
import Consulting from "./Components/Consulting";
import Quant from "./Components/Quant";
import Research from "./Components/Research";
import Events from "./Components/Events";
import ImageGallery from "./Components/ImageGallery";
import Apply from "./Components/Apply";
import Layout from "./Components/Layout";
import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="w-full bg-surface-primary">
      <Analytics />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/quant" element={<Quant />} />
            <Route path="/research" element={<Research />} />
            <Route path="/finnovate" element={<Ventures />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/images" element={<ImageGallery />} />
          </Route>
          <Route path="/newsroom" element={<Navigate to="/research" replace />} />
          <Route path="/past-ventures" element={<Navigate to="/finnovate" replace />} />
          <Route path="/PastVentures" element={<Navigate to="/finnovate" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
