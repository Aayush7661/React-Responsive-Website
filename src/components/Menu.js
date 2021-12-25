import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img menu">
              <img src="/img/pizza.jpg" alt="pizza" />
            </div>{" "}
          </div>{" "}
          <div className="col-6 p Menu">
            <h3> The Pizza Menu </h3>
            <h1> CHICAGO </h1>
            <h1> THIN CRUST </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.Adipisci,numquam earum ? Quod, neque voluptatem labore eius
              ea quisquam ipsa..
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Menu;
