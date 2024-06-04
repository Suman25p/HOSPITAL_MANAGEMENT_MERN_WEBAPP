import React from "react";

const About= ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" className="animated-image"/>
        </div>
        <div className="banner">
          <h3>Who We Are</h3>
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
            <p>In addition to our specialist services, we offer a range of preventive health programs and
             wellness checks to help you maintain optimal health. Our comprehensive health packages are 
             tailored to meet the needs of individuals and families, promoting early detection and effective
             management of potential health issues.</p>
             <p>Patient comfort and satisfaction are at the heart of our operations. We have streamlined our 
             appointment and consultation processes to minimize waiting times and ensure a hassle-free experience.
             Our friendly and professional staff are always available to assist with any queries or concerns, 
             ensuring that you receive personalized care at every step of your journey with us.</p>
           <p>Choose Heritage Health Care for reliable, efficient, and patient-centered medical services.
            Your health and well-being are our top priorities, and we strive to exceed your expectations every
            time you visit.</p>
        </div>
      </div>
    </>
  );
};

export default About;
