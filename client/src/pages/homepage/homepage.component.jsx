import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import Carousel from "react-bootstrap/Carousel";
import Slider from "../../components/slider/slide.component";
const HomePage = () => (
  <div className="homepage">
    <Slider />
    <Directory />
  </div>
);

export default HomePage;
