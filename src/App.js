import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// IMPORTED COMPONENTS FOR RENDER
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Depository from './components/Depository/Depository';
import Badges from './components/Badges/Badges';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';

// FUNCTION TO INITIALIZE APP
const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar className='Navbar' />
        <Wrapper className='Wrapper'>
          {/* <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/depository" component={Depository} />
          </Switch> */}
          <Welcome className='Welcome' />
          <About className='About' />
          <Badges className='Badges' />
          <Depository className='Depository' />
        </Wrapper>
        <Footer className='Footer' />
      </div>
    </Router>
  );
};
export default App;
