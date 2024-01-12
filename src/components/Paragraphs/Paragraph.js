import React from "react";
import styled from "styled-components";
const Style = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.7em;

  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
function Paragraph(props) {
  // props.children is the text inside the <>text <> angular brackets.
  return (
    <Style className="para">
      <p>{props.children}</p>
    </Style>
  );
}

export default Paragraph;
