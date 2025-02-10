import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css"; // Import styles if needed
// import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGooglePlusG } from "react-icons/fa";

import {
  arrowForward,
  logoTwitter,
  logoFacebook,
  logoLinkedin,
  logoInstagram,
  logoGoogle,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Footer = () => {
  return (
    <>
      <div className="container-fluide">
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                {/* About Us Section */}
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>About Us</h4>
                  <ul>
                    <li>
                      <IonIcon icon={arrowForward} /> <Link to="/">Home</Link>
                    </li>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/services">Our services</Link>
                    </li>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/terms">Terms &amp; conditions</Link>
                    </li>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/privacy">Privacy policy</Link>
                    </li>
                  </ul>
                </div>

                {/* Useful Links Section */}
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/lorem">Lorem ipsum</Link>
                    </li>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/pellentesque">Pellentesque</Link>
                    </li>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/suspendisse">Suspendisse egestas</Link>
                    </li>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/nulla">Nulla tristique</Link>
                    </li>
                    <li>
                      <IonIcon icon={arrowForward} />{" "}
                      <Link to="/phasellus">Phasellus leo</Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    1300 Center Avenue
                    <br />
                    Fresno, California
                    <br />
                    United States <br />
                    <strong>Phone:</strong> +123-456-7890
                    <br />
                    <strong>Email:</strong> info@example.com
                  </p>

                  <div className="social-links">
                    <Link to="/lorem">
                      <IonIcon icon={logoTwitter} />
                    </Link>
                    <a href="#">
                      <IonIcon icon={logoFacebook} />
                    </a>
                    <a href="#">
                      <IonIcon icon={logoLinkedin} />
                    </a>
                    <a href="#">
                      <IonIcon icon={logoInstagram} />
                    </a>
                    <a href="#">
                      <IonIcon icon={logoGoogle} />
                    </a>
                  </div>
                </div>

                {/* Subscription Section */}
                <div className="col-lg-3 col-md-6 footer-newsletter">
                  <h4>Subscription</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>

                  <div className="row g-2 mx-0">
                    <div className="col-sm-8 col-md- col-lg- col-xl-">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        //   value={email}
                        //   onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 col-md- col-lg- col-xl- text-center">
                      <input
                        type="submit"
                        className="button-default-class-black"
                        value="Subscribe"
                      />
                    </div>
                  </div>

                  <div className="row g-3 mx-0">
                    {/* <div  className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <input
                      type="text"
                       className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div> */}

                    {/* <div  className="col-sm-12 col-md-3 col-lg-3 col-xl-3"> */}
                    {/* <input */}
                    {/* type="tel" */}
                    {/* className="form-control" */}
                    {/* placeholder="Phone No." */}
                    {/* aria-label="Phone" */}
                    {/* value={phone} */}
                    {/* onChange={(e) => setPhone(e.target.value)} */}
                    {/* /> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 copyright">
                Copyright © {new Date().getFullYear()} <a href="/">Tech-Iki</a>. 
                All Rights Reserved
              </div>
              {/* <div className="col-md-6 credit">
                Template by <a href="">HTML Codex</a>
              </div> */}
            </div>
          </div>

        
        </footer>
      </div>
    </>
  );
};

export default Footer;
