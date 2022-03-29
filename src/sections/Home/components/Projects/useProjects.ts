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
    }
  ];

  return projects;
}
