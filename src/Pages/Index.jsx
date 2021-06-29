import React from "react";
import "./Pages.css";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Home/Hero";
import HomeBlogs from "../Components/Home/HomeBlogs";
import Footer from "../Components/Footer";

const Index = () => {
  return (
    <div className="index-page d-flex ">
      <div>
        <Navigation />
      </div>
      <div className="index-mainside  ">
        <Hero />
        <HomeBlogs />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
