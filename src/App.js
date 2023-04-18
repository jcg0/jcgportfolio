import React from "react";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div>
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;

library.add(fab, fas, far);
