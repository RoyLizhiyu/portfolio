import React from "react";
import Button from "../Button/Button";
import Paragraph from "../Paragraphs/Paragraph";
import SectionTitle from "../SectionTitle/SectionTitle";
import aboutImg from "../../assets/images/about.jpg";
import AboutStyle from "./style";
function AboutSection() {
  return (
    <AboutStyle>
      <div className="container">
        <div className="aboutTexts">
          <SectionTitle title="ABOUT ME" subtitle="Let me introduce myself" />
          <Paragraph>
            I am a University of Toronto alumnus, currently working as a
            Front-End developer for a Tech Company in Toronto. I am always open
            to new opportunities!
          </Paragraph>

          <div className="aboutSectionBtns">
            <Button text="Works" link="/projects" outline={false} />
            <Button text="Read More" link="/about" outline={true} />
          </div>
        </div>

        <div className="aboutImg">
          <img src={aboutImg} alt="about img" />
        </div>
      </div>
    </AboutStyle>
  );
}

export default AboutSection;
