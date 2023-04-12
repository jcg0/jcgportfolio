import React from "react";
import cardImg from "../../assets/FullSizeRender.jpg";
function About() {
  return (
    <div className="aboutme-card mt-24 mb-24">
      <div className="card card-side bg-base-100 border sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="carousel rounded-box">
          <div className="carousel-item sm:w-full md:w-full lg:w-full xl:w-full max-h-full">
            <img
              src={cardImg}
              className="w-full prof-img"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
        <div className="m-5 p-6">
          <h1 className="text-4xl text-stone-200 font-extrabold">About me</h1>
          <p className="text-lg text-stone-200 w-64">
            I am an easy going person who loves the spending time with my
            family, sports, coding, and spending time outside. I love picking up
            all different types of hobbies. From pottery to gardening I have a
            wide variety of things that I enjoy doing. I love learning new
            things and try to learn something new everyday.
          </p>
        </div>
      </div>
      {/* <div>
        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full">
            <img
              src={cardImg}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-2xl ">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-stone-200 font-extrabold">
              About Me
            </h2>
            <p>
              I am an easy going person who loves the spending time with my
              family, sports, coding, and spending time outside. I love picking
              up all different types of hobbies. From pottery to gardening I
              have a wide variety of things that I enjoy doing. I love learning
              new things and try to learn something new everyday.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
