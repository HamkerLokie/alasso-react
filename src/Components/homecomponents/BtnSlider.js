import React from "react";
import "./Slider.css";


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button 
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? '/icons/right.arrow(team page).png' : '/icons/left.arrow(team page).png'} alt="arrow" />
    </button>
  );
}
