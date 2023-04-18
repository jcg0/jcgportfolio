import React from "react";
import Project from "../Project";
import sweetSolution from "../../assets/sweetsolution.png";
import weatherapp from "../../assets/weatherapp.png";
import recipez from "../../assets/recipez.png";
import mongobackend from "../../assets/mongobackend.png";
import mysqlbackend from "../../assets/mysqlbackend.png";
import expressnotetaker from "../../assets/expressnotetaker.png";
import codecollective from "../../assets/codecollective.png";

const images = [
  {
    img: codecollective,
    name: "Code Collective",
    url: "https://code-collectives.herokuapp.com/",
    github: "https://github.com/jcg0/code-collective-project-3",
  },
  {
    img: sweetSolution,
    name: "Sweet Solution",
    url: "https://sweet-solution.herokuapp.com/",
    github: "https://github.com/EarlofSmith/sweet-solution",
  },
  {
    img: weatherapp,
    name: "Weather App",
    url: "https://jcg0.github.io/mod6-challenge/",
    github: "https://github.com/jcg0/mod6-challenge",
  },
  {
    img: recipez,
    name: "Recipez",
    url: "https://jcg0.github.io/project-1-recipesy/",
    github: "https://github.com/jcg0/project-1-recipesy",
  },
  {
    img: mongobackend,
    name: "MongoDB Backend",
    url: "https://github.com/jcg0/18-mongodb-mongoose-backend",
    github: "https://github.com/jcg0/18-mongodb-mongoose-backend",
  },
  {
    img: mysqlbackend,
    name: "MySQL Backend",
    url: "https://github.com/jcg0/13jg-ecommerce-backend",
    github: "https://github.com/jcg0/jg-mysql-db",
  },
  {
    img: expressnotetaker,
    name: "Express Note Taker",
    url: "https://express-note-taker-app.herokuapp.com/",
    github: "https://github.com/jcg0/jg-express-note-taker",
  },
];

function Portfolio() {
  return (
    <div>
      <h1 className="text-4xl text-secondary font-extrabold flex flex-col items-center mt-36">
        Portfolio
      </h1>
      <div className="flex flex-row flex-wrap justify-center mb-12 pb-5">
        {images.map((images) => (
          <Project
            projects={images.img}
            name={images.name}
            url={images.url}
            github={images.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
