import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div>
      <div className="Features">
        <img src={"https://i.ibb.co/GQm6N2S/search-bg.png"} alt="" />
        <div className="features-containar">
          <h3>Be Hear Healthy</h3>
          <h1>
            Hey, What's Up <br />
            <span className="deff-color">Welcome To Doccure</span>
          </h1>
          <p>
            Stay at a healthy weight. Quit smoking and stay away from secondhand
            smoke. Control your cholesterol and blood pressure. Drink alcohol
            only in moderation.
          </p>
          <div>
            <button className="btn btn-1">Read More</button>
            <button className="btn btn-2">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
