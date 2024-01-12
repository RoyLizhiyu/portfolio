import React from "react";
import { NavLink } from "react-router-dom";
import ProjectItemStyle from "./style";
function ProjectItem({ img, title, description, href }) {
  return (
    <ProjectItemStyle>
      <NavLink to="/projects" className="projectItemImg">
        <img src={img} alt="projectPicture" />
      </NavLink>
      <div className="projectItemInfo">
        <h3 className="projectItemTitle">{title}</h3>
        <p className="projectItemDescription">{description}</p>
        {href && (
          <p className="projectItemDescription">
            Explore Here:{" "}
            <a target="_blank" href={href} rel="noreferrer">
              <u style={{ color: "#3366CC" }}> {href}</u>
            </a>
          </p>
        )}
      </div>
    </ProjectItemStyle>
  );
}

export default ProjectItem;