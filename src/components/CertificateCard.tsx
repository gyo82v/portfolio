// src/components/CertificateCard.tsx
import React from "react";
import { FiDownload, FiEye } from "react-icons/fi";
import type { Certificate } from "../data/certificates";
import { focusEffects, transitions } from "../styles/patterns";
import { useLanguage } from "../i18n/useLanguage";

type Props = {
  certificate: Certificate;
  onView: (c: Certificate) => void; // called when user clicks "View"
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
      <div className="w-full h-36 md:h-28 lg:h-24 overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        {certificate.previewImage ? (
          <img
            src={certificate.previewImage}
            alt={`${certificate.title} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="text-slate-500 dark:text-slate-300 text-xs text-center px-3">
            <div className="font-medium">{certificate.title}</div>
            <div className="mt-1 text-[11px]">{certificate.issuer}</div>
          </div>
        )}
      </div>

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
          aria-label={t("resume.viewCertificate", { title: certificate.title })}
        >
          <FiEye className="w-4 h-4" aria-hidden="true" />
          <span>{t("resume.view")}</span>
        </button>

        <a
          href={certificate.file}
          download
          className={`
            inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white text-slate-800 ring-1 ring-slate-200
            dark:bg-slate-800 dark:text-slate-200 ${transitions} ${focusEffects}
          `}
          aria-label={t("resume.downloadCertificateA11y", { title: certificate.title })}
        >
          <FiDownload className="w-4 h-4" aria-hidden="true" />
          <span>{t("resume.download")}</span>
        </a>
      </div>
    </article>
  );
}