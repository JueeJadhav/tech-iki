import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CourseDetails from '../Components/CourseDeProps'

export default function LandingPage() {
  return (
    <div>
      <Header/>
     
      <div className="container py-5">
            <div className="text-center Section-Heading ">
              Our Business Transformation Services
            </div>
            <div className="text-center Flex-Center">
              {/* <img
                src={underlineAbout}
                alt="not"
                className="underline_img_Learning"
              /> */}
            </div>
            <div className="text-center Sub-Font">
              Our Business Transformation Services are tailored to meet the
              specific needs of our clients. We provide end-to-end support for
              organizations looking to optimize their processes, improve their
              performance, and enhance their customer experience.
            </div>
            {/* Row Second  */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                {/* Accordian  */}
                <div className="col-sm-12 ">
                  <div className="row mt-1">
                    {/* <div className="col-sm-1"></div> */}
                    <div className="col-sm-12">
                      <div className="">
                        <div className="accordion" id="accordionExample">
                          {/* item 1 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button accordion-buttonn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <div className="Sub-Font  text-dark">1. </div>
                                <b>
                                  Organizational Design and Change Management
                                </b>
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                               cessful transformations.
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button accordion-buttonn  collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <div className="Sub-Font  text-dark">2.</div>
                                <b>Strategy Consulting</b>
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                                Our experts help businesses develop
                                comprehensive strategies that align with their
                                objectives and help them achieve their goals.
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button accordion-buttonn collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <div className="Sub-Font  text-dark">3.</div>

                                <b>Process Re-engineering and Optimization</b>
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                                We help organizations optimize their processes
                                to improve efficiency and reduce costs.
                              </div>
                            </div>
                          </div>
                          {/* item 4 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button accordion-buttonn collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                <div className="Sub-Font  text-dark">4.</div>
                                <b>Performance Management and Metrics</b>
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                                In order to help businesses measure and improve
                                their performance, we develop and implement
                                performance management frameworks.
                              </div>
                            </div>
                          </div>
                          {/* item 5 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                              <button
                                className="accordion-button accordion-buttonn collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                <div className="Sub-Font  text-dark">5.</div>

                                <b>Capability Building (TDTL 4.0 Framework)</b>
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFive"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital ">
                               hey need to succeed in today's
                                digital age.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* main col 2 */}
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="col-sm-12">
                  <div className="row">
                    {/* <div className="col-sm-1"></div> */}
                    <div className="col-sm-12">
                      <div className="Margine-top-FAQ">
                        <div className="accordion" id="accordionExample">
                          {/* item 6 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                              <button
                                className="accordion-button accordion-buttonn collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                              >
                                <div className="Sub-Font  text-dark">6.</div>

                                <b>5S – Safety standards</b>
                              </button>
                            </h2>
                            <div
                              id="collapseSix"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingSix"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                                We provide consulting services to help
                                businesses comply with 5S safety standards and
                                improve workplace safety.
                              </div>
                            </div>
                          </div>
                          {/* item 7 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                              <button
                                className="accordion-button accordion-buttonn  collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                              >
                                <div className="Sub-Font  text-dark">7.</div>

                                <b>QS9000 Series consultations and audits</b>
                              </button>
                            </h2>
                            <div
                              id="collapseSeven"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingSeven"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                                To help businesses meet QS9000 series quality
                                standards we provide consultations and audits
                                services
                              </div>
                            </div>
                          </div>
                          {/* item 8 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingten">
                              <button
                                className="accordion-button accordion-buttonn  collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEight"
                                aria-expanded="false"
                                aria-controls="collapseEight"
                              >
                                <div className="Sub-Font  text-dark">8.</div>

                                <b>ISO Series consultations and audits</b>
                              </button>
                            </h2>
                            <div
                              id="collapseEight"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingEight"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                                Our experts provide consultations and audits to
                                help businesses achieve ISO certifications and
                                meet international quality standards.
                              </div>
                            </div>
                          </div>

                          {/* item 9 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingNine">
                              <button
                                className="accordion-button accordion-buttonn  collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseNine"
                                aria-expanded="false"
                                aria-controls="collapseNine"
                              >
                                <div className="Sub-Font  text-dark">9.</div>

                                <b>People Advisory and HR Audits</b>
                              </button>
                            </h2>
                            <div
                              id="collapseNine"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingNine"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                                Our team provides advisory services to help
                                businesses improve their people practices and
                                conduct HR audits to identify areas for
                                improvement.
                              </div>
                            </div>
                          </div>

                          {/* item 10 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingten">
                              <button
                                className="accordion-button accordion-buttonn  collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseten"
                                aria-expanded="false"
                                aria-controls="collapseten"
                              >
                                <div className="Sub-Font  text-dark">10.</div>

                                <b>DEIB consulting</b>
                              </button>
                            </h2>
                            <div
                              id="collapseten"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingten"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body Sub-Font accordion-body-Digital">
                                We offer consulting services to help
                                organizations create diverse, equitable, and
                                inclusive workplaces.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      <Footer/>
      </div>
  )
}
