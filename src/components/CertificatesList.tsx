import CertificateModal from "../modals/CertificateModal";
import { useState } from "react";
import type { Certificate } from "../types/dataTypes";
import CertificateCard from "./CertificateCard";

type Props = {
  certificates: Certificate[]
  className?: string
  listClassName?: string
}

export default function CertificatesList({ certificates, className, listClassName }: Props) {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <div >
      <div className={`flex flex-col gap-4 ${listClassName}`}>
        {certificates.map((c) => (
          <CertificateCard key={c.id} certificate={c} onView={(cert) => setActive(cert)} className={className} />
        ))}
      </div>
      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </div>
  );
}