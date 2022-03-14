import React from "react";
import Navbars from "../components/Navbars/Navbars";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/SecondSection/SecondSection";
import Gallery from "../components/Gallery/Gallery";
import Review from "../components/Review/Review";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="head">
        <div className="container">
          <Navbars />
          <Header />
          <Section />
        </div>
        <FirstSection />
        <div className="container">
          <SecondSection />
          <Gallery />
          <Review />
        </div>
        <Login />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
