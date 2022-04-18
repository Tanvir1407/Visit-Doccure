import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-info">
        <div>
          {" "}
          <img
            className="about-img"
            src={"https://i.ibb.co/f4sqF4R/IMG-2149-Copy-min.jpg"}
            alt=""
          />
        </div>
        <div className="about-text">
          <h1>Hi, I'm Tanvir</h1>
          <h4>MERN Stack Web Developer</h4>
          <p>
            A few days ago I dreamed of becoming a developer. And today, at the
            end of the fulfillment of that dream Although there is still a long
            way to go However, completing the initial step of such a difficult
            path is a lot of challenges If you can complete the initial step in
            a good way then the journey will be easier, inshallah. I have
            learned to work hard in these few days The love for programming is
            also very strong. Now I want to take myself a long way slowly I can
            do that, I have become much stronger in the place of my
            self-confidence. I want to see myself as a junior developer of a
            good company in the next 4-5 months and enrich myself as a developer
            in the next 1 year.{" "}
          </p>
          <div>
            <h3>I sincerely believe that</h3>
            <blockquote>
              <q>
                There is no such thing as merit in the world, those who work
                hard are called meritorious by the <lazy className={" "}></lazy>
              </q>
              <span className="author"> <br /> -----Jonkar Mahbub-----</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
