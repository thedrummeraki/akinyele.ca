import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FeaturedProject } from "../../sections/Projects/types";
import { technologyInfo } from "../../sections/Projects/useProjects";
import TagsContainer, { Tag } from "../TagsContainer";

import "./ViewFeaturedProject.css";

interface Props {
  project: FeaturedProject;
}

export default function ViewFeaturedProject({ project }: Props) {
  const projectUrl = `/projects/${project.slug}`;
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImagesVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="view-featured-project">
      <Link to={projectUrl} className="image">
        <div className="overlay" />
        <img
          src={project.desktopImage}
          alt={project.name}
          className={imagesVisible ? "visible" : undefined}
          style={{ height: "100%", width: "100%" }}
        />
      </Link>
      <div className="details">
        <div>
          <div className="title-and-year">
            <h2 className="title">{project.name}</h2>
            <span className="year">
              <span className="started-in">Started in </span>
              {project.madeIn.year}
            </span>
          </div>
          <small>{project.synopsis}</small>
          <TagsContainer>
            {project.technologies.map((technology) => {
              const { name, ...style } = technologyInfo(technology);

              return <Tag key={name} name={name} style={style} />;
            })}
          </TagsContainer>
        </div>
        <div>
          <Link
            to={projectUrl}
            className="button"
            style={{ padding: "1rem" }}
            role="button"
          >
            <span>Learn more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
