import React from "react";
import pdf from "../../assets/JeffersonGriebelResume.pdf";

function Resume() {
  return (
    <div>
      <div className="flex flex-col items-center m-36">
        <h1 className="m-12 text-4xl text-stone-200 font-extrabold">Resume</h1>
        <a download href={pdf}>
          Download Resume
        </a>
      </div>

      <section className="flex flex-col items-center">
        <h2 className="text-4xl text-stone-200 font-extrabold m-6">Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>nodejs</li>
          <li>MongoDB</li>
          <li>MySql</li>
          <li>Express</li>
          <li>GraphQl</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
