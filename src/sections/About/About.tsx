import { Link } from "react-router-dom";
import { Header } from "../../components";
import { myFace } from "../../icons";
import ProjectCard from "../Projects/ProjectCard";
import useProjects from "../Projects/useProjects";

import "./About.css";

export default function About() {
  const projects = useProjects().slice(0, 4);

  return (
    <div className="About">
      <Header />
      <section className="container">
        <h2>About me</h2>
        <img
          src={myFace}
          style={{ height: 200, width: 200 }}
          alt="Akinyele Cafe-Febrissy"
        />
        <p>
          Behind technology, there is software... behind software, there are
          humans. I am fascinated by the philosophy of Continuous Improvement,
          or Kaizen, as I learned during my 8-month COOP internship in Japan,
          where I was immersed in the cradle of technology combined with
          efficiency.
          <br />
          "Make it better" is my personnal motto. I apply that in virtually
          every aspect of my life - when I bake, play drums, ride my bike or
          connect with people. I speak and write French, English and Japanese
          fluenty and I design software solutions, from ideation to
          implementation. I am also quite comfortable with undertaking projects
          that are in progress and get involved at any stage of development.
        </p>
      </section>
    </div>
  );
}
