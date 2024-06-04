import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At Heritage Medical Institute, we believe in the power of 
          preventative care.Our dedicated team emphasizes the importance
          of regular check-ups and early detection to maintain your health 
          and prevent illness. With cutting-edge technology and innovative treatment 
          options, we are equipped to handle a wide range of medical conditions, 
          ensuring you receive the best possible care. 
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector"  />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
