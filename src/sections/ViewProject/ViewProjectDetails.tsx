import { Link, useNavigate } from "react-router-dom";
import { back, github, openInNew } from "../../icons";
import { Project } from "../Projects/types";

import "react-image-gallery/styles/css/image-gallery.css";
import { useGithubUrl } from "../../utils";

interface Props {
  project: Project;
}

export default function ViewProjectDetails({ project }: Props) {
  const navigate = useNavigate();

  return (
    <section className="container project">
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <div>
          <button
            className="button"
            style={{ padding: 5 }}
            onClick={() => navigate(-1)}
          >
            <img src={back} height={24} width={24} />
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ margin: "0 0 0 1rem" }}>{project.name}</h2>
          <div className="synopsis">{project.synopsis}</div>
          <div style={{ display: "flex", gap: 10, margin: "1rem" }}>
            <GithubLink project={project} />
            <ExternalLink project={project} />
          </div>
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
          <div
            style={{
              width: "100%",
              height: 500,
              margin: "0 auto",
              borderRadius: ".5rem",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
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

      {project.description && (
        <div className="section description">
          <div className="sub-section">
            <h3>Description</h3>
            <p>{project.description.normal}</p>
          </div>

          {project.description.challenges && (
            <div className="sub-section">
              <h3>Challenges</h3>
              <p>{project.description.challenges}</p>
            </div>
          )}

          {project.description.technical && (
            <div className="sub-section">
              <h3>Technical description</h3>
              <p>{project.description.technical}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function GithubLink({ project }: { project: Project }) {
  const githubUrl = useGithubUrl(project);

  if (!githubUrl) {
    return null;
  }

  return (
    <a href={githubUrl} target="_blank" rel="noreferrer" title="View on Github">
      <img src={github} className="icon" alt={project.name + " github"} />
    </a>
  );
}

function ExternalLink({ project }: { project: Project }) {
  const title = "Open " + project.name;

  const imageMarkup = <img src={openInNew} className="icon" alt={title} />;

  if (!project.url && project.internalUrl) {
    return (
      <Link to={project.internalUrl} title={title}>
        {imageMarkup}
      </Link>
    );
  } else if (!project.url && !project.internalUrl) {
    const internalProjectUrl = `/projects/${project.slug}`;
    return (
      <Link to={internalProjectUrl} title={title}>
        {imageMarkup}
      </Link>
    );
  }

  return (
    <a href={project.url} target="_blank" rel="noreferrer" title={title}>
      {imageMarkup}
    </a>
  );
}
