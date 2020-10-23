import * as React from "react";
import { Tech } from "../home_navbar/HomeNavbar";
import "./TechCard.scss";

interface TechCardProps {
  tech: Tech;
}

const TechCard = ({ tech }: TechCardProps) => {
  return (
    <div className="tech-card" style={{ backgroundColor: tech.back }}>
      <div className="tech-div">
        <h3>{tech.tech}</h3>
        {tech.icon}
      </div>
      <a href={tech.url} className="tech-link">
        Official Page
      </a>
    </div>
  );
};

export default TechCard;
