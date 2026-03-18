import { FiDownload, FiEye } from "react-icons/fi";
import type { Certificate } from "../data/certificates";
import { focusEffects, transitions } from "../styles/patterns";
import { useLanguage } from "../i18n/useLanguage";

type Props = {
  certificate: Certificate;
  onView: (c: Certificate) => void; 
};

export default function CertificateCard({ certificate, onView }: Props) {
  const { t } = useLanguage();

  return (
    <article
      className={`
        flex flex-col bg-white dark:bg-slate-700 rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700
        p-3
      `}
      aria-labelledby={`cert-${certificate.id}-title`}
    >
      <div className="mt-3 flex-1">
        <h3 id={`cert-${certificate.id}-title`} className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {certificate.title}
        </h3>

        <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
          <span>{certificate.issuer}</span> · <span>{certificate.date}</span>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => onView(certificate)}
          className={`
            inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-[var(--accent)] text-white
            ${transitions} ${focusEffects}
          `}
          aria-label={t("resume.viewCertificate")}
        >
          <FiEye className="w-4 h-4" aria-hidden="true" />
          <span>{t("resume.view")}</span>
        </button>
      </div>
    </article>
  );
}