import styled from "styled-components";

const Style = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    color: white;
    text-align: center;
    font-family: "Montserrat";
    background-color: #a97da8;
    background-image: linear-gradient(45deg, #f3ec78, #ff1cf7);
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default Style;
