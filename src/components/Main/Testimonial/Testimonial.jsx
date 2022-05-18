import React from "react";
import "./Testimonial.css";
function Testimonial({ avatar, feedback, name, position }) {
  return (
    <div className="Testimonial desc">
      <img src={avatar} alt="person" />
      <p>{feedback}</p>
      <div className="person-detail">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Testimonial;
