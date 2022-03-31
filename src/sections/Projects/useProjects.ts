import { Project, ProjectTechnology } from "./types";

export default function useProjects() {
  const projects: Project[] = [
    {
      slug: "dexify-mobile",
      name: "Dexify (mobile)",
      synopsis: "Unofficial Mangadex.org mobile client.",
      madeIn: {
        year: 2021,
        season: "fall",
      },
      tags: ["mobile"],
      technologies: ["react-native", "node", "ruby"],
      github: true,
      url: "https://github.com/thedrummeraki/dexify-mobile/releases",
    },
    {
      slug: "youranime",
      name: "YourAnime.moe",
      synopsis: "The next go-to anime streaming information website.",
      madeIn: {
        year: 2016,
      },
      tags: ["web", "api"],
      technologies: ["rails", "react", "node"],
      github: "https://github.com/YourAnime-moe/youranime.moe",
      url: "https://youranime.moe",
      watchDemo: {
        link: "https://youtu.be/1ShelOHqjUE",
      },
    },
    {
      slug: "github-discord-bot",
      name: "Github on Discord",
      synopsis: "A personal Github assistant on Discord.",
      tags: ["bot"],
      technologies: ["ruby"],
      madeIn: {
        year: 2020,
      },
      watchDemo: {
        link: "https://youtu.be/xQeAJQJvhJM",
      },
    },
    {
      slug: "dexify",
      name: "Dexify",
      synopsis:
        "An unofficial alternative Manga reader. Powered by Mangadex.org.",
      url: "https://dexify.herokuapp.com",
      tags: ["web"],
      technologies: ["rails"],
      madeIn: {
        year: 2021,
        season: "fall",
      },
    },
    {
      slug: "mangadex",
      name: "Mangadex (Ruby Gem)",
      synopsis:
        "Your (unofficial) favourite Ruby gem for interacting with Mangadex.org.",
      madeIn: {
        year: 2021,
        season: "fall",
      },
      tags: ["library"],
      technologies: ["ruby", "sorbet"],
      url: "https://rubygems.org/gems/mangadex",
      github: true,
    },
    {
      slug: "oauth-server",
      name: "YourAnime ID (Misete Accounts)",
      synopsis:
        "A custom-made OAuth (authentication) server for all of my apps.",
      madeIn: {
        year: 2020,
        season: "fall",
      },
      tags: ["web"],
      technologies: ["rails"],
      url: "https://id.youranime.moe",
      watchDemo: {
        link: "https://youtu.be/5mvfGUjjYUE",
      },
    },
    {
      slug: "misete",
      name: "Misete.io",
      synopsis: "A space for watching and sharing Nintendo Switch clips.",
      madeIn: {
        year: 2020,
        season: "spring",
      },
      tags: ["web", "api"],
      technologies: ["rails"],
      watchDemo: {
        link: "https://youtu.be/13vbgK3JLjQ",
      },
    },
    {
      slug: "osusume",
      name: "O SUSUME (Watch parties)",
      synopsis:
        "A tools serving as Shopify's internal recommendations anime system.",
      madeIn: {
        year: 2020,
        season: "summer",
      },
      tags: ["web"],
      technologies: ["react", "rails"],
    },
    {
      slug: "notaki",
      name: "Notaki.ca (formerly forevernote.ca)",
      synopsis: "A note-taking app for students",
      madeIn: {
        year: 2017,
        season: "summer",
      },
      tags: ["web"],
      technologies: ["js", "rails"],
    },
    {
      slug: "capstone",
      name: "Rent Management Dashboard",
      synopsis:
        "Manage your rent payments with this simple yet powerful dashboard.",
      madeIn: {
        year: 2019,
        season: "winter",
      },
      tags: ["web"],
      technologies: ["rails"],
    },
    {
      slug: "youranime-admin",
      name: "YourAnime.moe Admin panel",
      synopsis: "YourAnime.moe: supercharged.",
      madeIn: {
        year: 2020,
        season: "summer",
      },
      tags: ["web"],
      technologies: ["rails"],
    },
    {
      slug: "tanoshimu",
      name: "Have-Fun ~ Tanoshimu",
      synopsis: "A private site hosting various anime shows.",
      madeIn: {
        year: 2016,
        season: "winter",
      },
      tags: ["web"],
      technologies: ["rails"],
      watchDemo: {
        link: "https://youtu.be/pCId99AK1HU",
      },
    },
  ];

  return projects;
}

export function technologyInfo(technology: ProjectTechnology) {
  switch (technology) {
    case "js":
      return { name: "JavaScript", color: "#000", backgroundColor: "#fcdc00" };
    case "node":
      return { name: "NodeJS", color: "#fff", backgroundColor: "#43853d" };
    case "rails":
      return { name: "Rails", color: "#fff", backgroundColor: "#D30001" };
    case "ruby":
      return { name: "Ruby", color: "#fff", backgroundColor: "#CC342D" };
    case "react":
      return { name: "React", color: "#61dafb", backgroundColor: "#333" };
    case "react-native": {
      return {
        name: "React Native",
        color: "#61dafb",
        backgroundColor: "#333",
      };
    }
    default: {
      return {
        name: technology,
        color: "#fff",
        backgroundColor: "#333",
      };
    }
  }
}
