export interface ProjectData {
  id: string;
  titleKey: string;      // translation key for title, e.g. 'projects.jadeLily.title'
  descKey: string;       // translation key for description, e.g. 'projects.jadeLily.description'
  techKeys: string[];    // array of translation keys for tech names, e.g. ['tech.nextjs']
  image: string;         // path to screenshot image
  imageAltKey: string;   // translation key for the image alt text, interpolation with {name} if needed
  liveUrl: string;       // live demo url
  repoUrl?: string;      // optional repo url
  type?: string
}


export const smallProjects: ProjectData[] = [
  {
    id: "jade-lily",
    titleKey: "pages.home.projects.jadeLily.title",
    descKey: "pages.home.projects.jadeLily.description",
    techKeys: ["Next.js", "Firebase", "Tailwind"],
    image: "src/images/jade-lily.png",
    imageAltKey: "pages.home.projects.jadeLily.imageAlt",
    liveUrl: "https://jade-lily.vercel.app",
    repoUrl: "https://github.com/gyo82v/jade-lily",
    type: "website"
  },
  {
    id: "NexTill",
    titleKey: "pages.home.projects.nexTill.title",
    descKey: "pages.home.projects.nexTill.description",
    techKeys: ["React-vite", "Firebase", "Tailwind"],
    image: "src/images/laptop.png",
    imageAltKey: "pages.home.projects.chefMistral.imageAlt",
    liveUrl: "https://friendly-moonbeam-f330df.netlify.app/",
    repoUrl: "https://github.com/yourusername/chef-mistral",
    type: "game"
  },
  {
    id: "Arcadium",
    titleKey: "pages.home.projects.arcadium.title",
    descKey: "pages.home.projects.arcadium.description",
    techKeys: ["React-vite", "Tailwind", "Firebase"],
    image: "src/images/arcadium.jpg",
    imageAltKey: "pages.home.projects.arcadium.imageAlt",
    liveUrl: "https://resonant-starship-25cd8f.netlify.app/",
    repoUrl: "https://github.com/yourusername/battleship",
    type: "ai"
  }
];