import { MouseEventHandler, useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import useProjects, { technologyInfo } from "./useProjects";

import "./Projects.css";
import { Header, ViewFeaturedProject } from "../../components";
import { filter } from "../../icons";
import { ProjectTechnology } from "./types";
import { useDocumentTitle } from "../../components/DocumentTitle";
import { Link } from "react-router-dom";

const tags = [
  {
    name: "Web",
    slug: "web",
  },
  {
    name: "Mobile",
    slug: "mobile",
  },
  {
    name: "Bots",
    slug: "bot",
  },
  {
    name: "Libraries",
    slug: "library",
  },
  {
    name: "API",
    slug: "api",
  },
  {
    name: "Games",
    slug: "game",
  },
];

export default function Projects() {
  useDocumentTitle({ title: "My projects" });
  const projects = useProjects();
  const featuredProjects = projects.filter(
    (project) => project.featured && !project.hidden
  );

  const [selected, setSelectedTags] = useState<string[]>([]);
  const [typedTag, setTypedTag] = useState<string>();
  const [technologies, setTechnologies] = useState<ProjectTechnology[]>([]);

  const [input, setInput] = useState("");

  const filterInput = input.trim().toLocaleLowerCase();

  const handleTechnologySelect = (selectedTechnology: ProjectTechnology) => {
    if (!technologies.includes(selectedTechnology)) {
      setTechnologies((current) => [...current, selectedTechnology]);
    }
  };

  const handleTechnologyUnselect = (selectedTechnology: ProjectTechnology) => {
    setTechnologies((current) =>
      current.filter((technology) => technology !== selectedTechnology)
    );
  };

  const filteredProjects = useMemo(() => {
    const filterApplied =
      selected.length > 0 || filterInput.length > 0 || technologies.length > 0;

    if (!filterApplied) {
      return projects;
    }

    const selectedTags = [...selected, typedTag].filter(notEmpty);

    return projects
      .filter((project) =>
        selectedTags.length === 0
          ? true
          : intersect(project.tags, selectedTags).length > 0
      )
      .filter((project) =>
        typedTag
          ? true
          : project.name.toLocaleLowerCase().includes(filterInput) ||
            project.synopsis.toLocaleLowerCase().includes(filterInput) ||
            project.slug.toLocaleLowerCase().includes(filterInput)
      )
      .filter((project) =>
        technologies.length === 0
          ? true
          : intersect(project.technologies, technologies).length > 0
      );
  }, [projects, filterInput, selected, typedTag, technologies]);

  useEffect(() => {
    if (filterInput.length === 0) {
      setTypedTag(undefined);
    } else {
      const tag = tags.find(
        (tag) => tag.slug.toLocaleLowerCase() === filterInput
      );

      setTypedTag(tag?.slug);
    }
  }, [filterInput]);

  return (
    <>
      <Header />
      <section className="projects container">
        <h2 className="title">Featured projects</h2>
        <div style={{ display: "none", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search by name..."
            className="filter"
            value={input}
            onInput={(e) => {
              setInput((e.target as any).value);
            }}
            style={{ flexGrow: 1 }}
          />
          <button
            className="button"
            style={{
              marginLeft: ".75rem",
              borderRadius: 1024,
              width: "2.75rem",
              height: "2.75rem",
              display: "none",
            }}
          >
            <img
              src={filter}
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
              alt="Filter"
            />
          </button>
        </div>
        <div className="actions">
          <div className="tags-container">
            {technologies.map((technology) => {
              const info = technologyInfo(technology);

              return (
                <span
                  key={technology}
                  className="badge clickable removable"
                  style={{ ...info }}
                  onClick={() => handleTechnologyUnselect(technology)}
                  // onClick={() => onTechnologySelect(technology)}
                >
                  {info.name}
                </span>
              );
            })}
          </div>
          <div className="tags-container" style={{ display: "none" }}>
            {tags.map((tag) => (
              <Tag
                key={tag.slug}
                name={tag.name}
                selected={selected.includes(tag.slug) || typedTag === tag.slug}
                onClick={() => {
                  setSelectedTags((current) => {
                    if (current.includes(tag.slug)) {
                      return current.filter((x) => x !== tag.slug);
                    } else {
                      return [...current, tag.slug];
                    }
                  });
                }}
              />
            ))}
            <button
              className="text-button"
              onClick={() => {
                setSelectedTags([]);
                setInput("");
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="results grid" style={{ display: "none" }}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onTechnologySelect={handleTechnologySelect}
            />
          ))}
        </div>
        <div
          className="featured-projects"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            marginBottom: "5rem",
          }}
        >
          {featuredProjects.map((project) => (
            <ViewFeaturedProject key={project.slug} project={project} />
          ))}
        </div>
        <div
          className="projects container"
          style={{
            marginTop: "5rem",
            marginBottom: "10rem",
          }}
        >
          <Link to="/projects/archive" className="button see-projects">
            <span>All of my projects</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export function Tag({
  name,
  selected,
  hidden,
  onClick,
}: {
  name: string;
  selected?: boolean;
  hidden?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`button${selected ? " selected" : ""}${
        hidden ? " hidden" : ""
      }`}
    >
      {name}
    </button>
  );
}

// todo move to utils file
export function intersect<T>(a: T[], b: T[]) {
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter((x) => setB.has(x)));
  return Array.from(intersection);
}

function notEmpty<T>(obj: T | undefined | null): obj is T {
  return obj !== null && obj !== undefined;
}
