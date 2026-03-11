
export type Lang = "en" | "it";

export type NestedStrings = {
  [key: string]: string | NestedStrings;
};

export const translations: Record<Lang, NestedStrings> = {
  en: {
    nav: {
      home: "Home",
      resume: "Resume",
      projects: "Projects",
    },
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    lang: {
      en: "English",
      it: "Italiano",
      ariaToggle: "Toggle language",
    },
    pages: {
      home: {
        hero : {
          title : "Hi, i am ",
          description : "Frontend developer"
        }
      },
      resume: {
        title: "Resume",
      },
      projects: {
        title: "Projects",
      },
    },
  },
  it: {
    nav: {
      home: "Home",
      resume: "Curriculum",
      projects: "Progetti",
    },
    theme: {
      switchToLight: "Passa alla modalità chiara",
      switchToDark: "Passa alla modalità scura",
      lightMode: "Modalità chiara",
      darkMode: "Modalità scura",
    },
    lang: {
      en: "English",
      it: "Italiano",
      ariaToggle: "Cambia lingua",
    },
    pages: {
      home: {
        title: "Benvenuto",
        intro: "Ciao — sono uno sviluppatore che crea piccole app pulite.",
        hero: {
          title: "Ciao, sono ",
          description : "Frontend developer"
        }
      },
      resume: {
        title: "Curriculum",
      },
      projects: {
        title: "Progetti",
      },
    },
  },
};
