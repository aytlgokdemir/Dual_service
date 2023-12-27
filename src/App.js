import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SlideShow from "./components/SlideShow";
import Diensleistungen from "./components/Diensleistungen";
import Product from "./components/Product";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ÜberUns from "./components/ÜberUns";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/überuns" element={<ÜberUns />} />
          <Route
            path="/"
            element={
              <div>
                <SlideShow />
                <Diensleistungen />
                <Product />
                <Content />
              </div>
            }
          />
        </Routes>
        <Footer />
        <Scroll />
      </Router>
    </div>
  );
}

export default App;
