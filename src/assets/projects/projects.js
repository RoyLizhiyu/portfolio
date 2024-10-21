import { v4 as uuidv4 } from "uuid";
import blog from "../images/blog.png";
import doodle from "../images/doodle6.png";
import portfolio from "../images/pf3.png";
import tree from "../images/tree.png";
import XIV from "../images//XIV.png";
import btg from "../images/btg.png";
const projects = [
  {
    id: uuidv4(),
    title: "XIV GearSet",
    description:
      "A gearing site for the MMORPG game Final Fantasy 14, users can test and see thier in-game character gears/stats.",
    img: XIV,
    href: "https://xivgearset.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Music Backing Track Generator",
    description:
      "A music generating app built with NextJS that playbacks bakcing tracks according to user's preference.",
    img: btg,
    href: "https://btg-two.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Personal Tech Blog",
    description:
      "Full stack blog website where I post my own front end studies on. Built on MERN stack.",
    img: blog,
    href: "https://diuk-feblog.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Doodle Heep",
    description:
      "My personal take on imitating the behaviors and looks of Google's Keep App. Front-end web built on ReactJS.",
    img: doodle,
    href: "https://doodle-heep.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Portfolio Website",
    description:
      "Simplistic portfolio site for made a friend, static site with pure html and some bootstrap libraries.",
    img: portfolio,
  },
  {
    id: uuidv4(),
    title: "Disk usage stats App",
    description:
      "An app that visualizes the files and folders in given directory in a interactive treemap graph.",
    img: tree,
  },
];

export default projects;
