import styled from "styled-components";

const Style = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    display: flex;
  }
  .heroH1 {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: block;
    }

    .heroName {
      font-size: 7rem;
      font-family: inherit;
      background-color: #a97da8;
      background-image: linear-gradient(45deg, #f3ec78, #ff1cf7);
      background-size: 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }
  .heroImg {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }

  .heroInfo {
    margin-top: -30rem;

    p {
      color: white;
    }
  }

  .heroSocial,
  .heroSocialScroll {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }

  .heroSocial {
    left: 50px;
    svg {
      transform: scale(1.25) scaleX(0.7);
    }
  }

  .heroSocialScroll {
    right: 50px;
    svg {
      transform: scale(2) scaleX(0.6);
    }
  }

  .heroSocialArrow,
  .heroSocialScroll {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-50px) rotate(-90deg);
      letter-spacing: 0.8rem;
      text-transform: uppercase;
    }
  }
  .heroSocialText {
    ul {
      li {
        margin-bottom: 1rem;

        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }

    .heroH1 {
      font-size: 1.4rem;
      margin-bottom: -2rem;

      .heroName {
        font-size: 4.5rem;
      }
    }

    .heroImg {
      height: 300px;
    }

    .heroInfo {
      margin-top: 3rem;
    }

    .heroSocial,
    .heroSocialScroll {
      p {
        font-size: 1rem;
      }

      ul {
        li {
          a {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .heroSocial {
      left: 0;
      bottom: -14%;
      width: 20px;
      .heroSocialArrow {
        width: 20px;

        svg {
          transform: scaleX(1.25) scaleY(2);
        }
      }
    }

    .heroSocialScroll {
      right: 0;
      width: 20px;
      bottom: 6%;

      svg {
        transform: scaleX(1.25) scaleY(4);
      }
    }
  }
`;

export default Style;
