import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail, MdLocationPin } from "react-icons/md";
import Paragraph from "../components/Paragraphs/Paragraph";
const ContactStyle = styled.div`
  padding: 10rem 0 10rem;
  .main {
    margin-top: 7rem;
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    position: relative;
  }

  .left {
    width: 100%;
    max-width: 500px;
  }
  .contactIcon {
    padding: 1.3rem;
    border-radius: 50%;
    background-color: var(--gray-2);
    svg {
      width: 3.5rem;
    }
  }

  .contactItem {
    display: flex;
    gap: 3rem;
    align-items: center;
    margin-top: 3rem;
    background-color: var(--deep-dark);
    padding: 2rem;
    border-radius: 15px;
  }

  .contactInfo {
    font-size: 2.8rem;
  }

  .right {
    max-width: 500px;
    width: 100%;
  }

  .forms {
    margin-bottom: 2rem;
    label {
      font-size: 1.8rem;
    }
    textarea {
      resize: none;
    }
  }
  .input {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
    background-color: var(--deep-dark);
  }
  .button {
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    font-size: 2.2rem;
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gray-1)" : "var(--deep-dark)")};
    border: 2px solid var(--gray-1);
    text-align: center;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    .main {
      flex-direction: column;
    }
  }
`;

function Contact() {
  return (
    <ContactStyle>
      <div className="container">
        <SectionTitle title="CONTACT" subtitle="Send Me A Message" />
        <div className="main">
          <div className="left">
            <div className="contactItem">
              <div className="contactIcon">
                <BsFillTelephoneFill />
              </div>
              <div className="contactInfo">
                <Paragraph>+1 (647)-676-4326</Paragraph>
              </div>
            </div>
            <div className="contactItem">
              <div className="contactIcon">
                <MdMail />
              </div>
              <div className="contactInfo">
                <Paragraph>royzhiyu.li@alumni.utoronto.ca</Paragraph>
              </div>
            </div>
            <div className="contactItem">
              <div className="contactIcon">
                <MdLocationPin />
              </div>
              <div className="contactInfo">
                <Paragraph>Toronto, Ontario, Canada</Paragraph>
              </div>
            </div>
          </div>
          <div className="right">
            <form
              className="messageForm"
              action="mailto:royzhiyu.li@alumni.utoronto.ca"
              method="GET"
            >
              <div className="forms">
                <label>
                  Subject
                  <input name="subject" className="input"></input>
                </label>
              </div>

              <div className="forms">
                <label>
                  Message
                  <textarea name="body" rows={6} className="input"></textarea>
                </label>
              </div>
              <div className="submitBtn">
                <button type="submit" className="button" value="Send">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}

export default Contact;
