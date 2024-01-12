import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import projects from "../assets/projects/projects";
import ProjectItem from "../components/ProjectSection/ProjectItem/ProjectItem";
const ProjectStyle = styled.div`
  padding: 10rem 0 10rem;

  .projectCards {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    flex-direction: row;
    margin-top: 10rem;
    justify-content: flex-start;
    align-content: center;
  }

  .card0,
  .card1,
  .card2,
  .card3,
  .card4 {
    width: 350px;
  }

  @media only screen and (max-width: 768px) {
    .projectCards {
      flex-direction: column;
    }
    .card0,
    .card1,
    .card2,
    .card3 {
      width: 300px;
    }
  }
`;
function Projects() {
  return (
    <ProjectStyle>
      <div className="container">
        <SectionTitle subtitle="My Recent Works" title="PROJECTS" />
        <div className="projectCards">
          {projects.map((project, index) => {
            return (
              <div className={"card" + index}>
                <ProjectItem
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </ProjectStyle>
  );
}

export default Projects;
