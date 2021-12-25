import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="first_footer">
          <h1>About us</h1>
          <p className="first_footer_main">
            Investigationes demonstraverunt lectores legere me lius quod ii
            legunt saepius. Eodem modo typi, qui nunc nobis videntur.
            Investigationes demonstraverunt lectores legere me lius quod ii
            legunt saepius. Investigationes demonstraverunt lectores.
          </p>
          <p className="ab">
            <strong>Monday to Saturday:</strong> 9.00 am to 9.00 pm
          </p>
          <p className="cd">
            <strong>Sunday:</strong> 10.00 am to 6.00 pm
          </p>
        </div>
        <div className="secont_footer">
          <div className="footer_Link">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="">Need help ? Contact us</a>
              </li>
              <li>
                <a href="">Qur latest</a>
                <li>
                  <a href="">About us page</a>
                </li>
                <li>
                  <a href="">Table booking</a>
                </li>
                <li>
                  <a href="">Fast delivery</a>
                </li>
              </li>
            </ul>
          </div>
          <div className="footer_Recepies">
            <h3>Recepies</h3>
            <ul>
              <li>
                <a href="">Pizza Biscuit Bake</a>
              </li>
              <li>
                <a href="">Pizza Margeritta</a>
              </li>
              <li>
                <a href="">Pizza Prosciutto</a>
              </li>
              <li>
                <a href="">Pizza Low Carb</a>
              </li>
              <li>
                <a href="">Pizza Del Sole</a>
              </li>
            </ul>
          </div>
          <div className="footer_contact">
            <h3>Contact us</h3>
            <p>
              <i class="fas fa-phone">
                <span>(+40) 74 0920 2288</span>
              </i>
            </p>
            <p>
              <i class="fas fa-envelope">
                <span>office@example.com</span>
              </i>
            </p>
            <p>
              <i class="fas fa-map-marker-alt">
                <span>India</span>
              </i>
            </p>
          </div>
        </div>
      </div>
      <div className="rights">
        <p> Copyright by ModelThema.All Rights Reserved. </p>{" "}
      </div>
    </>
  );
};

export default Footer;
