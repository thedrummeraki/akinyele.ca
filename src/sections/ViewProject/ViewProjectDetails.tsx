import { Link } from "react-router-dom";
import { TagsContainer, Tag } from "../../components";
import { back } from "../../icons";
import { Project } from "../Projects/types";
import { technologyInfo } from "../Projects/useProjects";

interface Props {
  project: Project;
}

export default function ViewProjectDetails({ project }: Props) {
  return (
    <section className="container project">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/projects">
          <button className="button" style={{ padding: 5 }}>
            <img src={back} height={24} width={24} />
          </button>
        </Link>
        <div>
          <h2 style={{ marginLeft: "1rem", marginBottom: 0 }}>
            {project.name}
          </h2>
          <div className="synopsis">{project.synopsis}</div>
        </div>
      </div>
      {/* <TagsContainer>
        {project.technologies.map((technology) => {
          const { name, ...style } = technologyInfo(technology);

          return <Tag name={name} style={style} />;
        })}
      </TagsContainer> */}

      {project.watchDemo?.embed && (
        <div className="section">
          <div style={{ width: "70%", height: 400, margin: "0 auto" }}>
            <iframe
              width="100%"
              height="100%"
              src={project.watchDemo.link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
