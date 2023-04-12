import React from "react";
// import Portfolio from "./pages/Portfolio";

function Project({ projects, name, url, github }) {
  return (
    <div className="card w-1/2 bg-accent shadow-xl m-5">
      <div className="card-body">
        <p className="text-2xl text-slate-950 font-extrabold">{name}</p>
        <a href={url}>
          <img src={projects} alt="projects" />
        </a>
        <a className="text-slate-950 font-extrabold" href={github}>
          {name} github repo
        </a>
      </div>
    </div>
  );
}

export default Project;
