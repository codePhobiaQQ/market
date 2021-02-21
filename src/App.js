import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import SliderMain from "./components/SliderBlock/SliderMain";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <SliderMain />
      <FeaturesSection />
    </div>
  );
}

export default App;
