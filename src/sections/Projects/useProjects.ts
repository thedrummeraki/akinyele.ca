import { Project } from "./types";

export default function useProjects() {
  const projects: Project[] = [
    {
      slug: 'dexify-mobile',
      name: 'Dexify (mobile)',
      synopsis: 'Unofficial Mangadex.org mobile client.',
      madeIn: {
        year: 2021,
        season: 'fall',
      },
      tags: ['mobile'],
      github: true,
      url: 'https://github.com/thedrummeraki/dexify-mobile/releases',
    },
    {
      slug: 'youranime',
      name: 'YourAnime.moe',
      synopsis: 'The next go-to anime streaming information website.',
      madeIn: {
        year: 2016,
      },
      tags: ['web', 'api'],
      github: 'https://github.com/YourAnime-moe/youranime.moe',
      url: 'https://youranime.moe',
    },
    {
      slug: 'github-discord-bot',
      name: 'Github on Discord',
      synopsis: 'A personal Github assistant on Discord.',
      tags: ['bot'],
      madeIn: {
        year: 2020,
      }
    },
    {
      slug: 'dexify',
      name: 'Dexify',
      synopsis: 'An unofficial alternative Manga reader. Powered by Mangadex.org.',
      url: 'https://dexify.herokuapp.com',
      tags: ['web'],
      madeIn: {
        year: 2021,
        season: 'fall'
      }
    },
    {
      slug: 'mangadex',
      name: 'Mangadex (Ruby Gem)',
      synopsis: 'Your (unofficial) favourite Ruby gem for interacting with Mangadex.org.',
      madeIn: {
        year: 2021,
        season: 'fall',
      },
      tags: ['library'],
      url: 'https://rubygems.org/gems/mangadex',
      github: true,
    },
    {
      slug: 'oauth-server',
      name: 'YourAnime ID',
      synopsis: 'A custom-made OAuth (authentication) server for all of my apps.',
      madeIn: {
        year: 2020,
        season: 'fall',
      },
      tags: ['web'],
      url: 'https://id.youranime.moe'
    },
    {
      slug: 'misete',
      name: 'Misete.io',
      synopsis: 'A space for watching and sharing Nintendo Switch clips.',
      madeIn: {
        year: 2020,
        season: 'spring',
      },
      tags: ['web', 'api']
    },
    {
      slug: 'osusume',
      name: "O SUSUME (Watch parties)",
      synopsis: "A tools serving as Shopify's internal recommendations anime system.",
      madeIn: {
        year: 2020,
        season: 'summer',
      },
      tags: ['web'],
    },
    {
      slug: 'notaki',
      name: 'Notaki.ca (formerly forevernote.ca)',
      synopsis: 'A note-taking app for students',
      madeIn: {
        year: 2017,
        season: 'summer',
      },
      tags: ['web'],
    },
    {
      slug: 'capstone',
      name: 'Rent Management Dashboard',
      synopsis: 'Manage your rent payments with this simple yet powerful dashboard.',
      madeIn: {
        year: 2019,
        season: 'winter',
      },
      tags: ['web'],
    },
    {
      slug: 'youranime-admin',
      name: 'YourAnime.moe Admin panel',
      synopsis: 'YourAnime.moe: supercharged.',
      madeIn: {
        year: 2020,
        season: 'summer',
      },
      tags: ['web'],
    }
  ];

  return projects;
}
