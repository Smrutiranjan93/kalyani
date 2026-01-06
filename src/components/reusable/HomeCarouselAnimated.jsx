import React, { useEffect } from "react";
import "../../styles/homeCarousel.css";

const HomeCarouselAnimated = () => {
  useEffect(() => {
    document.getElementById("next").addEventListener("click", nextSlide);
    document
      .getElementById("previous")
      .addEventListener("click", previousSlide);

    return () => {
      document.getElementById("next").removeEventListener("click", nextSlide);
      document
        .getElementById("previous")
        .removeEventListener("click", previousSlide);
    };
  }, []);

  const nextSlide = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };

  const previousSlide = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };

  return (
    <div className="maincontainer">
      <div className="container">
        <div id="slide">
          <div
            className="item"
            style={{ backgroundImage: 'url("/carousel-one.jpg")' }}
          >
            <div className="content">
              <div className="name">
                Wake Up To The Sound Of Sea In The Land Of Lord
              </div>
              <div className="description">
                Kalyani Interior where every sunrise is a melody, and every day is
                an ode to coastal living
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: 'url("/carousel-two.jpg")' }}
          >
            <div className="content">
              <div className="name">
                Wake Up To The Sound Of Sea In The Land Of Lord
              </div>
              <div className="description">
                Kalyani Interior where every sunrise is a melody, and every day is
                an ode to coastal living
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: 'url("/carousel-three.jpg")' }}
          >
            <div className="content">
              <div className="name">
                Wake Up To The Sound Of Sea In The Land Of Lord
              </div>
              <div className="description">
                Kalyani Interior where every sunrise is a melody, and every day is
                an ode to coastal living
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: 'url("/carousel-four.jpg")' }}
          >
            <div className="content">
              <div className="name">
                Wake Up To The Sound Of Sea In The Land Of Lord
              </div>
              <div className="description">
                Kalyani Interior where every sunrise is a melody, and every day is
                an ode to coastal living
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <button id="previous">{"<"}</button>
          <button id="next">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCarouselAnimated;
