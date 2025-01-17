import React from "react";
import "./Properties.css";

const Properties = () => {
  const properties = [
    {
      image: "/Home-Page/citywise1.jpg",
      title: "Palm Vista, Mumbai",
      description: "Master community within 16 acres of tropical paradise.",
    },
    {
      image: "/Home-Page/citywise2.jpg",
      title: "Winworth, Kochi",
      description: "Eddappally’s Finest Lifestyle for Timeless Living",
    },
    {
      image: "/Home-Page/citywise3.jpg",
      title: "Capella, Bangalore",
      description:
        "World class integrated lifestyle, moments away from everything",
    },
  ];

  return (
    <div className="featured-properties">
      <h2>Featured Properties</h2>
      <div className="property-list">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <div className="image-container">
              <img src={property.image} alt={property.title} />
              <div className="overlay">
                <button>Learn More</button>
              </div>
            </div>
            <h3>{property.title}</h3>
            <br />
            <p>{property.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
