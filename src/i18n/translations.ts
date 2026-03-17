
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
    resume : {
      view: "View",
      download: "Download",
      viewCertificate: "View certificate: {{title}}",
      downloadCertificateA11y: "Download certificate: {{title}}",
      close: "Close",
      certificateViewerAria: "Certificate viewer: {{title}}"
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
          certsTitle: "Selected certificates",
          viewAllCertificates: "View all certificates on my CV",
          resumeHint: "Opens in a new tab (PDF)",
          description: {
            paragraph1:
              "I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems and are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS and Styled Components.",
            paragraph2:
              "My background is in teaching and marketing, and I have a bachelor's degree in English from King's College. I also have five adorable cats."
          },
        },
        contact : {
          title: "Get in touch",
          description:
          "Have a question, a project in mind, or just want to say hello? Feel free to reach out.",
          emailCta: "Send me an email",
          emailAria: "Send an email"
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
        title: "Curriculum",
        header: {
          name: "Jane Smith",
          profession: "Front-End Developer",
          location: "London, UK", // you mentioned :contentReference[oaicite:3]{index=3}
          contactEmail: "jane@domain.com"
        },
        download: "Download CV",
        open: "Open in new tab",
        openInNewTab: "Open CV in a new tab",
        profileTitle: "Profile",
        profileText:
          "I am a front-end developer with experience building performant and accessible web applications. I focus on JavaScript, React and modern CSS workflows. I enjoy turning complex problems into simple, beautiful UI.",
        experienceTitle: "Experience",
        sampleJob: {
          title: "Frontend Developer",
          company: "Acme Web",
          date: "2023 — Present",
          description: "Building web apps with React, TypeScript and Tailwind CSS."
        },
        educationTitle: "Education",
        sampleEdu: {
          degree: "BA English",
          institution: "King's College London",
          date: "2018"
        },
        skillsTitle: "Skills",
        languagesTitle: "Languages",
        certificatesTitle: "Certificates",
        downloadCertificate: "Download certificate",
        note: "If you’d like a longer CV or references, please contact me."
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
    resume : {
      view: "Visualizza",
      download: "Scarica",
      viewCertificate: "Visualizza certificato: {{title}}",
      downloadCertificateA11y: "Scarica certificato: {{title}}",
      close: "Chiudi",
      certificateViewerAria: "Visualizzatore certificato: {{title}}"
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
          certsTitle: "Certificati selezionati",
          viewAllCertificates: "Vedi tutti i certificati sul mio CV",
          resumeHint: "Si apre in una nuova scheda (PDF)",
          description: {
            paragraph1:
              "Sono uno sviluppatore web e designer basato a Londra, Regno Unito. Amo costruire applicazioni che risolvono problemi reali e che siano piacevoli da usare. Le mie specialità includono TypeScript, React JS, Tailwind CSS e Styled Components.",
            paragraph2:
              "Il mio background è nell'insegnamento e nel marketing, e ho una laurea in inglese presso King's College. Ho anche cinque adorabili gatti."
          },
        },
        contact : {
          title: "Contattami",
          description:
          "Hai una domanda, un progetto in mente o vuoi semplicemente salutarmi? Scrivimi pure.",
          emailCta: "Mandami un’email",
          emailAria: "Invia un’email"
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
    header: {
      name: "Jane Smith",
      profession: "Sviluppatore Front-End",
      location: "Londra, Regno Unito",
      contactEmail: "jane@domain.com"
    },
    download: "Scarica CV",
    open: "Apri in una nuova scheda",
    openInNewTab: "Apri il CV in una nuova scheda",
    profileTitle: "Profilo",
    profileText:
      "Sono uno sviluppatore front-end con esperienza nella costruzione di applicazioni web performanti e accessibili. Mi focalizzo su JavaScript, React e moderne pratiche CSS. Mi piace trasformare problemi complessi in interfacce semplici e curate.",
    experienceTitle: "Esperienza",
    sampleJob: {
      title: "Sviluppatore Frontend",
      company: "Acme Web",
      date: "2023 — Presente",
      description: "Sviluppo applicazioni web con React, TypeScript e Tailwind CSS."
    },
    educationTitle: "Istruzione",
    sampleEdu: {
      degree: "Laurea in Inglese",
      institution: "King's College London",
      date: "2018"
    },
    skillsTitle: "Competenze",
    languagesTitle: "Lingue",
    certificatesTitle: "Certificati",
    downloadCertificate: "Scarica certificato",
    note: "Se desideri un CV più dettagliato o referenze, contattami."
  },
      projects: {
        title: "Progetti",
      },
    },
  },
}
