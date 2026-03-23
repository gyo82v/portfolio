import CertificateModal from "../modals/CertificateModal";
import { useState } from "react";
import type { Certificate } from "../types/dataTypes";
import CertificateCard from "./CertificateCard";

export default function CertificatesList({ certificates }: {certificates : Certificate[]}) {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <div >
      <div className="flex flex-col gap-4">
        {certificates.map((c) => (
          <CertificateCard key={c.id} certificate={c} onView={(cert) => setActive(cert)} />
        ))}
      </div>
      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </div>
  );
}