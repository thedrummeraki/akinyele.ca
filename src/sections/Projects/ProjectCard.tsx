import { Project } from "./types";
import { github, openInNew, play } from "../../icons";
import { seasonInfo, technologyInfo } from "./useProjects";
import YoutubeEmbedModal from "../../components/YoutubeEmbed";
import { Link } from "react-router-dom";
import ProjectCardBadge from "./ProjectCardBadge";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  if (project.hidden) {
    return null;
  }

  return (
    <div className="card">
      <div className="header">
        <div className="project-title">
          <ViewProject project={project} />
          <ProjectYear project={project} />
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
        <div className="tags">
          {project.internal && (
            <ProjectCardBadge
              text="Internal"
              border="1px solid #444"
              color="#aaa"
            />
          )}
          {project.technologies.map((technology) => {
            const info = technologyInfo(technology);

            return (
              <span className="badge" style={{ ...info }}>
                {info.name}
              </span>
            );
          })}
          {project.hackathon && (
            <ProjectCardBadge
              text="Hackathon"
              color="yellow"
              border="1px solid #ffff0066"
            />
          )}
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

function ProjectYear({
  showSeason,
  project,
}: {
  showSeason?: boolean;
  project: Project;
}) {
  const { madeIn } = project;

  if (!showSeason) {
    return <small className="year">{madeIn.year}</small>;
  }

  return <small className="year">{seasonInfo(madeIn)}</small>;
}

function ViewProject({ project }: { project: Project }) {
  const githubUrl = useGithubUrl(project);
  const projectUrl = project.url || project.internalUrl || githubUrl;

  const title = "Open " + project.name;

  if (!projectUrl) {
    return <span className="title">{project.name}</span>;
  }

  const linkContentsMarkup = (
    <div className="clickable-title">
      <span className="title">{project.name}</span>
      <img src={openInNew} className="icon" alt={title} />
    </div>
  );

  if (project.internalUrl) {
    return (
      <Link to={project.internalUrl} className="link">
        {linkContentsMarkup}
      </Link>
    );
  }

  return (
    <a
      className="link"
      href={projectUrl}
      target={"_blank"}
      rel="noreferrer"
      title={title}
    >
      {linkContentsMarkup}
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
