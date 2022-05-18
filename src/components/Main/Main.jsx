import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import Testimonial from "./Testimonial/Testimonial";
import { emily, thomas, jenny } from "../../images/index";
import {
  facebook,
  instagram,
  twitter,
  pinterest,
  arrow,
} from "../../images/index";

import {
  egg,
  orange,
  heading,
  standOut,
  cherry,
  photography,
  cone,
  milkBottles,
  sugar,
} from "../../images/index";

import {
  headingDesktop,
  eggDesktop,
  standOutDesktop,
  cherryDesktop,
  photographyDesktop,
  coneDesktop,
  orangeDesktop,
  milkBottlesDesktop,
  sugarDesktop,
} from "../../images/index";
function Main() {
  const testimoniasData = [
    {
      avatar: emily,
      feedback:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emely R.",
      position: "Marketing Director",
    },
    {
      avatar: thomas,
      feedback:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "  Thomas S.",
      position: "Chief Operating Officer",
    },
    {
      avatar: jenny,
      feedback:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      position: "Business Owner",
    },
  ];
  return (
    <div className="Main">
      <Navbar />
      <div className="landing">
        <img src={heading} alt="" className="mobile" />
        <img src={headingDesktop} alt="" className="desktop" />
        <div className="we-are-creative">
          <h1> We are creatives</h1>
          <div className="arrow">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="section-wrapper">
        <div className="egg">
          <img src={egg} alt="egg" className="mobile" />
          <img src={eggDesktop} alt="" className="desktop" />
        </div>
        <div className="transform-your-brand desc">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h4>Learn more</h4>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-unreversed">
        <div className="glass">
          <img src={standOut} alt="stand-out" className="mobile" />
          <img src={standOutDesktop} alt="stand-out" className="desktop" />
        </div>
        <div className="standout-description desc">
          <h1> Stand out to the right audience</h1>
          <p>
            {" "}
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <h4> Learn more</h4>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-unreversed">
        <div className="cherry">
          <img src={cherry} alt="chery" className="mobile" />
          <img src={cherryDesktop} alt="cherry" className="desktop" />
          <div className="desc design">
            <h1>Graphic design</h1>
            <p>
              {" "}
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="photography cherry">
          <img src={photography} alt="" className="mobile" />
          <img src={photographyDesktop} alt="cherry" className="desktop" />
          <div className="desc design">
            <h1> Photography</h1>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h4 id="head"> Client testimonials</h4>
        <div className="testimonials-wrapper">
          {testimoniasData.map((person) => {
            return <Testimonial {...person} key={person.name} />;
          })}
        </div>
      </div>
      <div className="gallery">
        <img src={milkBottles} alt="" className="mobile" />
        <img src={orange} alt="" className="mobile" />
        <img src={cone} alt="" className="mobile" />
        <img src={sugar} alt="" className="mobile" />
        <img src={milkBottlesDesktop} alt="" className="desktop" />
        <img src={orangeDesktop} alt="" className="desktop" />
        <img src={coneDesktop} alt="" className="desktop" />
        <img src={sugarDesktop} alt="" className="desktop" />
      </div>
      <div className="footer">
        <h1>sunnyside</h1>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <div className="social-media">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.tarakumarsunuwar.com.np">Tara Kumar Sunuwar</a>.
      </div>
    </div>
  );
}

export default Main;
