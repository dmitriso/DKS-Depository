import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// IMPORTED PAGES FOR ROUTES
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Depository from "./pages/Depository";
// IMPORTED COMPONENTS FOR RENDER
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

// FUNCTION TO INITIALIZE APP
const App = () => {
 
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/DKS-Depository/" component={Welcome} />
          <Route exact path="/DKS-Depository/about" component={About} />
          <Route exact path="/DKS-Depository/depository" component={Depository} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}
export default App;
