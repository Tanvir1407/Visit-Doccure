import React from "react";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment-container">
      <div className="appointment-form-section">
        <h1>
          I'm Doctor Antonio,
          <br />
          Make an Appointment !
        </h1>
        <div className="appointment-form">
          <div>
            <input type="text" name="name" id="" placeholder="Name" />
            <input type="text" name="gender" id="" placeholder="Gender" />
          </div>
          <div>
            <input type="tel" name="" id="" placeholder="Phone Number" />
            <input className="appoinment-btn" type="submit" value="Submit" />
          </div>
        </div>
      </div>
      <div className="appointment-pic">
        <img src={"https://i.ibb.co/6W73sNJ/search-img.png"} alt="" />
      </div>
    </div>
  );
};

export default Appointment;
