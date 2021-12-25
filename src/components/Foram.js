import React from "react";

const Foram = () => {
  return (
    <div className="foram">
      <div className="col-2 foram_text">
        <h3>Quick Delivery</h3>
        <h1>ORDER A </h1>
        <h1>PIZZA NOW</h1>
        <p>
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius. Claritas est etiam processus.
        </p>
        <form className="form">
          <input type="text" placeholder="First Name" className="first filed" />
          <input type="text" placeholder="Last Name" className="last filed" />
          <input
            type="text"
            placeholder="Enter Street Address"
            className="add filed"
          />
          <input
            type="text"
            placeholder="Apartment / Room"
            className="apartment filed"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="number filed"
          />
          <input
            type="text"
            placeholder="PizzaType"
            className="pizzatype filed"
          />

          <input type="text" placeholder="Size" className="size filed" />
        </form>
        <button className="foram_btn">QUICK DELIVERY</button>
      </div>
      {/* <div className="col-2 bg">
        <img
          src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/maestropizzini-contact-bg.jpg"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Foram;
