import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p">
            <h3> About Us </h3>
            <h1> WELCOME TO MAESTRO PIZZINI </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Officiis
              iusto dicta quo autem tenetur ipsa dolor, minima dolorem
              reiciendis ? Impedit ?
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
