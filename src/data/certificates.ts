// src/data/certificates.ts
export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string; // e.g. "2024-06"
  file: string; // path to pdf, e.g. "/assets/certificates/frontend-dev.pdf"
  previewImage?: string; // optional preview image path e.g. "/assets/certificates/frontend-dev.jpg"
};

export const certificates: Certificate[] = [
  {
    id: "fullStack-dev",
    title: "FullStack Developer Certificate",
    issuer: "Scrimba",
    date: "2025-11",
    file: "/assets/certificates/FullStack-developer.pdf",
    previewImage: "/assets/certificates/FullStack-developer.pdf"
  },
  {
    id: "backend-dev",
    title: "Backend Developer Certificate",
    issuer: "Scrimba",
    date: "2025-11",
    file: "/assets/certificates/Backend-developer.pdf",
    previewImage: "/assets/certificates/previews/backend-developer.jpg"
  },
  {
    id: "frontend-dev",
    title: "Frontend Developer Certificate",
    issuer: "Coursera",
    date: "2024-11",
    file: "/assets/certificates/frontend-development.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "Cybersecurity",
    title: "Cybersecurity google Certificate",
    issuer: "Coursera",
    date: "2024-03",
    file: "/assets/certificates/google-cybersecurity.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "it-support",
    title: "It support google Certificate",
    issuer: "Coursera",
    date: "2023-10",
    file: "/assets/certificates/google-it-support.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "advanced-react",
    title: "Advanced React Certificate",
    issuer: "Scrimba",
    date: "2025-03",
    file: "/assets/certificates/Advanced-React.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "frontend-dev",
    title: "Frontend Developer Certificate",
    issuer: "Frontend Academy",
    date: "2024-06",
    file: "/assets/certificates/frontend-developer.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "tailwind",
    title: "Tailwind CSS Certificate",
    issuer: "Scrimba",
    date: "2025-01",
    file: "/assets/certificates/Tailwind.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "Next.js",
    title: "Next.js Certificate",
    issuer: "Scrimba",
    date: "2025-04",
    file: "/assets/certificates/Next.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "Javascript",
    title: "Javascript Certificate",
    issuer: "Coursera",
    date: "2025-04",
    file: "/assets/certificates/javascript-ucdavis.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "command-line",
    title: "Command line Certificate",
    issuer: "Scrimba",
    date: "2025-04",
    file: "/assets/certificates/Command-line.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "Python",
    title: "Python beginner Certificate",
    issuer: "Coursera",
    date: "2023-03",
    file: "/assets/certificates/python-for-everybody.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  },
  {
    id: "voxy",
    title: "Intermediate english Certificate",
    issuer: "Coursera",
    date: "2023-12",
    file: "/assets/certificates/english-voxy-intermediate.pdf",
    previewImage: "/assets/certificates/previews/frontend-developer.jpg"
  }
];