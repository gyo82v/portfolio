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
  }
];