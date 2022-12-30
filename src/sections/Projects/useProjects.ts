import {
  youranimeAccountsDesktop,
  youranimeDesktop,
  youranimeMobile,
  dexifyMobileDesktopIntro,
  listeningHistoryDesktop,
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
  website: "https://www.rakuten.co.jp",
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
      slug: "listening-history",
      name: "Spotify Listener",
      featured: true,
      desktopImage: listeningHistoryDesktop,
      status: "active",
      synopsis: "Listens to my Spotity music 24/7 and gives me more precise insights on my music trends.",
      madeIn: {
        year: 2022,
        season: "winter",
      },
      tags: ["bot", "library"],
      technologies: ["python", "mongo", "ruby", "node"],
      description: {
        normal:
          "This is a simple polling service that keeps track of all songs I listen to on Spotify, at all " +
          "times. The goal is to get more precise insights on my music habits. The idea came after seeing my " +
          "Spotify 2022 Wrapped. I was happy but wanted to see more information. At the moment, this program " +
          "is gathering data which I will be able to analyze after a couple of weeks/months of listening.",
        challenges:
          "Hosting locally on my aging Raspberry PI's hardware was the challenge. I had to make sure to " +
          "use a light but recent operating system as well as adjust my program's depedencies to be compatible " +
          "on multiple computers for development purposes.",
        technical:
          "A script written in Python polls a Spotify API wrapper written in Node.js (handles " +
          "authorization) and notifies a Discord channel when a new song is played using a Discord bot " +
          "written in Ruby.",
        services: [
          {name: "Spotify Web API", url: "https://developer.spotify.com/documentation/web-api"},
          {name: "Discord API", url: "https://discord.com/developers/docs"}
        ]
      },
      watchDemo: {
        embed: true,
        link: "https://www.youtube.com/embed/xKzoVuxQSA0",
      }
    },
    {
      slug: "youranime-admin",
      name: "YourAnime.moe Admin Dashboard",
      status: "done",
      synopsis:
        "A simple dashboard there to help me manage content and jobs for the " +
        "YourAnime.moe API.",
      madeIn: {
        year: 2022,
        season: "summer",
      },
      url: "https://admin.youranime.moe",
      tags: ["web"],
      technologies: ["react"],
      description: {
        normal: "",
        services: [
          { name: "YourAnime.moe", url: "https://youranime.moe" },
          { name: "YourAnime Accounts", url: "https://id.youranime.moe" },
        ],
      },
    },
    {
      slug: "password-sharing",
      name: "My password sharing",
      status: "done",
      synopsis:
        "A personal hackathon-style side-project allowing me to share " +
        "passwords to close ones without worrying about compromising my " +
        "login credentials.",
      madeIn: {
        year: 2022,
        season: "summer",
      },
      tags: ["web"],
      technologies: ["rails"],
    },
    {
      slug: "manga-discovery",
      name: "Discover Manga",
      status: "done",
      synopsis:
        '"Seeing is believing". Visitors read the first chapter of a manga ' +
        "picked at random and can quickly decide if they like or not.",
      madeIn: {
        year: 2022,
        season: "summer",
      },
      tags: ["oauth", "web"],
      technologies: ["js"],
    },
    {
      slug: "japanese-morphological-analyzer",
      name: '"What\'s this Japanese word?"',
      status: "paused",
      synopsis:
        "Using a trusted morphological analyzer to assist learners of Japanese with understanding " +
        "the role and category of each word. REST APIs in Ruby " +
        "and Java. Clients in React and React Native.",
      madeIn: {
        year: 2022,
        season: "summer",
      },
      tags: ["api", "mobile", "web"],
      technologies: ["java", "js", "ruby", "react-native"],
      beta: true,
    },
    {
      slug: "identity-on-theme-store",
      name: "Shopify Accounts on Shopify Theme Store",
      status: "done",
      synopsis:
        "Modernize authentication on Shopify Theme Store and integrate " +
        "Shopify Accounts in favour of shop-based authentication.",
      hidden: false,
      description: {
        normal:
          "Integrating with Shopify Accounts on allows " +
          "for better overall user-experience as well staying to up to date with how internal services " +
          "are implemented at Shopify.",
      },
      madeIn: {
        year: 2022,
        season: "spring",
      },
      tags: ["oauth", "web", "api"],
      technologies: ["rails", "js"],
      url: "https://themes.shopify.com",
      company: shopify,
    },
    {
      slug: "hidden-project",
      name: "Theme Picker",
      status: "active",
      synopsis: "",
      hidden: true,
      featured: true,
      madeIn: {
        year: 2022,
        season: "spring",
      },
      tags: ["web"],
      technologies: ["react", "rails"],
      company: shopify,
      gallery: [],
    },
    {
      slug: "airing-manga",
      name: "Manga with airing anime shows service",
      status: "done",
      synopsis:
        "A very small service implemented for Dexify (mobile) to check which manga have an anime airing.",
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
      status: "paused",
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
        services: [
          { name: "MangaDex", url: "https://mangadex.org" },
          { name: "YourAnime.moe", url: "https://youranime.moe" },
        ],
      },
    },
    {
      slug: "weather-recommendations-shop-mini",
      status: "done",
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
      status: "done",
      synopsis:
        "Check out my favourite Spotify songs, artists, albums as well as what I'm listening to!",
      madeIn: {
        year: 2021,
      },
      tags: ["api", "oauth", "web"],
      technologies: ["node", "react", "js"],
      internalUrl: "/music",
    },
    {
      slug: "shopify-partners-store-access",
      name: "Sensitive permissions for Shopify Partners",
      status: "done",
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
      status: "active",
      synopsis: "The next go-to anime streaming information website.",
      featured: true,
      mobileImage: youranimeMobile,
      desktopImage: youranimeDesktop,
      madeIn: {
        year: 2016,
      },
      tags: ["web", "oauth", "api"],
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
        services: [
          { name: "Kitsu - More of what you love", url: "https://kitsu.io" },
          {
            name: "AniList: Track, Discover, Share Anime & Manga",
            url: "https://anilist.co",
          },
          {
            name: "YourAnime Accounts",
            url: "https://id.youranime.moe",
          },
        ],
      },
    },
    {
      slug: "github-discord-bot",
      name: "Github on Discord",
      status: "done",
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
      status: "done",
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
      status: "done",
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
      status: "stopped",
      synopsis:
        "An unofficial alternative Manga reader. Powered by Mangadex.org.",
      // url: "https://dexify.herokuapp.com",
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
      status: "active",
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
      slug: "youranime-accounts",
      name: "YourAnime Accounts",
      status: "active",
      desktopImage: youranimeAccountsDesktop,
      synopsis:
        "A custom-made OAuth (authentication) server for all of my apps.",
      madeIn: {
        year: 2020,
        season: "fall",
      },
      tags: ["oauth", "web"],
      technologies: ["rails"],
      url: "https://id.youranime.moe",
      watchDemo: {
        link: "https://www.youtube.com/embed/5mvfGUjjYUE",
        embed: true,
      },
      description: {
        normal:
          "An authentication system for my apps. One account for all of my services. " +
          "I use this service when I need seamless authentication across the private services " +
          "I develop on the side.",
        technical:
          "This service was built entirely in Ruby on Rails. I wanted to focus on simplicity " +
          "and ease of use so I used Google Accounts and Shopify Accounts as sources of inspiration. " +
          "This was originally for a Nintendo Switch clip sharing platform (called Misete.io) as a CAS " +
          "(Central Authentication Service) server. Implementing and maintaing the CAS proved to be " +
          "quite the chore, so I decided to rebuild it as an OAuth server using Doorkeeper, which follows " +
          "the OAuth 2.0 RFC specification. Please note: It is not possible for the public to register " +
          "any OAuth clients at this time.",
        services: [
          {
            name: "Doorkeeper - OAuth 2 provider for Rails and Grape",
            url: "https://doorkeeper.gitbook.io",
          },
        ],
      },
    },
    {
      slug: "misete",
      name: "Misete.io",
      status: "stopped",
      synopsis:
        "A space for watching and sharing Nintendo Switch clips across regions.",
      madeIn: {
        year: 2020,
        season: "spring",
      },
      tags: ["oauth", "web", "api"],
      technologies: ["rails"],
      watchDemo: {
        link: "https://www.youtube.com/embed/13vbgK3JLjQ",
        embed: true,
      },
    },
    {
      slug: "osusume",
      name: "O SUSUME (Watch parties)",
      status: "stopped",
      synopsis:
        "A tools serving as Shopify's internal recommendations anime system.",
      madeIn: {
        year: 2020,
        season: "summer",
      },
      internal: true,
      hackathon: true,
      company: shopify,
      tags: ["web"],
      technologies: ["react", "rails"],
    },
    {
      slug: "capstone",
      name: "Rent Management Dashboard",
      status: "done",
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
      status: "stopped",
      synopsis:
        "Manage your Rails application's operation permissions with ease.",
      madeIn: {
        year: 2018,
        season: "fall",
      },
      tags: ["library"],
      technologies: ["ruby", "rails"],
      internal: true,
      company: rakuten,
      url: "https://rubygems.org/gems/aki-operations",
    },
    {
      slug: "rakuten-database-tool",
      name: "Internal Database Management",
      status: "done",
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
      gallery: [],
    },
    {
      slug: "devpost-hackathon",
      name: "Voice Race",
      status: "done",
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
      status: "done",
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
      status: "paused",
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
      status: "active",
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
      status: "done",
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
      name: "Have-Fun ~ Tanoshimu (form. My Akinyele)",
      status: "done",
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
      github: "https://github.com/YourAnime-moe/youranime.moe",
      url: "https://youranime.moe",
    },
    {
      slug: "tanoshimu-video",
      name: "Tanoshimu Assets server",
      status: "done",
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
    case "C#": {
      return { name: "C#", backgroundColor: "#642076", color: "#fff" };
    }
    case "unity": {
      return { name: "Unity", backgroundColor: "#000", color: "#fff" };
    }
    case "java": {
      return { name: "Java", backgroundColor: "#b07219", color: "#fff" };
    }
    case "python": {
      return { name: "python", backgroundColor: "#234c6f", color: "#fff" }
    }
    case "mongo": {
      return { name: "mongoDB", backgroundColor: "#00ed64", color: "#000" }
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
