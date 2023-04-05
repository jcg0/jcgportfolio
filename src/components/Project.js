import React from "react";
// import Portfolio from "./pages/Portfolio";

function Project({ projects, name, url }) {
  return (
    <div className="card w-96 bg-accent shadow-xl m-5">
      <div className="card-body">
        <p className="text-2xl text-slate-950 font-extrabold">{name}</p>
        <a href={url}>
          <img src={projects} alt="projects" />
        </a>
      </div>
    </div>
  );
}

export default Project;
