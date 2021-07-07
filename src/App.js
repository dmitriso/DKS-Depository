import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// IMPORTED COMPONENTS FOR RENDER
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Depository from "./components/Depository/Depository";
import Badges from "./components/Badges/Badges";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";

// FUNCTION TO INITIALIZE APP
const App = () => {
 
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          {/* <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/depository" component={Depository} />
          </Switch> */}
          <Welcome/>
          <About/>
          <Badges />
          <Depository/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}
export default App;
