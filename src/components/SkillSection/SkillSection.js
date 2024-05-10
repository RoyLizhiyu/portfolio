import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillItem from "./SkillItems/SkillItem";
import SkillStyle from "./style";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { BsWindow } from "react-icons/bs";
function SkillSection() {
  return (
    <SkillStyle>
      <div className="container">
        <SectionTitle title="SKILLS" subtitle="What I can do" />
        <div className="skillItems">
          <SkillItem
            title="Front-end dev"
            paragraph="3+ years of working experience with ReactJS, Typescript and JavaScript. ReactJS is my main framework."
            icon={<FaHtml5 />}
          />
          <SkillItem
            title="Back-end dev"
            paragraph="I have a working understanding on Node.js and MongoDB, I use Express middleware to connect client side and database."
            icon={<FaNodeJs />}
          />
          <SkillItem
            title="App dev"
            paragraph=" I have worked on some group projects of simple desktop applications such as an image filter and a disk usage statistics viewer for file system."
            icon={<BsWindow />}
          />
        </div>
      </div>
    </SkillStyle>
  );
}

export default SkillSection;
