import { useEffect, useRef } from "react";
import type { Certificate } from "../types/dataTypes";
import { useLanguage } from "../i18n/useLanguage";
import { focusEffects, transitions } from "../styles/patterns";
import { FiX } from "react-icons/fi";

type Props = {
  certificate: Certificate | null;
  onClose: () => void;
  downloadLabel?: string;
  closeLabel?: string;
  ariaLabel?: string;
};

export default function CertificateModal({
  certificate,
  onClose,
  downloadLabel,
  closeLabel,
  ariaLabel,
}: Props) {
  const { t } = useLanguage();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (certificate) {
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
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel ?? t("resume.certificateViewerAria")}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
        <header className="flex items-center justify-between border-b border-slate-100 p-3 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {certificate.title}
              </h3>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                {certificate.issuer} · {certificate.date}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.file}
              download
              className={`inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-3 py-1 text-xs text-white ${transitions} ${focusEffects}`}
            >
              {downloadLabel ?? t("resume.download")}
            </a>

            <button
              ref={closeBtnRef}
              onClick={onClose}
              className={`inline-flex items-center justify-center rounded-md p-2 ${transitions} ${focusEffects}`}
              aria-label={closeLabel ?? t("resume.close")}
            >
              <FiX className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="h-[70vh] w-full bg-slate-50 dark:bg-slate-800">
          <iframe
            src={certificate.file}
            title={certificate.title}
            className="h-full w-full"
            aria-label={`${certificate.title} PDF viewer`}
          />
        </div>
      </div>
    </div>
  );
}