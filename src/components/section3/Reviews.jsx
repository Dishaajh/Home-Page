import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const testimonials = [
    {
      name: "Niharika Krupani",
      description: "Resident at Provident Kenworth",
      // videoLink: "https://example.com/video1",
      image: "/Home-Page/People1.jpg",
    },
    {
      name: "Mr. & Mrs. Kailash",
      description: "Resident at Provident Sunworth",
      // videoLink: "https://example.com/video2",
      image: "/Home-Page/People2.jpg",
    },
    {
      name: "Sanjay Srinivas",
      description: "Resident at Provident Park Square",
      // videoLink: "https://example.com/video3",
      image: "/Home-Page/People3.jpg",
    },
  ];

  return (
<div className="customer-testimonials">
  <div className="text-section">
    <h2>
      What customers have<br />
      <span>to say about us</span>
    </h2>
  </div>
  <div className="image-grid">
    <div className="main-image">
      <a href="https://example.com/video1" target="_blank" rel="noopener noreferrer">
        <img src="/Home-Page/People1.jpg" alt="Niharika Krupani" />
        {/* <div className="play-button">&#9658;</div> */}
      </a>
      <div className="image-info">
        <h3>Niharika Krupani</h3>
        <p>Resident at Provident Kenworth</p>
      </div>
    </div>
    <div className="side-images">
      <div className="side-image">
        <a href="https://example.com/video2" target="_blank" rel="noopener noreferrer">
          <img src="/Home-Page/People2.jpg" alt="Mr. & Mrs. Kailash" />
          {/* <div className="play-button">&#9658;</div> */}
        </a>
        <div className="image-info">
          <h3>Mr. & Mrs. Kailash</h3>
          <p>Resident at Provident Sunworth</p>
        </div>
      </div>
      <div className="side-image">
        <a href="https://example.com/video3" target="_blank" rel="noopener noreferrer">
          <img src="/Home-Page/People3.jpg" alt="Sanjay Srinivas" />
          {/* <div className="play-button">&#9658;</div> */}
        </a>
        <div className="image-info">
          <h3>Sanjay Srinivas</h3>
          <p>Resident at Provident Park Square</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Reviews;
