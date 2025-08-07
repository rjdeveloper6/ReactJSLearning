import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        We are a leading food delivery service, committed to bringing you the
        best dining experiences from your favorite restaurants.
      </p>
      <p>
        Our mission is to provide fast, reliable, and convenient food delivery
        to your doorstep.
      </p>
      <User
        name={"Rhushikesh"}
        contact={"1234567890"}
        email={"rhushikesh@example.com"}
      ></User>
      <UserClass></UserClass>
    </div>
  );
};

export default About;
