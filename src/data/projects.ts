// src/data/projects.ts
export interface ProjectData {
  id: string;
  titleKey: string;      // translation key for title, e.g. 'projects.jadeLily.title'
  descKey: string;       // translation key for description, e.g. 'projects.jadeLily.description'
  techKeys: string[];    // array of translation keys for tech names, e.g. ['tech.nextjs']
  image: string;         // path to screenshot image
  imageAltKey: string;   // translation key for the image alt text, interpolation with {name} if needed
  liveUrl: string;       // live demo url
  repoUrl?: string;      // optional repo url
}

export const projects: ProjectData[] = [
  {
    id: "jade-lily",
    titleKey: "pages.home.projects.jadeLily.title",
    descKey: "pages.home.projects.jadeLily.description",
    techKeys: ["Next.js", "Firebase", "Tailwind"],
    image: "src/images/jade-lily.png",
    imageAltKey: "pages.home.projects.jadeLily.imageAlt",
    liveUrl: "https://jade-lily.vercel.app",
    repoUrl: "https://github.com/gyo82v/jade-lily"
  },
  {
    id: "chef-mistral",
    titleKey: "projects.chefMistral.title",
    descKey: "projects.chefMistral.description",
    techKeys: ["tech.react", "tech.firebase", "tech.tailwind"],
    image: "/images/projects/chef-mistral.png",
    imageAltKey: "projects.chefMistral.imageAlt",
    liveUrl: "https://chef-mistral.vercel.app",
    repoUrl: "https://github.com/yourusername/chef-mistral"
  },
  {
    id: "battleship",
    titleKey: "projects.battleship.title",
    descKey: "projects.battleship.description",
    techKeys: ["tech.react", "tech.vite", "tech.css"],
    image: "/images/projects/battleship.png",
    imageAltKey: "projects.battleship.imageAlt",
    liveUrl: "https://your-username.github.io/battleship",
    repoUrl: "https://github.com/yourusername/battleship"
  }
];