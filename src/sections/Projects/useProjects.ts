import {
  youranimeAccountsDesktop,
  youranimeDesktop,
  youranimeMobile,
  dexifyMobileDesktopIntro,
} from "../../images";
import {
  CompanyDetails,
  Project,
  ProjectMadeInfo,
  ProjectTechnology,
  Season,
} from "./types";

const shopify: CompanyDetails = {
  name: "Shopify Inc.",
  website: "https://shopify.com",
  github: "https://github.com/Shopify",
};

const rakuten: CompanyDetails = {
  name: "Rakuten Group, Inc.",
  website: "https://shopify.com",
  github: "https://github.com/rakutentech",
};

const crc: CompanyDetails = {
  name: "Communications Research Centre Canada",
  website: "http://www.crc.gc.ca",
};

// const cbn: CompanyDetails = {
//   name: "Canadian Bank Note",
//   website: "https://www.cbnco.com",
// };

export default function useProjects() {
  const projects: Project[] = [
    {
      slug: "hidden-project",
      name: "Theme Picker",
      synopsis: "",
      hidden: true,
      featured: true,
      madeIn: {
        year: 2022,
        season: "spring",
      },
      tags: ["web"],
      technologies: ["react", "rails"],
      url: "https://comingsoon.com",
      gallery: [],
    },
    {
      slug: "airing-manga",
      name: '"Airing" manga',
      synopsis:
        "A very small service implemented for Dexify (mobile) to check which manga have an anime airing.",
      hidden: true,
      madeIn: {
        year: 2022,
        season: "winter",
      },
      technologies: ["ruby"],
      tags: ["api"],
    },
    {
      slug: "dexify-mobile",
      name: "Dexify (mobile)",
      synopsis: "Unofficial Mangadex.org mobile client.",
      beta: true,
      featured: true,
      desktopImage: dexifyMobileDesktopIntro,
      madeIn: {
        year: 2021,
        season: "fall",
      },
      watchDemo: {
        embed: true,
        link: "https://www.youtube.com/embed/6Mx_Xhm7YnI",
      },
      tags: ["mobile"],
      technologies: ["react-native", "node", "ruby"],
      github: true,
      url: "https://github.com/thedrummeraki/dexify-mobile/releases",
      description: {
        normal:
          "A mobile app that allows users to read manga hosted by Mangadex.org. " +
          "Development started in late 2021 after I wanted to provide a way to natively " +
          "ready manga on any Android and iOS device. This is a perfect opportunity to " +
          "learn about React Native.",
        technical:
          "The app is primarily built with React Native. A node.js server acts as a " +
          "proxy to the Mangadex API. An additional service built using Ruby returns a list of " +
          "manga that have an airing anime. I get this information from my YourAnime.moe API. " +
          "Dog fooding for the win!",
        challenges:
          "Implementing the manga reader was the most difficult part of the project. " +
          "I stepped out of my comfort zone and learn about animations which is something I had" +
          "always gone to great lengths to avoid. Image performance also was taken into account ." +
          "Unfortunately, I didn't manage to optimize the manga reader for iOS devices. ",
      },
    },
    {
      slug: "weather-recommendations-shop-mini",
      name: "Recommendations based on weather for SHOP",
      synopsis:
        "A Shop Mini app that allows you to view Shopify product recommendations based on the upcoming weather.",
      internal: true,
      hackathon: true,
      madeIn: {
        year: 2021,
      },
      tags: ["mobile"],
      company: shopify,
      technologies: ["react-native"],
    },
    {
      slug: "music-explorer",
      name: "My Spotify corner",
      synopsis:
        "Check out my favourite Spotify songs, artists, albums as well as what I'm listening to!",
      madeIn: {
        year: 2021,
      },
      tags: ["api", "web"],
      technologies: ["node", "react", "js"],
      internalUrl: "/music",
    },
    {
      slug: "shopify-partners-store-access",
      name: "Sensitive permissions for Shopify Partners",
      synopsis:
        "Manage your staff's permissions on the Shopify Partners dashboard.",
      madeIn: {
        year: 2021,
        season: "spring",
      },
      tags: ["web"],
      technologies: ["rails", "react"],
      company: shopify,
      url: "https://shopify.com/partners",
      gallery: [],
    },
    {
      slug: "youranime",
      name: "YourAnime.moe",
      synopsis: "The next go-to anime streaming information website.",
      featured: true,
      mobileImage: youranimeMobile,
      desktopImage: youranimeDesktop,
      madeIn: {
        year: 2016,
      },
      tags: ["web", "api"],
      technologies: ["rails", "react", "node"],
      github: "https://github.com/YourAnime-moe/youranime.moe",
      url: "https://youranime.moe",
      watchDemo: {
        link: "https://www.youtube.com/embed/1ShelOHqjUE",
        embed: true,
      },
      description: {
        // todo: improve text below
        normal:
          "A platform that provides anime streaming information, namely when any anime " +
          "is airing and on which platforms it's known to be airing on. I built this project " +
          "to promote legally watch anime online. Over the 5+ years I've been working on this, " +
          "it's been very a humbling experience to see how other platforms work and how I can " +
          "improve mine. " +
          "Originally, this platform was a streaming anime platform I built to watch anime with " +
          "loved ones. Streaming, although not available to the public, licensed media is usually " +
          "not legal without a proper license. This, maintenance and cost pushed me to convert " +
          "the app to an anime information platform.",
        technical:
          "This project was originally called My Akinyele and was running Rails 4. In January " +
          "2017, I pivoted to Slim and the heavy use of Bootstrap. This was a great opportunity " +
          "to introduce a better overall code architecture: following Rails conventions and the use " +
          "of proper HTTP verbs. Not long after in July 2017, I discoved Materialize CSS and switched " +
          "from Bootstrap. It was not a tremendous change, as the CSS classes were similar to Bootstrap. " +
          "Following a hiatus for about 1 year, the project was reborn as YourAnime.moe in June 2019. " +
          "I converted to Rails app into a GraphQL API and developed a React frontend, using Material UI. " +
          "A proxy server is present to allow the client to access the API as well as handle caching and " +
          "authentication. I learnt that it's not standard to handle authentication at this level, so one " +
          "the future is to decouple the authentication from the proxy server.",
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
      internal: true,
      watchDemo: {
        link: "https://www.youtube.com/embed/xQeAJQJvhJM",
        embed: true,
      },
    },
    {
      slug: "neets-tracker-bot",
      name: "NEETs Tracker",
      synopsis:
        "A personal bot that tracks new songs posted by ActiveNEETs and Yorushika.",
      tags: ["bot"],
      technologies: ["rails"],
      madeIn: {
        year: 2020,
      },
      internal: true,
    },
    {
      slug: "yorushika-game",
      name: '"Can you guess it?"',
      synopsis:
        "A small web-based game I made during the start of COVID-19. Can you guess the song?",
      tags: ["game"],
      madeIn: {
        year: 2020,
        season: "spring",
      },
      technologies: ["react"],
      url: "https://yorushika-game.now.sh",
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
      slug: "youranime-id",
      name: "YourAnime ID",
      featured: true,
      desktopImage: youranimeAccountsDesktop,
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
        link: "https://www.youtube.com/embed/5mvfGUjjYUE",
        embed: true,
      },
    },
    {
      slug: "misete",
      name: "Misete.io",
      synopsis:
        "A space for watching and sharing Nintendo Switch clips across regions.",
      madeIn: {
        year: 2020,
        season: "spring",
      },
      tags: ["web", "api"],
      technologies: ["rails"],
      watchDemo: {
        link: "https://www.youtube.com/embed/13vbgK3JLjQ",
        embed: true,
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
      internal: true,
      hackathon: true,
      tags: ["web"],
      technologies: ["react", "rails"],
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
      slug: "aki-operations",
      name: "Operations (gem)",
      synopsis:
        "Manage your Rails application's operation permissions with ease.",
      madeIn: {
        year: 2018,
        season: "fall",
      },
      tags: ["library"],
      technologies: ["ruby", "rails"],
      internal: true,
      url: "https://rubygems.org/gems/aki-operations",
    },
    {
      slug: "rakuten-database-tool",
      name: "Internal Database Management",
      synopsis:
        "Upgraded and improved Rakuten's internal Database management system",
      madeIn: {
        year: 2018,
        season: "spring",
      },
      tags: ["web"],
      technologies: ["rails", "python"],
      internal: true,
      company: rakuten,
      url: "https://shopify.com/partners",
      gallery: [],
    },
    {
      slug: "devpost-hackathon",
      name: "Voice Race",
      synopsis:
        'A 3D racing game that allows the player to control a racing car by simply saying the words "go", "left", "right", "back", or "faster".',
      url: "https://devpost.com/software/voice-race",
      tags: ["game"],
      technologies: ["unity", "C#", "js"],
      gallery: [],
      madeIn: {
        year: 2019,
        season: "winter",
      },
      hackathon: true,
    },
    {
      slug: "5g-networks-3d",
      name: "5G in 3D",
      synopsis:
        "3D visualization tools were built in order to estimate how far potential (at the time) 5G networks would spread across a city.",
      company: crc,
      tags: ["game", "api"],
      gallery: [],
      madeIn: {
        year: 2017,
        season: "fall",
      },
      technologies: ["C#", "unity", "js", "java", "python"],
      internal: true,
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
      slug: "decode-hackathon-2017",
      name: "Giveaway Shopify app",
      github: "https://github.com/thedrummeraki/decode2017",
      synopsis:
        "A Shopify app for enabling merchants to organize giveaways, as part of deCODE Hackathon at uOttawa.",
      url: "https://decode-shopify2017.herokuapp.com",
      madeIn: {
        year: 2017,
        season: "winter",
      },
      tags: ["api", "web"],
      technologies: ["rails"],
      watchDemo: {
        link: "https://www.youtube.com/embed/W6xD4u978WU",
        embed: true,
      },
      hackathon: true,
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
        link: "https://www.youtube.com/embed/pCId99AK1HU",
        embed: true,
      },
    },
    {
      slug: "tanoshimu-video",
      name: "Tanoshimu Assets server",
      synopsis:
        "A little assets server hosting static content, such as images and videos, to for my Tanoshimu application.",
      madeIn: {
        year: 2018,
        season: "summer",
      },
      tags: ["api"],
      technologies: ["node"],
    },
  ];

  return projects.sort((projectA, projectB) =>
    String(projectB.madeIn.year).localeCompare(String(projectA.madeIn.year))
  );
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

export function seasonInfo(madeInfo: ProjectMadeInfo) {
  const { season, year } = madeInfo;
  if (!season) {
    return String(year);
  }

  return [seasonName(season), year].map((x) => String(x)).join(" ");
}

export function seasonName(season: Season): string {
  switch (season) {
    case "fall":
      return "Fall";
    case "spring":
      return "Spring";
    case "summer":
      return "Summer";
    case "winter":
      return "Winter";
  }
}
