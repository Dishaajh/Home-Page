// React Component: CustomerTestimonials.js
import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const testimonials = [
    {
      name: "Niharika Krupani",
      description: "Resident at Provident Kenworth",
      videoLink: "https://example.com/video1",
      image: "/public/People1.jpg",
    },
    {
      name: "Mr. & Mrs. Kailash",
      description: "Resident at Provident Sunworth",
      videoLink: "https://example.com/video2",
      image: "/public/People2.jpg",
    },
    {
      name: "Sanjay Srinivas",
      description: "Resident at Provident Park Square",
      videoLink: "https://example.com/video3",
      image: "/public/People3.jpg",
    },
  ];

  return (
    <div className="customer-testimonials">
      <div className="heading">
        <h2>What customers have to say about us</h2>
      </div>
      <div className="testimonials-container">
        <button className="arrow left">&#8249;</button>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <a href={testimonial.videoLink} target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="play-button">&#9658;</div>
                </div>
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <button className="arrow right">&#8250;</button>
      </div>
    </div>
  );
};

export default Reviews;
