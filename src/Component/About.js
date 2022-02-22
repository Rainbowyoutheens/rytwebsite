import React from "react";
import Testimonials from "./Subcomponents/Testimonials";

function About() {
  return (
    <div>
      <div className="about-us-bg">
        <div className="about-us text-white justify-content-center">
          <h2 className="text-center">Welcome To Rainbow Youtheens</h2>
          <h4 className="text-center">Exceptional is who we are</h4>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-evenly text-center">
        <div>
          <h3>Our Mission</h3>
          <div className="red-line-short mb-2 mt-2"></div>
          <p className="lh-lg">
            <strong>
              To mould every teenager and youth <br />
              into a total person in order to help them <br />
              unleash their God given potential
            </strong>
          </p>
        </div>
        <div className="mt-5">
          <h3>Our Motto</h3>
          <div className="red-line-short mb-2 mt-2"></div>
          <p className="lh-lg">
            <strong>
              SALT AND LIGHT <br />
              (Matthew 5:13-14)
            </strong>
          </p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <div className="red-line-short mb-2 mt-2"></div>
          <p className="lh-lg">
            <strong>
              To raise an army of young people <br />
              whose heart will be on fire for Jesus as they <br />
              continue to spread the Gospel of Jesus <br />
              across the globe.
            </strong>
          </p>
        </div>
      </div>
      <div className="meet-our-team text-white">
        <h3 className="mot-top text-center">Meet Our Team</h3>
        <div className="red-line-short mb-5 mt-2"></div>
        <div className="container-fluid d-flex justify-content-between ms-5">
          <div>
            <img
              className="border border-danger border-5 rounded-circle"
              src="images/happy-people-1.jpg"
              alt=""
              width="70%"
            />
            <h4> </h4>
          </div>
          <div>
            <img
              className="border border-danger border-5 rounded-circle"
              src="images/happy-people-1.jpg"
              alt="" 
              width="70%"
            />
            <h4> </h4>
          </div>
          <div>
            <img
              className="border border-danger border-5 rounded-circle"
              src="images/happy-people-1.jpg"
              alt=""
              width="70%"
            />
            <h4> </h4>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default About;
