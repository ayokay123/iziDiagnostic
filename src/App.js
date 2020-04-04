import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Navbar } from "./layouts/Navbar";
import { Acceuil } from "./layouts/Acceuil";
import { Footer } from "./layouts/Footer";
import "./style.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Acceuil} />
          <Route path="/diagnostic" exact component={Main} />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
