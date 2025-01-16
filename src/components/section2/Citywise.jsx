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
        image: "/citywise1.jpg",
      },
      {
        name: "Provident Equinox",
        image: "/citywise2.jpg",
      },
      {
        name: "Provident Aroha",
        image: "/citywise3.jpg",
      },
    ],
  };

  return (
    <div className="city-wise-projects">
      <div className="sidebar">
        <h2>City wise Projects</h2>
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
              {project.details && <p>{project.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityWiseProjects;
