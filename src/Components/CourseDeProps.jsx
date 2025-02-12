import React from "react";

export default function CourseDeProps(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 m-auto"
            style={{ backgroundColor: "lightblue", padding: "10px" }}
          >
            <h3> Name Of Tutorial {props.title}</h3>
            <h3>Learn {props.subtitle} Tutorial</h3>
            <div className="Sub-Font">{props.subtext1}</div>
          </div>
          <div className="col-sm-12 mt-2"   style={{ backgroundColor: "#F3ECEA", padding: "10px" }} >
            <h3>Learn {props.subtitle} Tutorial</h3>
            <div className="Sub-Font">{props.subtext2}</div>
          </div>

          <div className="container py-5">
            <div className="text-center Section-Heading ">Services</div>
            <div className="text-center Flex-Center">
              {/* <img
                src={underlineAbout}
                alt="not"
                className="underline_img_Learning"
              /> */}
            </div>
            <div className="text-center Sub-Font">
              Services are tailored to meet the
            </div>
            {/* Row Second  */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                {/* Accordian  */}

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
                          <b>Organizational Design and Change Management</b>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body Sub-Font accordion-body-Digital">
                         effective change management strategies to
                          drive successful transformations.
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
                          Our experts help businesses develop comprehensive
                          strategies that align with their objectives and help
                          them achieve their goals.
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
                          We help organizations optimize their processes to
                          improve efficiency and reduce costs.
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
                          In order to help businesses measure and improve their
                          performance, we develop and implement performance
                          management frameworks.
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

                          <b>Capability Building </b>
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body Sub-Font accordion-body-Digital ">
                          they need to succeed in today's digital
                          age.
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
    </>
  );
}
