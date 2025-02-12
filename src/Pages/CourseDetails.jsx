import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import CourseDeProps from "../Components/CourseDeProps";

export default function CourseDetails() {
  return (
    <>
      <Header></Header>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <CourseDeProps
                title="ReactJS"
                subtitle="reactjs"
                subtext1="ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.
ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.
Our ReactJS tutorial includes all the topics which help to learn ReactJS. These are ReactJS Introduction, ReactJS Features, ReactJS Installation, Pros and Cons of ReactJS, ReactJS JSX, ReactJS Components, ReactJS State, ReactJS Props, ReactJS Forms, ReactJS Events, ReactJS Animation and many more."
                subtext2="Flexibility: React allows you to build high-quality user interfaces across different platforms, thanks to its flexible library approach.
Great Developer Experience: React makes it easier to write and understand code, offering a smooth development process.
Strong Support from Facebook: Regular updates, bug fixes, and resources from Facebook ensure React stays up-to-date and reliable.
Vast Community Support: React benefits from a large community, providing enough resources, tutorials, and troubleshooting help.
Excellent Performance: React’s efficient Virtual DOM ensures fast rendering and high performance for web applications.
Easy Testing: React’s structure and tools make testing simpler, improving code reliability and maintainability."
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
