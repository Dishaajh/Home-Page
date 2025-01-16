// EnvironmentComponent.js
import React from 'react';
import './Environment.css';

const EnvironmentComponent = () => {
  return (
    <div className="environment-container">
      <div className="text-section">
        <h1>
          To be kind to the <span className="highlight">Environment</span> is the way of Provident Housing
        </h1>
        <button className="know-more-button">Know more</button>
      </div>
      <div className="image-section">
        <img
          src="/Greenery.png"
          alt="Environment illustration"
          className="environment-image"
        />
      </div>
    </div>
  );
};

export default EnvironmentComponent;

