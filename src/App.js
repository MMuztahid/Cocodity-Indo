import React from 'react';

import './App.css';
import TopBar from './components/TopBar';
import About from "./components/page/About";
import Feature from "./components/page/Feature";
import Contact from "./components/page/Contact";
import Product from "./components/page/Product";
import BottomBar from "./components/BottomNav";

const App = () => {
  return(
    <div className='App'>
      <TopBar/>
       
      <div id="About">
        <About/>
      </div>
      <div id="Feature">
        <Feature/>
      </div>
      <div id="Product">
        <Product/>
      </div>
      <div id="Contact">
        <Contact/>
      </div>
      <BottomBar/>
    </div>
  );
}

export default App;
