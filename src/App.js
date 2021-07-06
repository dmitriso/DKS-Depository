// import './App.css';
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// IMPORTED PAGES FOR ROUTES
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Depository from "./components/Depository/Depository";
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
          {/* <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/depository" component={Depository} />
          </Switch> */}
          <Welcome/>
          <About/>
          <Depository/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}
export default App;
