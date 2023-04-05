import React from "react";
// import Portfolio from "./pages/Portfolio";

function Project({ projects, name }) {
  return (
    <div className="card w-96 bg-accent shadow-xl m-5">
      <div className="card-body">
        <p className="text-2xl text-slate-950 font-extrabold">{name}</p>
        <a href="https://sweet-solution.herokuapp.com/">
          <img src={projects} alt="projects" />
        </a>
      </div>
    </div>
  );
}

export default Project;
