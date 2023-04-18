import React from "react";
import Navigation from "./Navigation";
import "../index.css";

function Header(props) {
  return (
    <div className="header text-4xl text-neutral font-extrabold bg-accent shadow-xl">
      <p className="name">Jefferson Griebel</p>
      <Navigation handlePageChange={props.handlePageChange} />
    </div>
  );
}

export default Header;
