import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="flex flex-row justify-around space-x-8 ">
      <li>
        <a href="#about" onClick={() => handlePageChange("About")}>
          About Me
        </a>
      </li>
      <li>
        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
      </li>
      <li>
        <a href="#contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </a>
      </li>
      <li>
        <a href="#resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
