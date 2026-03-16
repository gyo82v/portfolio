// src/data/certificates.ts
export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string; // ISO or short e.g. "2024-06"
  file: string; // path to PDF in /assets/certificates/
};

export const certificates: Certificate[] = [
  {
    id: "frontend-dev",
    title: "Frontend Developer Certificate",
    issuer: "Frontend Academy",
    date: "2024-06",
    file: "/assets/certificates/frontend-developer.pdf"
  },
  {
    id: "backend-dev",
    title: "Backend Developer Certificate",
    issuer: "Backend Institute",
    date: "2023-11",
    file: "/assets/certificates/backend-developer.pdf"
  }
  // add more items...
];