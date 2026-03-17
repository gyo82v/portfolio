// src/components/CertificatesList.tsx
import React, { useState, useRef, useEffect } from "react";
import type { Certificate } from "../data/certificates";
import CertificateCard from "./CertificateCard";
import { useLanguage } from "../i18n/useLanguage";
import { focusEffects, transitions } from "../styles/patterns";
import { FiX } from "react-icons/fi";

type Props = {
  certificates: Certificate[];
  showCount?: number | null; // default: show all; if number provided, show that many
};

export default function CertificatesList({ certificates, showCount = null }: Props) {
  const { t } = useLanguage();
  const [active, setActive] = useState<Certificate | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // When modal opens, set focus to close button, and add escape key listener
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    if (active) {
      closeBtnRef.current?.focus();
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const list = showCount && showCount > 0 ? certificates.slice(0, showCount) : certificates;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {list.map((c) => (
          <CertificateCard key={c.id} certificate={c} onView={(cert) => setActive(cert)} />
        ))}
      </div>

      {/* Modal viewer */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("resume.certificateViewerAria", { title: active.title })}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setActive(null)}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-5xl bg-white dark:bg-slate-900 rounded-xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden">
            {/* header */}
            <header className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {active.title}
                  </h3>
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    {active.issuer} · {active.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={active.file}
                  download
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--accent)] text-white text-xs ${transitions} ${focusEffects}`}
                >
                  {t("resume.download")}
                </a>

                <button
                  ref={closeBtnRef}
                  onClick={() => setActive(null)}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${transitions} ${focusEffects}`}
                  aria-label={t("resume.close")}
                >
                  <FiX className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </header>

            {/* iframe viewer */}
            <div className="w-full h-[70vh] bg-slate-50 dark:bg-slate-800">
              <iframe
                src={active.file}
                title={active.title}
                className="w-full h-full"
                aria-label={`${active.title} PDF viewer`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}