import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" className="animated-image"/>
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          
          <p>We are all in 2024!</p>
          
          <p>
          Welcome to  Heritage Health Care, one of India’s leading healthcare 
          providers. Our esteemed institution boasts a diverse team of specialized 
          doctors including ENT specialists, physical therapists, cardiologists, 
          and more, ensuring comprehensive medical care for all our patients.
          </p>
          <p>At Heritage Health Care, we are committed to delivering exceptional
           health services with a focus on timely and efficient response to all medical 
           needs. Our facilities are equipped with state-of-the-art technology and maintained
            to the highest standards of cleanliness and hygiene, ensuring a safe and comfortable 
            environment for our patients.</p>
          <p>We pride ourselves on having a team of highly skilled and experienced doctors who are
           not only experts in their respective fields but also compassionate and dedicated to providing 
           the best possible care. Our services are designed to be affordable, making top-quality 
           healthcare accessible to everyone.</p>
           <p>Choose Heritage Health Care for reliable, efficient, and patient-centered medical services.
            Your health and well-being are our top priorities, and we strive to exceed your expectations every
            time you visit.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
