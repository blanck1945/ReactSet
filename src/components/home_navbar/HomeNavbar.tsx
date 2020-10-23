import * as React from "react";
import { IconType } from "react-icons";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import "./HomeNavbar.scss";
import TechCard from "../TechCard/TechCard";

export interface Tech {
  tech: string;
  color: string;
  icon: any;
  url: string;
  back: string;
}

const HomeNavbar: React.FunctionComponent = () => {
  const techArr = [
    {
      tech: "TypeScript",
      icon: <SiTypescript className="type-icon icon" />,
      url: "https://www.typescriptlang.org/",
      back: "rgb(0, 122, 204)",
    },
    {
      tech: "React",
      icon: <FaReact className="react-icon icon" />,
      url: "https://es.reactjs.org/",
      back: "rgb(97, 218, 251)",
    },
    {
      tech: "SCSS",
      icon: <FaSass className="scss-icon icon" />,
      url: "https://sass-lang.com/",
      back: "rgb(191, 64, 128)",
    },
    {
      tech: "React-Router",
      icon: <SiReactrouter className="router-icon icon" />,
      url: "https://sass-lang.com/",
      back: "rgb(37, 37, 37)",
    },
    {
      tech: "React-Icons",
      icon: (
        <img
          className="icons-icon icon-img"
          src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"
          alt="icon"
        />
      ),
      url: "https://react-icons.github.io/react-icons/",
      back: "rgb(233, 30, 99)",
    },
    {
      tech: "Formik",
      icon: (
        <img
          className="formik-icon icon-img"
          src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
          alt="icon"
        />
      ),
      url: "https://formik.org/",
      back: "rgb(23, 43, 77)",
    },
  ];

  return (
    <div className="home_nav">
      <div className="logo-div">
        <h2 className="main-title">ReactSet Starter Template</h2>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/18/15/atom-nucleus-153152_960_720.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="card-div">
        {techArr.map((el: Tech, index: number) => (
          <TechCard tech={el} key={index} />
        ))}
      </div>
      <h3 className="axios">Axios</h3>
      <h3 className="lazy">Lazy Loading Image</h3>
      <h3 className="query">SWR</h3>
    </div>
  );
};

export default HomeNavbar;
