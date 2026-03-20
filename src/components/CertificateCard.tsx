import { FiEye } from "react-icons/fi";
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
        flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl 
        bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200
        overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700
      `}
      aria-labelledby={`cert-${certificate.id}-title`}
    >
      <div className="flex-1 flex flex-col items-center justify-center  md:flex-2 ">
        <h3 id={`cert-${certificate.id}-title`} className="text-sm text-center font-semibold text-slate-900 dark:text-slate-100">
          {certificate.title}
        </h3>
      </div>
      <div className="text-xs flex-1 flex flex-col items-center justify-center  text-slate-600 dark:text-slate-300 ">
        <p>{certificate.issuer}</p>
        <p>{certificate.date}</p>
      </div>
      <div className="flex flex-1 md:flex-2 items-center w-full justify-center gap-2 ">
        <button
          type="button"
          onClick={() => onView(certificate)}
          className={` w-full
            inline-flex items-center justify-center gap-1
            px-3 py-2 rounded-md text-sm bg-[var(--accent)] text-white
            ${transitions} ${focusEffects} hover:scale-105 active:scale-95
          `}
          aria-label={t("resume.viewCertificate")}
        >
          <FiEye className="w-4 h-4" aria-hidden="true" />
          <span className="hidden md:block">{t("resume.view")}</span>
        </button>
      </div>
    </article>
  );
}