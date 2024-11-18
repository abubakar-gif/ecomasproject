import React, { useEffect, useState } from "react";
import "./hero.css";
import kids_banner from "../Assets/banner_kids.png";

export default function Top() {
  const [topimage,settopimage]=useState()
  const [currentSlide, setCurrentSlide] = useState(0);

  function getTopimage() {
    fetch("http://localhost:4000/top-getimage")
      .then((res) => res.json())
      .then((data) => {
        settopimage(data.data);
        console.log(data.data);
      });
  }

  useEffect(() => {
    getTopimage();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % topimage.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [topimage]);

  return (
    <div>
      {
        <div className="conntner">
          {topimage && topimage.length > 0
            ? topimage.map((slide, index) => (
                <img
                  src={slide?.image}
                  key={index}
                  className={`${index === currentSlide ? "imageFalse" : "topimage"} "image"`}


                />
              ))
            : null}
          <button
            onClick={() =>
              setCurrentSlide(
                (prevSlide) =>
                  (prevSlide - 1 + topimage.length) % topimage.length
              )
            }
            className="rightbutton"
          >
            1
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % topimage.length)
            }
            className="leftnutton"
          >
            2
          </button>
        </div>
      }

      {/* <img className="topimage" src={kids_banner} alt="" /> */}
    </div>
  );
}
