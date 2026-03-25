
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
      viewCertificate: "View certificate",
      downloadCertificateA11y: "Download certificate",
      close: "Close",
      certificateViewerAria: "Certificate viewer"
    },
    footer : {
      subtitle: "Available for freelance work and new opportunities",
      emailAria: "Send me an email",
      linkedinAria: "Visit my LinkedIn profile",
      githubAria: "Visit my GitHub profile",
      note: "Built with React, TypeScript, and Tailwind CSS"
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
          resume: "View Resume",
          certsTitle: "Professional Certificates",
          description: "I’m a web developer and designer based between London and Bergamo, Italy. I focus on building reliable, user-friendly web applications using Next.js, TypeScript, React, Tailwind CSS, and Firebase. I’m Italian and have lived in London for over 10 years. My background includes IT support and restaurant management, and I’ve spent a year working in Australia. I enjoy working in international environments, travelling, and I’m currently aiming to expand my skills with React Native.",
          description1: "I’m a web developer and designer based between London and Bergamo, Italy. I focus on building reliable, user-friendly web applications using ",
          description2: " and ",
          description3: ". I’m Italian and have lived in London for over 10 years. My background includes IT support and restaurant management, and I’ve spent a year working in Australia. I enjoy working in international environments, travelling, and I’m currently aiming to expand my skills with React Native."
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
          profession: "Front-End Developer",
          location: "London, UK/ Bergamo, Italy", 
        },
        download: "Download CV",
        home: "Home",
        projects: "My Projects",
        open: "Open in new tab",
        openInNewTab: "Open CV in a new tab",
        profileTitle: "Profile",
        profileText:
          "I am a front-end developer with experience building performant and accessible web applications. I focus on JavaScript, React and modern CSS workflows. I enjoy turning complex problems into simple, beautiful UI.",
        experienceTitle: "Experience",
        internationalExperienceTitle: "International Experiences",
        maestriPasta: {
          title: "Assistant Manager",
          location: "London",
          company: "Maestri della Pasta",
          date: "2019 — 2022",
          description: "Managed kitchen operations, stock control, and daily workflow to ensure smooth service. Supervised food preparation, including fresh pasta production, and supported the team in maintaining high standards of quality, organization, and efficiency."
        },
        deckchairs: {
          title: "Deckchair Attendant",
          company: "Deckchairs ltd",
          date: "2007; 2012; 2014-2019",
          location: "Royal Parks, London",
          description: `Worked seasonally in the Royal Parks of London, managing deckchairs and assisting visitors throughout the park. The role involved handling a high volume of customers, often from many different countries, which helped strengthen my English and improve my communication skills in a multicultural environment. It also required strong organisation, customer service, and the ability to manage multiple requests at the same time.`
        },
        cdc: {
          title: "IT Support Consultant",
          company: "CDC Bergamo",
          date: "2000-2002",
          location: "Bergamo",
          description: `Provided technical support in a computer repair workshop, repairing PCs, assembling new computers, and assisting customers by phone. Gained hands-on experience in hardware troubleshooting, system setup, and customer support.`
        },
        farm: {
          title: "Australia",
          date: "2013-2014",
          location: "Cairns - Mareeba",
          description: `Lived and worked for one year in the Australian Outback, an experience that had a profound personal impact and remains my most meaningful work experience. The role involved working both in the fields, harvesting limes, and in the packing shed, preparing and packaging produce for distribution. Beyond the job itself, this experience represented a unique opportunity to live in a remote environment, develop resilience, adaptability, and a strong sense of independence, while fully immersing myself in Australian rural life.`
        },
        hostel: {
          title: "USA",
          date: "2002-2005",
          location: "Los Angeles - San Diego",
          description: `My first experience outside Italy, and a defining step in my personal and cultural growth. Living and working in the United States was both challenging and exciting, particularly due to the language barrier and cultural differences. I worked in hostels, pubs, and music events, gaining hands-on experience in fast-paced, international environments. This experience sparked my passion for global cultures, different languages, and diverse lifestyles, and strengthened my adaptability, communication skills, and openness to new perspectives.`
        },
        educationTitle: "Education",
        certificatesMainTitle : "Key Certifications",
        school: {
          degree: "Scientific High School (first two years)",
          institution: "Fantoni Liceo Scientifico",
          date: "1999"
        },
        skillsTitle: "Skills",
        languagesTitle: "Languages",
        languageEnglish : "English — C1 (Advanced)",
        languageItalian: "Italian — Native",
        certificatesTitle: "Additional Certifications",
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
      viewCertificate: "Visualizza certificato",
      downloadCertificateA11y: "Scarica certificato",
      close: "Chiudi",
      certificateViewerAria: "Visualizzatore certificato"
    },
    footer: {
      subtitle: "Disponibile per collaborazioni freelance e nuove opportunità",
      emailAria: "Inviami un'email",
      linkedinAria: "Visita il mio profilo LinkedIn",
      githubAria: "Visita il mio profilo GitHub",
      note: "Realizzato con React, TypeScript e Tailwind CSS"
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
          resume: "Visualizza CV",
          certsTitle: "Certificati Professionali",
          description: "Sono uno sviluppatore web e designer con base tra Londra e Bergamo. Mi occupo di creare applicazioni web affidabili e facili da usare utilizzando Next.js, TypeScript, React-vite, Tailwind CSS e Firebase. Sono italiano ho vissuto a Londra da oltre 10 anni. Il mio background include IT support e gestione di ristoranti, e ho lavorato per un anno in Australia. Mi piace lavorare in contesti internazionali, viaggiare e il mio obiettivo attuale è approfondire React Native.",
          description1: "Sono uno sviluppatore web e designer con base tra Londra e Bergamo. Mi occupo di creare applicazioni web affidabili e facili da usare utilizzando ",
          description2: " e ",
          description3: ". Sono italiano ho vissuto a Londra da oltre 10 anni. Il mio background include IT support e gestione di ristoranti, e ho lavorato per un anno in Australia. Mi piace lavorare in contesti internazionali, viaggiare e il mio obiettivo attuale è approfondire React Native."
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
      profession: "Sviluppatore Front-End",
      location: "Londra, UK/ Bergamo, It",
    },
    download: "Scarica CV",
    home: "Home",
    projects: "Progetti",
    open: "Apri in una nuova scheda",
    openInNewTab: "Apri il CV in una nuova scheda",
    profileTitle: "Profilo",
    profileText:
      "Sono uno sviluppatore front-end con esperienza nella costruzione di applicazioni web performanti e accessibili. Mi focalizzo su JavaScript, React e moderne pratiche CSS. Mi piace trasformare problemi complessi in interfacce semplici e curate.",
    experienceTitle: "Esperienza",
    internationalExperienceTitle: "Esperienze Internazionali",
    maestriPasta: {
      title: "Assistant Manager",
      company: "Maestri della Pasta",
      date: "2019 — 2022",
      location: "Londra",
      description: "Ho gestito le operazioni della cucina, il controllo delle scorte e l’organizzazione del lavoro quotidiano, garantendo un servizio fluido ed efficiente. Mi occupavo anche della preparazione dei cibi, inclusa la produzione di pasta fresca, supportando il team nel mantenimento di elevati standard di qualità, ordine e produttività."
    },
    deckchairs: {
      title: "Addetto ai servizi nel parco",
      company: "Deckchairs ltd",
      date: "2007; 2012; 2014-2019",
      location: "Royal Parks, Londra",
      description: `Ho lavorato stagionalmente nei Royal Parks di Londra, occupandomi della gestione delle sdraio e dell’assistenza ai visitatori all’interno del parco. Il ruolo prevedeva la gestione di un alto numero di clienti, spesso provenienti da diversi Paesi, e mi ha aiutato a migliorare molto l’inglese e le mie capacità di comunicazione in un contesto multiculturale. Mi ha inoltre permesso di sviluppare capacità organizzative, di assistenza al cliente e di gestione di più richieste contemporaneamente.`
    },
    cdc: {
      title: "Consulente IT",
      company: "CDC Bergamo",
      date: "2000-2002",
      location: "Bergamo",
      description: `Ho lavorato in un laboratorio di assistenza e riparazione computer, occupandomi della riparazione di PC, dell’assemblaggio di nuovi computer e dell’assistenza ai clienti per telefono. Ho acquisito esperienza pratica nella risoluzione di problemi hardware, nell’installazione dei sistemi e nel supporto tecnico ai clienti.`
    },
    farm: {
      title: "Australia",
      date: "2013-2014",
      location: "Cairns - Mareeba",
      description: `Ho vissuto e lavorato per un anno nell’Outback australiano, un’esperienza che ha avuto un forte impatto personale ed è stata di gran lunga una delle più significative della mia vita. Il lavoro si svolgeva in due aree principali: nei campi, occupandomi della raccolta dei lime, e nel capannone di confezionamento, dedicato alla selezione e all’imballaggio del prodotto. Al di là dell’attività lavorativa, questa esperienza mi ha permesso di vivere in un contesto remoto, sviluppare grande capacità di adattamento, resilienza e autonomia, e immergermi completamente nella realtà rurale australiana.`
    },
    hostel: {
      title: "USA",
      date: "2002-2005",
      location: "Los Angeles - San Diego",
      description: `È stata la mia prima esperienza fuori dall’Italia e ha rappresentato una tappa fondamentale nella mia crescita personale e culturale. Vivere e lavorare negli Stati Uniti è stato stimolante ma anche impegnativo, soprattutto per la lingua e le differenze culturali. Ho lavorato in ostelli, pub ed eventi musicali, entrando in contatto con ambienti dinamici e internazionali. Questa esperienza mi ha fatto innamorare delle culture internazionali, delle lingue e dei diversi stili di vita, aiutandomi a sviluppare capacità di adattamento, comunicazione e apertura mentale.`
    },
    educationTitle: "Istruzione",
    certificatesMainTitle : "Certificazioni Principali",
    school: {
      degree: "Biennio liceo scientifico",
      institution: "Fantoni Liceo Scientifico",
      date: "1999"
    },
    skillsTitle: "Competenze",
    languagesTitle: "Lingue",
    languageEnglish : "Inglese — C1 (Avanzato)",
    languageItalian: "Italiano — Madrelingua",
    certificatesTitle: "Certificazioni Aggiuntive",
    downloadCertificate: "Scarica certificato",
    note: "Se desideri un CV più dettagliato o referenze, contattami."
  },
      projects: {
        title: "Progetti",
      },
    },
  },
}
