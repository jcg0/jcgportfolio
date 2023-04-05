import React from "react";
import Project from "../Project";
import sweetSolution from "../../assets/sweetsolution.png";
import weatherapp from "../../assets/weatherapp.png";
import recipez from "../../assets/recipez.png";
import mongobackend from "../../assets/mongobackend.png";
import mysqlbackend from "../../assets/mysqlbackend.png";
import expressnotetaker from "../../assets/expressnotetaker.png";

const images = [
  {
    img: sweetSolution,
    name: "Sweet Solution",
  },
  {
    img: weatherapp,
    name: "Weather App",
  },
  {
    img: recipez,
    name: "Recipez",
  },
  {
    img: mongobackend,
    name: "MongoDB Backend",
  },
  {
    img: mysqlbackend,
    name: "MySQL Backend",
  },
  {
    img: expressnotetaker,
    name: "Express Note Taker",
  },
];

function Portfolio() {
  return (
    <div>
      <h1 className="text-4xl text-stone-200 font-extrabold flex flex-col items-center mt-36">
        Portfolio
      </h1>
      <div className="flex flex-row flex-wrap justify-center ">
        {images.map((images) => (
          <Project projects={images.img} name={images.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
