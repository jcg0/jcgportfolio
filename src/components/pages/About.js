import React from "react";
import cardImg from "../../assets/profileImg.webp";
function About() {
  return (
    <div className="card card-side bg-base-100 border m-24">
      <figure>
        <img src={cardImg} className="w-auto" alt="Movie" />
      </figure>
      <div className="card-body">
        <h1 className="text-2xl text-stone-200 font-extrabold">About me</h1>
        <p className="text-lg text-stone-200">
          I am an easy going person who loves the spending time with my family,
          sports, coding, and spending time outside. I love picking up all
          different types of hobbies. From pottery to gardening I have a wide
          variety of things that I enjoy doing. I love learning new things and
          try to learn something new everyday.
        </p>
      </div>
    </div>
  );
}

export default About;
