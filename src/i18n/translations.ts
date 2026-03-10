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
        title: "Welcome",
        intro: "Hi — I'm a developer building small, clean apps.",
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

/*
export type Lang = "en" | "it";

export const translations: Record<Lang, Record<string, any>> = {
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
        title: "Welcome",
        intro: "Hi — I'm a developer building small, clean apps.",
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
*/