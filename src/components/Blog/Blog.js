import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div>
        <h1>deffarent with Authorization and Authentication </h1>
        <h4>Authentication</h4>
        <ul>
          <li>
            Authentication is the process of identifying a user to provide
            access to a system.
          </li>
          <li>In this, the user or client and server are verified.</li>
          <li>It is usually performed before the authorization.</li>
          <li>
            It requires the login details of the user, such as user name &
            password, etc.
          </li>
          <li>Data is provided through the Token Ids.</li>
        </ul>
        <h4> Authorization</h4>
        <ul>
          <li>
            Authorization is the process of giving permission to access the
            resources.
          </li>
          <li>
            In this, it is verified that if the user is allowed through the
            defined policies and rules.
          </li>
          <li>
            It is usually done once the user is successfully authenticated.
          </li>
          <li>It requires the user's privilege or security level.</li>
          <li>Data is provided through the access tokens.</li>
        </ul>
      </div>
      <div>
        <h1>
          why are using firebase? what other ptions do you have to implement
          Authentication?
        </h1>
        <p>
          Google Firebase offers many features that pitch it as the go-to
          backend development tool for web and mobile apps. It reduces
          development workload and time. And it's a perfect prototyping tool.
          Firebase is simple, lightweight, friendly, and industrially
          recognized.
        </p>
        <br />
        <p>
          Authentication factors can be classified into three groups: something
          you know: a password or personal identification number (PIN);
          something you have: a token, such as bank card; something you are:
          biometrics, such as fingerprints and voice recognition.
        </p>
          </div>
          <div>
              <h1>What other services does firebase provide other than authentication?</h1>
          </div>
    </div>
  );
};

export default Blog;
