import styled from "styled-components";

const ProjectStyle = styled.div`
    padding: 10rem 0;

    .projectItems{
        margin-top: 5rem;
    }
    .swiper{
        padding-top: 8rem;

        }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    top: 30px; 
    color: var(--gray-1);
    border-radius: 8px;
    font-size: 2rem;
    ::after{
      font-size: 2rem;
    }
  }

  .swiper-button-next {
    right: auto;
    left: 60px;
  }

  .swiper-button-prev{
    left: 0px;
  }

`

export default ProjectStyle;