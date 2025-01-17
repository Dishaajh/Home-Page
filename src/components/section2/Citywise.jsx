import React, { useState } from "react";
import "./CityWise.css";

const CityWiseProjects = () => {
  const [selectedCity, setSelectedCity] = useState("Bangalore");

  const cities = [
    "Mangalore",
    "Pune",
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Kochi",
    "Mumbai",
    "Coimbatore",
    "Goa",
  ];

  const projects = {
    Bangalore: [
      {
        name: "Provident Kenworth",
        image: "/Home-Page/citywise1.jpg",
      },
      {
        name: "Provident Equinox",
        image: "/Home-Page/citywise2.jpg",
      },
      {
        name: "Provident Aroha",
        image: "/Home-Page/citywise3.jpg",
      },
    ],
    // Add other cities here similarly
  };

  return (
    <div className="city-wise-projects">
      <div className="sidebar">
        <h2>City-wise Projects</h2>
        <ul>
          {cities.map((city) => (
            <li
              key={city}
              className={selectedCity === city ? "active" : ""}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
      <div className="projects">
        {projects[selectedCity]?.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} />
            <div className="project-info">
              <h3>{project.name}</h3>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityWiseProjects;
