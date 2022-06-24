import React from 'react';
import './App.css';
import Header from "./header";
import Cards from"./tinderCards";
import Swipebuttons from"./Swipebuttons";
function App() {
  return (
    <div className="app">
    {/* <h1>this is mern project</h1> */}
    <Header/>
    <Cards/>
    <Swipebuttons/>
    </div>
  );
}

export default App;
