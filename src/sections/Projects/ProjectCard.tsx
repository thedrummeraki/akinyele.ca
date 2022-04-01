import { Project } from "./types";
import { github, openInNew, play } from "../../icons";
import { technologyInfo } from "./useProjects";
import YoutubeEmbedModal from "../../components/YoutubeEmbed";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card">
      <div className="header">
        <div className="project-title">
          <ViewProject project={project} />
          <small className="year">{project.madeIn.year}</small>
        </div>
      </div>
      <div className="body">
        <small className="description">{project.synopsis}</small>
      </div>
      <div className="footer">
        <div className="icons">
          <WatchDemo project={project} />
          <GithubLink project={project} />
        </div>
        <div className="technologies">
          {project.technologies.map((technology) => {
            const info = technologyInfo(technology);

            return (
              <span className="badge" style={{ ...info }}>
                {info.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
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

function ViewProject({ project }: { project: Project }) {
  const githubUrl = useGithubUrl(project);
  const projectUrl = project.url || githubUrl;

  const title = "Open " + project.name;

  if (!projectUrl) {
    return <span className="title">{project.name}</span>;
  }

  return (
    <a
      className="link"
      href={projectUrl}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      <div className="clickable-title">
        <span className="title">{project.name}</span>
        <img src={openInNew} className="icon" alt={title} />
      </div>
    </a>
  );
}

function WatchDemo({ project }: { project: Project }) {
  const { watchDemo } = project;

  if (!watchDemo) {
    return null;
  }

  const title = "Watch demo for " + project.name;

  if (watchDemo.embed) {
    return <YoutubeEmbedModal embedUrl={watchDemo.link} title={title} />;
  }

  return (
    <a href={watchDemo.link} target="_blank" rel="noreferrer" title={title}>
      <img src={play} className="icon" alt={title} />
    </a>
  );
}

function useGithubUrl(project: Project) {
  if (project.github) {
    return typeof project.github === "string"
      ? project.github
      : `https://github.com/thedrummeraki/${project.slug}`;
  }
  return null;
}
