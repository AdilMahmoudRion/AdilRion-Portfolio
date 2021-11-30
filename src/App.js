import React from 'react';
import './App.css';
import Banner from "./Components/Pages/Banner/Banner";
import Navigation from "./Components/Pages/Navigation/Navigation";

function App() {
  return (
    <div className="adilrionWebBody">
      <Navigation></Navigation>
      <Banner></Banner>
    </div>
  );
}

export default App;
