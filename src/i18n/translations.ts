
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
        },
        projects : {
          sectionAria: "Projects section",
          sectionTitle: "Projects",
          sectionSubtitle: "Selected projects — quick overview and links",
          viewLive: "View live",
          viewRepo: "View repo",
          jadeLily : {
            title : "Jade Lily",
            description : "An e-commerce demo site showcasing product pages and a cart — deployed on Vercel.",
            imageAlt : "Screenshot of Jade Lily project"

          },
          nextTill : {
            title : "NextTill",
            description : "A browser implementation of the classic Battleship game with a small AI.",
            imageAlt : "Screenshot nextTill project"

          },
          chefMistral : {
            title: "Chef Mistral",
            description : "A recipe PWA for creating and sharing food recipes with offline support.",
            imageAlt : "Screenshot of chef mistral project"

          }
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
        },
        projects : {
          sectionAria: "Sezione progetti",
          sectionTitle: "Progetti",
          sectionSubtitle: "Progetti selezionati — panoramica e link",
          viewLive: "Vedi live",
          viewRepo: "Vedi repo",
          jadeLily : {
            title: "Jade Lily",
            description : "Un sito demo e-commerce con pagine prodotto e carrello — distribuito su Vercel.",
            imageAlt : "Screenshot del progetto Jade Lily"

          },
          nextTill : {
            title : "NextTill",
            description : "Una versione browser del classico gioco Battleship con una piccola IA.",
            imageAlt : "Screenshot del progetto nextTill"

          },
          chefMistral : {
            title : "Chef Mistral",
            description : "Una PWA per ricette per creare e condividere ricette con supporto offline.",
            imageAlt : "Screenshot del progetto chef Mistral"

          }
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
