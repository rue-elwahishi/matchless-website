import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import Slider from "../../components/slider/slide.component";

const HomePage = () => (
  <div className="homepage">
    <Slider />
    <Directory />
  </div>
);

export default HomePage;
