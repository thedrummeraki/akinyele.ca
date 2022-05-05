import { Project, ProjectTechnology } from "./types";
import { github, openInNew, play } from "../../icons";
import { seasonInfo, technologyInfo } from "./useProjects";
import YoutubeEmbedModal from "../../components/YoutubeEmbed";
import { Link } from "react-router-dom";
import ProjectCardBadge from "./ProjectCardBadge";
import { Tag, TagsContainer } from "../../components";

interface Props {
  project: Project;
  showDescription?: boolean;
  onTechnologySelect(technology: ProjectTechnology): void;
}

function classNames(names: (string | boolean | null | undefined)[]) {
  return names
    .filter((name) => {
      return Boolean(name);
    })
    .join(" ");
}

export default function ProjectCard({
  project,
  showDescription,
  onTechnologySelect,
}: Props) {
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
      {showDescription && (
        <div className="body">
          <small className="description">{project.synopsis}</small>
        </div>
      )}
      <div className="footer">
        <div className="icons">
          <WatchDemo project={project} />
          <GithubLink project={project} />
        </div>
        <TagsContainer>
          {project.internal && (
            <ProjectCardBadge
              text="Internal"
              border="1px solid #444"
              color="#aaa"
            />
          )}
          {project.technologies.map((technology) => {
            const { name, ...style } = technologyInfo(technology);

            return (
              <Tag
                key={name}
                name={name}
                style={style}
                onClick={() => onTechnologySelect(technology)}
              />
            );
          })}
          {project.hackathon && (
            <ProjectCardBadge
              text="Hackathon"
              color="yellow"
              border="1px solid #ffff0066"
            />
          )}
        </TagsContainer>
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

  const linkToProjectMarkup = (
    <Link to={getProjectLinkTo(project)}>
      <span className="title">{project.name}</span>
    </Link>
  );

  if (!projectUrl) {
    return linkToProjectMarkup;
  }

  // if (project.internalUrl) {
  //   return (
  //     <Link to={project.internalUrl} className="link">
  //       {linkContentsMarkup}
  //     </Link>
  //   );
  // }

  return (
    <div className="clickable-title">
      {linkToProjectMarkup}
      {/* {!project.internalUrl && (
        <a href={projectUrl} target="_blank" rel="noreferrer" title="title">
          <img src={openInNew} className="icon" alt={title} />
        </a>
      )} */}
    </div>
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

function getProjectLinkTo(project: Project) {
  return `/projects/${project.slug}`;
}
