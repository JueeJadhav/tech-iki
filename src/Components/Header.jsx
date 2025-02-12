import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Tech_Logo from "../Images/Tech_Logo.jpg";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaUser,
//   FaSignInAlt,
//   FaHome,
//   FaUserAlt,
//   FaCommentAlt,
//   FaBell,
//   FaCog,
//   FaPowerOff,
// } from "react-icons/fa";

export default function Header() {
  return (
    <div>
        {/* <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
            <div className="row gx-0 align-items-center">
          
              <div className="col-lg-8 text-center text-lg-start mb-2 -lg-0">
                <div className="d-flex flex-wrap">
                  <Link to="/" className="text-muted small me-4">
                    <FaMapMarkerAlt className="text-primary me-2" />
                    Find A Location
                  </Link>
                  <a href="tel:+01234567890" className="text-muted small me-4">
                    <FaPhoneAlt className="text-primary me-2" />
                    +01234567890
                  </a>
                  <a
                    href="mailto:example@gmail.com"
                    className="text-muted small me-0"
                  >
                    <FaEnvelope className="text-primary me-2" />
                    Example@gmail.com
                  </a>
                </div>
              </div>

           
              <div className="col-lg-4 text-center text-lg-end">
                <div
                  className="d-inline-flex align-items-center"
                  style={{ height: "45px" }}
                >
                  <Link to="/register" className="me-3 text-dark">
                    <small>
                      <FaUser className="text-primary me-2" />
                      Register
                    </small>
                  </Link>
                  <Link to="/login" className="me-3 text-dark">
                    <small>
                      <FaSignInAlt className="text-primary me-2" />
                      Login
                    </small>
                  </Link>

                 
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle text-dark"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <small>
                        <FaHome className="text-primary me-2" /> My Dashboard
                      </small>
                    </a>
                    <div className="dropdown-menu rounded">
                      <Link to="/profile" className="dropdown-item">
                        <FaUserAlt className="me-2" /> My Profile
                      </Link>
                      <Link to="/inbox" className="dropdown-item">
                        <FaCommentAlt className="me-2" /> Inbox
                      </Link>
                      <Link to="/notifications" className="dropdown-item">
                        <FaBell className="me-2" /> Notifications
                      </Link>
                      <Link to="/settings" className="dropdown-item">
                        <FaCog className="me-2" /> Account Settings
                      </Link>
                      <Link to="/logout" className="dropdown-item">
                        <FaPowerOff className="me-2" /> Log Out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      <Navbar bg="light" expand="lg">
        <Container className="">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src={Tech_Logo} className="Tech_logo_Header" alt="not" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav Navbar-Hide" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav_Links">
              <Nav.Link href="/about-us" className="px-2">
                ABOUT US
              </Nav.Link>
              <Nav.Link href="/Industries" className="px-2">
                INDUSTRY
              </Nav.Link>

              <div  className="dropdown ">
                <button
                   className="btn services-dropdown dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </button>
                <ul  className="dropdown-menu services-dropdown-item">
                  <li>
                    <Link to="/business-transformation"  className="dropdown-item">
                      {" "}
                      BUSINESS TRANSFORMATION
                    </Link>
                    {/* <a  className="dropdown-item" href="/business-transformation">
                      BUSINESS TRANSFORMATION
                    </a> */}
                  </li>
                  <li>
                    <Link to="/digital-transformation"  className="dropdown-item ">
                      {" "}
                      DIGITAL TRANSFORMATION
                    </Link>
                    {/* <a  className="dropdown-item " href="/digital-transformation">
                      DIGITAL TRANSFORMATION
                    </a> */}
                  </li>
                  <li>
                    <Link to="/learning-transformation"  className="dropdown-item">
                      {" "}
                      LEARNING TRANSFORMATION
                    </Link>
                    {/* <a  className="dropdown-item" href="/learning-transformation">
                      LEARNING TRANSFORMATION
                    </a> */}
                  </li>
                </ul>
              </div>
              <div  className="dropdown">
                <button
                   className="btn services-dropdown dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  INITIATIVE
                </button>
                <ul  className="dropdown-menu">
                  {/* <li>
                    <a  className="dropdown-item" href="/csr">
                      CSR
                    </a>
                  </li> */}
                  <li>
                    <Link to="/panther-diaries"  className="dropdown-item ">
                      {" "}
                      PANTHER DIARIES
                    </Link>

                    {/* <a  className="dropdown-item" href="/panther-diaries">
                      PANTHER DIARIES
                    </a> */}
                  </li>
                  <li>
                    <Link to="/sutradhar-hr"  className="dropdown-item ">
                      {" "}
                      SUTRADHAR HR
                    </Link>

                    {/* <a  className="dropdown-item" href="/sutradhar-hr">
                      SUTRADHAR HR
                    </a> */}
                  </li>
                </ul>
              </div>
              <Nav.Link href="/contact-us" className="px-2 ">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <HamburgerMenu />
        </Container>
      </Navbar>
    </div>
  );
}
