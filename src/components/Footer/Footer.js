import React from "react";
import Paragraph from "../Paragraphs/Paragraph";
import LinkColumn from "./LinkColumn";
import FooterStyle from "./style";

function Footer() {
  const year = new Date().getFullYear();
  const links1 = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Projects",
      url: "/project",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  const links2 = [
    {
      name: "+1 (647)-676-4326",
      url: "tel:6476764326",
    },
    {
      name: "lzy965081880@gmail.com",
      url: "mailto:lzy965081880@gmail.com",
    },
    {
      name: "Toronto, Ontario, Canada",
      url: "https://goo.gl/maps/9EgDUz3cdDj99gtH9",
    },
  ];
  const links3 = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/zhiyu.li.946",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/zhiyu-li-54b4a9132/",
    },
    {
      name: "Github",
      url: "https://github.com/RoyLizhiyu",
    },
  ];
  return (
    <FooterStyle>
      <div className="container">
        <div className="column1">
          <h2 className="footerTitle">Zhiyu Li</h2>
          <p className="footerParagraph">
            Front End Developer located in the Greater Toronto Area. Bachelor of
            Science studies from the University of Toronto.
          </p>
        </div>
        <div className="column2">
          {" "}
          <LinkColumn title="Important Links" links={links1} />{" "}
        </div>
        <div className="column3">
          {" "}
          <LinkColumn title="Contact Info" links={links2} />{" "}
        </div>
        <div className="column4">
          {" "}
          <LinkColumn title="Social Links" links={links3} />{" "}
        </div>
      </div>
      <div className="copyright">
        <footer>
          <Paragraph>Copyright ⓒ Zhiyu Li {year}</Paragraph>
        </footer>
      </div>
    </FooterStyle>
  );
}

export default Footer;
