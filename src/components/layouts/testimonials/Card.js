import React from "react";

const Card = ({ testimonial }) => {
  return (
    <div>
      <div className="">
        <p className="font-header italic text-md" >{testimonial.description}</p>
        <p>
          <b>{testimonial.name}</b>
        </p>
        <p>{testimonial.position}</p>
      </div>
    </div>
  );
};

export default Card;
