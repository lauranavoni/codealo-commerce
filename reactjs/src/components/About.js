import React from "react";
//import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-3 my-3">
        <div className="col">
          <div className="col-md-auto">
            <h1 className="fw-bold mb-3">Nosotros</h1>
            <p className="lead mb-4">

            </p>
            {/*<NavLink to="/contact" className="btn btn-outline-primary px-2
            ">
              Contacto
            </NavLink>*/}
          </div>
          <div className="col-md-auto d-flex justify-content-center">
          <img src="/assets/home.jpg" alt="About Us" height="300px" width="px"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;