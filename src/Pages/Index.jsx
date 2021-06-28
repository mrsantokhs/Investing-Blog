import React from "react";
import "./Pages.css"
import Navigation from "../Components/Navigation";
import Hero from "../Components/Home/Hero";

const Index = () => {
  return (
    <div className="index-page d-flex flex-column">
      <div>
        <Navigation />
      </div>
      <div className="index-mainside">
        <Hero />
      </div>
    </div>
  );
};

export default Index;
