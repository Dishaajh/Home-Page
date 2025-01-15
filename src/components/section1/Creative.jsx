import React from "react";
import "./Creative.css";

const CustomSection = () => {
  return (
    <div className="main-container">
      <div className="top-section">
        <div className="overlay-content">
          <h1 className="text-above">
            We're obsessed with creating something special!
          </h1>
          <p className="text-below">
            Our homes have been created to deliver on more than just a lifestyle.
            It's an effort to create communities that are built on shared values
            of sustainability, quality, growth, value for money, a smart living
            experience that's a cut above the rest.
          </p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="overlay-content">
          <h2 className="text-above">The reward that comes with creating communities</h2>
          <div className="text-list">
            <div className="text-item">
              <h2>9</h2>
              <p>No. of cities</p>
            </div>
            <div className="text-item">
              <h2>1,60,000+</h2>
              <p>Satisfied Customers</p>
            </div>
            <div className="text-item">
              <h2>22</h2>
              <p>Million Sq.Ft. Delivered</p>
            </div>
            <div className="text-item">
              <h2>45,000+</h2>
              <p>Homes Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
