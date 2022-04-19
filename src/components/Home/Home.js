import React, { useState } from "react";
import Appointment from "../Appointment/Appointment";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Service from "../Service/Service";

const Home = () => {

  return (
    <div>
      <Features></Features>
      <Appointment></Appointment>
      <Service ></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;
