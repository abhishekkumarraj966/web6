import React from "react";
import Home from "./Home";
import Hero from "./Hero";
import Product from "./Product";
import Bloge from "./Bloge";
import Galleary from "./Gallery";
import Offer from "./Offer";
import Certificates from "./Certificates";
import Appoinment from "./Appoinment";
import Feedbackform from "./Feedbackform";
import Review from "./Review";
import BussinessHours from "./BussinessHours";
import ContactUs from "./ContactUs";
import Service from "./Service";

const Layout = () => {
  return (
    <div>
      <Home />
      <Hero />
      <Product />
      <Service/>
      <Offer />
      <Bloge />
      <Galleary />
      <BussinessHours />
      <Certificates />

      <Feedbackform />
      <Review />
      <Appoinment />
      <ContactUs />
    </div>
  );
};

export default Layout;
