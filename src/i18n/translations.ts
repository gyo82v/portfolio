
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
        about : {
          title : "About me",
          subtitle: "Front-End Developer and travel lover from London",
          skillsTitle: "Skills",
          resume: "Download CV",
          resumeHint: "Opens in a new tab (PDF)",
          description: {
            paragraph1:
              "I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems and are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS and Styled Components.",
            paragraph2:
              "My background is in teaching and marketing, and I have a bachelor's degree in English from King's College. I also have five adorable cats."
          },
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
          nexTill : {
            title : "NexTill",
            description : "A browser implementation of the classic Battleship game with a small AI.",
            imageAlt : "Screenshot nextTill project"

          },
          arcadium : {
            title: "Arcadium",
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
        about : {
          title: "Chi sono",
          subtitle: "Sviluppatore Front-End e amante dei viaggi da Londra",
          skillsTitle: "Competenze",
          resume: "Scarica il CV",
          resumeHint: "Si apre in una nuova scheda (PDF)",
          description: {
            paragraph1:
              "Sono uno sviluppatore web e designer basato a Londra, Regno Unito. Amo costruire applicazioni che risolvono problemi reali e che siano piacevoli da usare. Le mie specialità includono TypeScript, React JS, Tailwind CSS e Styled Components.",
            paragraph2:
              "Il mio background è nell'insegnamento e nel marketing, e ho una laurea in inglese presso King's College. Ho anche cinque adorabili gatti."
          },
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
          nexTill : {
            title : "NextTill",
            description : "Una versione browser del classico gioco Battleship con una piccola IA.",
            imageAlt : "Screenshot del progetto nextTill"

          },
          arcadium : {
            title : "Arcadium",
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
