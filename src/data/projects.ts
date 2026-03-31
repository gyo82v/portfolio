import type { ProjectDataType } from "../types/dataTypes";

export const projects: ProjectDataType[] = [
  {
    id: "jade-lily",
    titleKey: "Jade Lily",
    descKey: "projects.jadeLily.description",
    techKeys: ["Next.js", "Firebase", "Tailwind"],
    image: "src/images/jade-lily.webp",
    imageAltKey: "projects.jadeLily.imageAlt",
    liveUrl: "https://jade-lily.vercel.app",
    repoUrl: "https://github.com/gyo82v/jade-lily"
  },
  {
    id: "NexTill",
    titleKey: "NexTill",
    descKey: "projects.nexTill.description",
    techKeys: ["React-vite", "Firebase", "Tailwind"],
    image: "src/images/laptop.webp",
    imageAltKey: "projects.chefMistral.imageAlt",
    liveUrl: "https://friendly-moonbeam-f330df.netlify.app/",
    repoUrl: "https://github.com/yourusername/chef-mistral"
  },
  {
    id: "Arcadium",
    titleKey: "Arcadium",
    descKey: "projects.arcadium.description",
    techKeys: ["React-vite", "Tailwind", "Firebase"],
    image: "src/images/arcadium.webp",
    imageAltKey: "projects.arcadium.imageAlt",
    liveUrl: "https://resonant-starship-25cd8f.netlify.app/",
    repoUrl: "https://github.com/yourusername/battleship"
  }
];