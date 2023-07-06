import { Link } from "react-router-dom";
import { Header, IconLink, Tag, TagsContainer } from "../../components";
import BackButton from "../../components/BackButton";
import YoutubeEmbedModal from "../../components/YoutubeEmbed";
import { done, github, openInNew, pause, play, close, view } from "../../icons";
import { projectGithubUrl } from "../../utils";
import { Project, ProjectDeployment } from "../Projects/types";
import useProjects, {
  projectDeployedWith,
  technologyInfo,
} from "../Projects/useProjects";
import "./ViewAllProjects.css";

export default function ViewAllProjects() {
  const projects = useProjects();
  const allOtherProjects = projects.filter((project) => !project.hidden);

  const projectIcon = (project: Project) => {
    switch (project.status) {
      case "active":
        return play;
      case "done":
        return done;
      case "paused":
        return pause;
      case "stopped":
        return close;
    }
  };

  return (
    <>
      <Header />
      <section className="all-projects container">
        <div style={{ marginTop: "1rem" }}>
          <BackButton to="/projects" />
        </div>
        <div className="title-container">
          <h2 className="title">All of my projects</h2>
          <div style={{ display: "none", alignItems: "center" }}>
            <Link className="button" to="/projects/try">
              Try a project...
            </Link>
          </div>
        </div>

        <div className="table">
          <div className="row">
            <div className="name">
              <h3>Project</h3>
            </div>
            <div className="year">
              <h3>Year</h3>
            </div>
            <div className="tech">
              <h3>Built with</h3>
            </div>
            <div className="company">
              <h3>Company</h3>
            </div>
            <div className="link">
              <h3>Link</h3>
            </div>
            <div className="deployed-with">
              <h3>Deployed with</h3>
            </div>
          </div>

          {allOtherProjects.map((project) => {
            const githubUrl = projectGithubUrl(project);
            const deploymentInfo = projectDeployedWith(project);

            return (
              <div className="row project" key={project.slug}>
                <div className="name">
                  <span>
                    <img
                      src={projectIcon(project)}
                      alt={project.status}
                      title={project.status}
                      style={{ height: "0.75rem", width: "0.75rem" }}
                    />{" "}
                    {project.name}
                  </span>
                  <span className="synopsis">{project.synopsis}</span>
                </div>
                <div className="year">
                  <span>{project.madeIn.year}</span>
                </div>

                <div className="tech">
                  <TagsContainer>
                    {project.technologies.map((technology) => {
                      const { name, ...style } = technologyInfo(technology);
                      return <Tag key={technology} name={name} style={style} />;
                    })}
                  </TagsContainer>
                </div>
                <div className="company">
                  {project.company ? (
                    project.company.website ? (
                      <a
                        href={project.company.website}
                        target="_blank"
                        rel="noreferrer"
                        className="company-name"
                      >
                        {project.company.name}
                      </a>
                    ) : (
                      <span className="company-name">
                        {project.company.name}
                      </span>
                    )
                  ) : (
                    "-"
                  )}
                </div>
                <div className="link">
                  {githubUrl && (
                    <IconLink external to={githubUrl} iconUrl={github} />
                  )}
                  {project.url && (
                    <IconLink external to={project.url} iconUrl={openInNew} />
                  )}
                  {project.internalUrl && (
                    <IconLink to={project.internalUrl} iconUrl={view} />
                  )}
                  <WatchDemo project={project} />
                </div>
                <div className="deployed-with">
                  {deploymentInfo
                    ? deploymentInfo.map<React.ReactNode>((deployInfo) => (
                        <DeployPlatformLink
                          key={deployInfo.name}
                          deployInfo={deployInfo}
                        />
                      ))
                    : "-"}
                </div>
              </div>
            );
          })}
        </div>

        {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Technologies</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {allOtherProjects.map((project) => {
              return (
                <tr>
                  <td>{project.name}</td>
                  <td>{project.company?.name}</td>
                  <td>
                    {project.technologies
                      .map((technology) => technologyInfo(technology).name)
                      .join(", ")}
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </section>
    </>
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

function DeployPlatformLink({ deployInfo }: { deployInfo: ProjectDeployment }) {
  const { name, url } = deployInfo;
  if (!url) {
    return <span>{name}</span>;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="deploy-info"
    >
      {name}
    </a>
  );
}
