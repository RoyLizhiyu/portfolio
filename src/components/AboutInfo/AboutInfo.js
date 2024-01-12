import React from "react";
import Paragraph from "../Paragraphs/Paragraph";
import AboutInfoStyle from "./style";
import cv from "../../assets/cv.pdf";
import Style from "../Button/style";
import aboutImg from "../../assets/images/aboutInfo.jpg";
import InfoCard from "./InfoCard.js/InfoCard";
import ContactSection from "../ContactSection/ContactSection";
function AboutInfo() {
  const education = [
    {
      name: "High School",
      description: ["Guiyang No.1 High School"],
    },
    {
      name: "University",
      description: ["University of Toronto"],
    },
  ];
  const skills = [
    {
      name: "Front End",
      description: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Cypress",
        "MUI",
      ],
    },
    {
      name: "Back End",
      description: ["Express", "MongoDB", "Python", "Java"],
    },
    {
      name: "General",
      description: ["Git", "Azure Develops", "Agile development"],
    },
  ];
  return (
    <AboutInfoStyle>
      <div className="container">
        <div className="topSection">
          <div className="left-text">
            <p className="subtitle">
              Hi, I'am <span className="name">Zhiyu</span>
            </p>
            <h2>Front-end Developer</h2>
            <Paragraph>
              {para1}
              <br /> <br />
              {para2}
              <br /> <br />
              {para3}
              <br /> <br />
            </Paragraph>

            <div className="cvButton">
              <Style outline={false}>
                <a
                  href={cv}
                  target="_blank"
                  className="button"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </Style>
            </div>
          </div>

          <div className="right-img">
            <img src={aboutImg} alt="aboutImg" />
          </div>
        </div>
        <div className="botSection">
          <InfoCard title="EDUCATION" items={education} />
          <InfoCard title="MY SKILLS" items={skills} />
        </div>
      </div>
      <ContactSection />
    </AboutInfoStyle>
  );
}

export default AboutInfo;

const para1 =
  "I'm from mainland,China, I moved to Canada when I was to attend my college studies. I studied cognitive science and computer science as my majors. ";
const para2 =
  "In my years of studying computer science courses, I dived into a wide diversity of fields in programming from UI/UX design to artificial intelligence.";
const para3 =
  "After that I found a passion on the front-end, so much so that it becomes natural for me to put more efforts into programming.";
