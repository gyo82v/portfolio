import { useLanguage } from "../i18n/useLanguage";

export default function Hero({ imageSrc = "/images/profile.jpg"}) {
  const { t } = useLanguage();

  return (
    <section id="home" aria-label={t("hero.ariaLabel")} className="py-16 bg-slate-50 dark:bg-slate-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid: image left / text right on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left: portrait */}
          <div className="flex justify-center md:justify-start order-1">
            <img
              src={imageSrc}
              alt={t("hero.imageAlt")}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg ring-1 ring-slate-200 dark:ring-slate-700"
            />
          </div>

          {/* Right: text */}
          <div className="text-center md:text-left order-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
              {t("pages.home.hero.title")} <strong className="text-teal-500"> Giorgio Valle</strong>
            </h1>

            <p className="mt-3 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
              {t("pages.home.hero.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}