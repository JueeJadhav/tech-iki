import React, { Component } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import {
  MdOutlineArrowForward,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
// import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import { Link } from "react-router-dom";
import "../Styles/Hamburger.css";
import { Dropdown } from "react-bootstrap";
// import dropdown_arrow_img from '../Images/dropdown-arrow-img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default class HamburgerMenu extends Component {
  display_menu_function() {
    var open_menu = document.getElementById("display_menu");
    open_menu.style.width = "250px";
    open_menu.style.zIndex = "1";

    var shift_hamburger_toggle = (document.getElementById(
      "hamburger_wrapper"
    ).style.right = "0px");
  }
  close_menu_function() {
    var open_menu = (document.getElementById("display_menu").style.width =
      "0px");
    var shift_hamburger_toggle = (document.getElementById(
      "hamburger_wrapper"
    ).style.right = "0px");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row py-2">
            <div className="col d-flex flex-column align-items-end justify-content-end px-0">
              <div
                className="icon_wrapper d-flex flex-column align-items-center justify-content-center px-0"
                id="hamburger_wrapper"
                onClick={this.display_menu_function}
              >
                <RxHamburgerMenu
                  className="hamburger_menu_icon"
                  onClick={this.display_menu_function}
                  id="menu_icon"
                />
              </div>

              <div className="hamburger_display_menu" id="display_menu">
                <div className="icon_wrapper_close d-flex align-items-center justify-content-start">
                  <RxCross1
                    className="close_icon my-2 mx-3 text-start"
                    onClick={this.close_menu_function}
                  />
                </div>
                <ul className="hamburger_menu_list px-4 py-3 my-2 text-start">
                  <li>
                    <Link to="/" className="fs-4">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/about-us" className="fs-4">
                      About
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/csr" className="fs-4">
                      CSR
                    </Link>
                  </li> */}

                  {/* <div  className="dropdown drop-text">
                      <button
                         className="btn services-dropdown dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        SERVICES
                      </button>
                      <ul  className="dropdown-menu">
                        <li>
                          <a
                             className="dropdown-item"
                            href="/digital_transformation"
                          >
                            DIGITAL TRANSFORMATION
                          </a>
                        </li>
                        <li>
                          <a
                             className="dropdown-item"
                            href="/learning-transformation"
                          >
                            LEARNING TRANSFORMATION
                          </a>
                        </li>
                        <li>
                          <a
                             className="dropdown-item"
                            href="/business-transformation"
                          >
                            BUSINESS TRANSFORMATION
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div  className="dropdown drop-text">
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
                  {/* <li>
                          <a  className="dropdown-item" href="/panther-diaries">
                            PANTHER DIARIES
                          </a>
                        </li>
                        <li>
                          <a  className="dropdown-item" href="/sutradhar-hr">
                            SUTRADHAR HR
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  {/* <Link to="/Career" className="fs-4">
                      Career
                    </Link> */}

                  <div>
                    <a
                      className="btn bg-black text-white dropmenu"
                      data-bs-toggle="collapse"
                      href="#menu1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      SERVICES
                    </a>
                    <FontAwesomeIcon
                      className="px-2 text-white"
                      icon={faCaretDown}
                    />
                    <div className="collapse" id="menu1">
                      <div className="card card-body bg-black text-white">
                        <li className="">
                          <Link
                            to="/business-transformation"
                            className="text-white "
                          >
                            {" "}
                            Business Transformation
                          </Link>

                          {/* <a  className="text-white" href="/business-transformation">
                            Business Transformation
                          </a> */}
                        </li>
                        <li>
                          <Link
                            to="/digital-transformation"
                            className="text-white "
                          >
                            {" "}
                            Digital Transformation
                          </Link>

                          {/* <a  className="text-white " href="/digital-transformation">
                            Digital Transformation
                          </a> */}
                        </li>
                        <li>
                          <Link
                            to="/learning-transformation"
                            className="text-white "
                          >
                            {" "}
                            Learning Transformation
                          </Link>
                          {/* <a  className="text-white " href="/learning-transformation">
                            Learning Transformation
                          </a> */}
                        </li>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      className="btn bg-black text-white dropmenu"
                      data-bs-toggle="collapse"
                      href="#menu2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      INITIATIVE
                    </a>
                    <FontAwesomeIcon
                      className="px-2 text-white"
                      icon={faCaretDown}
                    />
                    <div className="collapse" id="menu2">
                      <div className="card card-body bg-black text-white">
                        <li className="">
                        <Link to="/panther-diaries" className="text-white ">   Panther Diaries</Link>

                          {/* <a className="text-white" href="/panther-diaries">
                            Panther Diaries
                          </a> */}
                        </li>
                        <li>
                        <Link to="/sutradhar-hr" className="text-white ">  SUTRADHAR HR</Link>

                          {/* <a className="text-white " href="/sutradhar-hr">
                            SUTRADHAR HR
                          </a> */}
                        </li>
                      </div>
                    </div>
                  </div>

                  <li>
                    <Link to="/contact-us" className="fs-4">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/Industries" className="fs-4">
                      Industries
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/panther-diaries" className="fs-4">
                      Panther Diaries
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning-Transformation" className="fs-4">
                      Learning Transformation
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital_Transformation" className="fs-4">
                      Digital Transformation
                    </Link>
                  </li>
                  <li>
                    <Link to="/business-transformation" className="fs-4">
                      Business Transformation
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
