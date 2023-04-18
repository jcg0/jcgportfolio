import React from "react";
import pdf from "../../assets/JeffersonGriebelResume__.pdf";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faJavaScript } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <div>
      <section className="skills m-12">
        <h2 className="text-4xl text-stone-200 font-extrabold m-6">Skills</h2>
        <ul>
          <li className="space-x-2">
            <FontAwesomeIcon
              icon="fa-brands fa-square-js"
              size="2xl"
              style={{ color: "#ccdfff" }}
            />
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              JavaScript
            </a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon
              icon="fa-brands fa-react"
              size="2xl"
              style={{ color: "#ccdfff" }}
            />
            <a href="https://react.dev/">React</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon
              icon="fa-brands fa-node"
              style={{ color: "#ccdfff" }}
              size="2xl"
            />
            <a href="https://nodejs.org/en/about">Node.js</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon
              icon="fa-solid fa-database"
              size="2xl"
              style={{ color: "#ccdfff" }}
            />
            <a href="https://www.mongodb.com/docs/">MongoDB</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon
              icon="fa-solid fa-table"
              size="2xl"
              style={{ color: "#ccdfff" }}
            />
            <a href="https://dev.mysql.com/doc/">MySQL</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon
              icon="fa-solid fa-server"
              size="2xl"
              style={{ color: "#ccdfff" }}
            />
            <a href="https://expressjs.com/">Express</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon
              icon="fa-solid fa-diagram-project"
              size="2xl"
              style={{ color: "#ccdfff" }}
            />
            <a href="https://graphql.org/learn/">GraphQL</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon
              icon="fa-brands fa-git-alt"
              size="2xl"
              style={{ color: "#ccdfff" }}
            />
            <a href="https://git-scm.com/docs/git">git</a>
          </li>
        </ul>
      </section>
      <div className="flex flex-col items-center m-36">
        <h1 className="m-12 text-4xl text-stone-200 font-extrabold">Resume</h1>
        <button className="btn btn-lg w-auto p-4 h-auto space-x-2">
          <FontAwesomeIcon
            icon="fa-regular fa-file"
            size="2xl"
            style={{ color: "#ccdfff" }}
          />
          <a download href={pdf}>
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Resume;
