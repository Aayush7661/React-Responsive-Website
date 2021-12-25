import React from "react";
import Navbar from "./Navbar";
export const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner_content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Devlivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              suscipit laboriosam lorem start.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DELIVRY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
