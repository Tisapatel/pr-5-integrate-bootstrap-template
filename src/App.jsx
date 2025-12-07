import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Service from "./components/Service";
import Blog from "./components/Blog";
import About from "./components/About";
import Prices from "./components/Prices";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
         <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
       
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
