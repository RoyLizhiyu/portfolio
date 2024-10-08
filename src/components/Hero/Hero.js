import React from "react";
import hero from "../../assets/images/hero4.jpg";
import Button from "../Button/Button";
import Paragraph from "../Paragraphs/Paragraph";
import { CgArrowLongDownL } from "react-icons/cg";
import Style from "./style";
function Hero() {
  return (
    <Style>
      <div className="hero">
        <div className="container">
          <h1 className="heroH1">
            <span>Hi there, this is </span>
            <span className="heroName">Zhiyu Li</span>
          </h1>

          <div className="heroImg">
            <img src={hero} alt="Zhiyu's img" />
          </div>

          <div className="heroInfo">
            <Paragraph>
              Frontend Developer | University of Toronto Alumnus | Bachelor of
              Science
            </Paragraph>
            <Button link="/projects" text="see my work" outline={false} />
          </div>

          <div className="heroSocial">
            <div className="heroSocialArrow">
              <p>Follow</p>
              <CgArrowLongDownL />
            </div>

            <div className="heroSocialText">
              <ul>
                <li>
                  <a href="https://www.facebook.com/zhiyu.li.946">FB</a>
                </li>
                <li>
                  <a href="https://github.com/RoyLizhiyu">GH</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/zhiyu-li-54b4a9132/">LI</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="heroSocialScroll">
            <p>Scroll</p>
            <CgArrowLongDownL />
          </div>
        </div>
      </div>
    </Style>
  );
}

export default Hero;
