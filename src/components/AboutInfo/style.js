import styled from "styled-components";

const AboutInfoStyle = styled.div`
  padding: 20rem 0 10rem;
  .topSection {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  .left-text {
    flex: 3 1 0%;
    .subtitle {
      font-size: 2.2rem;
      margin-bottom: 2rem;
    }
    .name {
      border-radius: 8px;
      padding: 0.5rem;
      background-color: #a97da8;
      background-image: linear-gradient(45deg, #f3ec78, #ff1cf7);
      background-size: 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
    h2 {
      font-size: 3.6rem;
      margin-bottom: 3rem;
    }

    .para {
      max-width: 100%;
      line-height: 1.3em;
      margin-bottom: 4rem;
    }
  }

  .right-img {
    flex: 2 1 0%;
    text-align: center;

    img {
      width: 90%;
      border: 2px solid var(--gray-1);
    }
  }

  .botSection {
    margin-top: 15rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0 10rem;
    .topSection {
      flex-direction: column;
    }

    .left-text {
      h2 {
        font-size: 2.8rem;
      }

      .subtitle {
        font-size: 1.8rem;
      }
    }
  }
`;

export default AboutInfoStyle;
