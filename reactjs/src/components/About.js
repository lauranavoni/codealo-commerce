import React from "react";
//import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-3 my-3">
        <div className="col">
          <div className="col-md-auto">
            <h1 className="fw-bold mb-3"class="text-white" font-size="1.1rem" font-family="Poppins, sans-serif" >Nosotros</h1>
            <p className="lead mb-4">
       
              <h5 class="text-white" font-size="1.1rem" font-family="Poppins, sans-serif"  >
                Tenemos una lista de cursos recomendada por nosotros para que
                aprendas a programar, mejorar tu lógica o aprender algo nuevo.
              </h5>
            </p>
            {/*<NavLink to="/contact" className="btn btn-outline-primary px-2
            ">
              Contacto
            </NavLink>*/}
          </div>
          <div className="col-md-auto d-block">
            <img
              src="/assets/5a.png"
              alt="About Us"
              height="110%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
