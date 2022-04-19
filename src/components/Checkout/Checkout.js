import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <form>
        <div className="info">
          <h3>Personal Information</h3>
          <div className="personal-info">
            <input type="text" name="fname" id="" placeholder="Fast Name" />
            <input type="text" name="lname" id="" placeholder="Last Name" />
            <br />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="tel" name="" id="" placeholder="Phone" />
          </div>
          <div className="card-info">
            <h3>Payment Method</h3>
            <div className="pay-method">
              <input type="radio" name="pay-method" id="" />
              <label htmlFor="Card">Credit Card</label>
            </div>
            <input type="text" name="name" id="" placeholder="Name on Card" />
            <input type="tel" name="" id="" placeholder="Card Number" />
            <br />
            <div className="card-details">
              <input
                type="text"
                name="mounth"
                id=""
                placeholder="Expiry Month"
              />
              <input type="number" name="year" id="" placeholder="Year" />
              <input type="tel" name="cvv" id="" placeholder="CVV" />
              <div className="pay-method">
                <input type="radio" name="pay-method" id="" />
                <label htmlFor="PayPal">PayPal</label>
              </div>
            </div>
            <div>
              <input type="checkbox" name="" id="" />I have read and accept
              <span className="tc"> Terms &#38; Conditions</span>
            </div>
            <div>
              <input
                className="pay-btn"
                type="button"
                value="Confirm And Pay"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="summary">
        <h3>Doctor Info</h3>
        <hr />
        <div className="doctor-info">
          <div className="doctor-img">
            {" "}
            <img
              src={"https://i.ibb.co/z22SY8q/doctor-thumb-02.jpg"}
              alt=""
            />{" "}
          </div>
          <div>
            {" "}
            <h4>Dr. Fred Ortego</h4>
            <div>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p>
              <i class="fas fa-map-marker-alt"></i> Newyork, USA
            </p>
          </div>
          <div></div>
        </div>
        <hr />
        <p className="about">
          Dr. Fred Ortego has joined Our Lady of the Lake Louisiana Cardiology
          Associates where he will specialize in diagnosing and treating
        </p>
      </div>
    </div>
  );
};

export default Checkout;
