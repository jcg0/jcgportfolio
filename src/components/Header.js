import React from "react";
import Navigation from "./Navigation";
import "../index.css";

function Header(props) {
  return (
    <div className="flex flex-row justify-around text-4xl text-stone-200 font-extrabold ">
      <p>Jefferson Griebel</p>
      <Navigation handlePageChange={props.handlePageChange} />
    </div>
  );
}

export default Header;
