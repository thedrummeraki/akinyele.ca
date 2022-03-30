import { Project } from "./types";
import { github, view } from "../../icons";

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
          <GithubLink project={project} />
          <ViewProject project={project} />
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
    <a href={githubUrl} target="_blank" rel="noreferrer">
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

  return (
    <a href={projectUrl} target="_blank" rel="noreferrer">
      <img src={view} className="icon" alt={"Open " + project.name} />
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
