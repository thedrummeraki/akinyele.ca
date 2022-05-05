import { Project, ProjectTechnology } from "./types";
import { seasonInfo } from "./useProjects";
import { Link } from "react-router-dom";
import { useGithubUrl } from "../../utils";

interface Props {
  project: Project;
  showDescription?: boolean;
  onTechnologySelect(technology: ProjectTechnology): void;
}

export default function ProjectCard({ project, showDescription }: Props) {
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
        <ProjectYear project={project} />
        {/* <div className="icons">
          <WatchDemo project={project} />
          <GithubLink project={project} />
        </div> */}
        {/* <TagsContainer>
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
        </TagsContainer> */}
      </div>
    </div>
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

  const linkToProjectMarkup = (
    <Link to={getProjectLinkTo(project)}>
      <span className="title">{project.name}</span>
    </Link>
  );

  if (!projectUrl) {
    return linkToProjectMarkup;
  }

  return <div className="clickable-title">{linkToProjectMarkup}</div>;
}

function getProjectLinkTo(project: Project) {
  return `/projects/${project.slug}`;
}
