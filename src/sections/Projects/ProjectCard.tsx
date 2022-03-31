import { Project } from "./types";
import { github, play, view } from "../../icons";
import { technologyInfo } from "./useProjects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card">
      <div className="header">
        <div className="project-title">
          <span className="title">{project.name}</span>
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
          <ViewProject project={project} />
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

  if (!projectUrl) {
    return null;
  }

  const title = "Open " + project.name;

  return (
    <a href={projectUrl} target="_blank" rel="noreferrer" title={title}>
      <img src={view} className="icon" alt={title} />
    </a>
  );
}

function WatchDemo({ project }: { project: Project }) {
  const { watchDemo } = project;

  if (!watchDemo) {
    return null;
  }

  if (watchDemo.embed) {
    return null;
  }

  const title = "Watch demo for " + project.name;

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
