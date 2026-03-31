import { useLanguage } from "../i18n/useLanguage";
export default function Hero() {
  const { t } = useLanguage();

  return (
<section
  id="home"
  aria-label={t("hero.ariaLabel")}
  className="relative bg-slate-50 dark:bg-slate-800 transition-colors duration-200"
>
  <div className="px-6 pt-16 pb-8 md:py-16 ">
    <div
      className={`mx-auto flex flex-col items-center md:gap-4
                  md:grid md:w-min md:gap-x-4`}
      style={{
        gridTemplateAreas: `"img title" "img subtitle"`,
        gridTemplateColumns: "min-content max-content",
      }}
    >
      {/* Title */}
      <h1
        className={` text-center md:text-left text-4xl
                     sm:text-5xl  leading-tight
                   text-slate-900 dark:text-slate-100`}
        style={{ gridArea: "title" }}
      >
        <span className="block text-3xl md:text-5xl font-light text-slate-600 dark:text-slate-400 ">
          {t("pages.home.hero.title")}
        </span>
        <span className="block text-slate-700 dark:text-slate-200 font-semibold ">
          Giorgio Valle
        </span>
      </h1>
      <div
  aria-hidden="true"
  className="md:hidden flex items-center justify-center gap-2 my-3"
>
  <span className="h-px w-6 bg-slate-300 dark:bg-slate-600" />
  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
  <span className="h-px w-6 bg-slate-300 dark:bg-slate-600" />
</div>

      {/* Subtitle / description */}
      <p
        className={`inline-block text-center md:text-right text-sm md:text-lg sm:text-xl md:bg-teal-500
                  md:text-teal-950 px-6 pt-1 pb-8 md:py-4 md:shadow-lg z-0          
                    md:col-start-1 md:col-end-3 md:row-start-2 md:self-start md:relative
                    md:-left-80 md:w-[calc(100%+20rem)]`}
        style={{ gridArea: "subtitle" }}
      >
        Front-end Developer
      </p>

      {/* Image */}
      <img
        src="src/images/profile.webp"
        alt={t("hero.imageAlt")}
        className={`w-56 h-56 md:min-w-[260px] md:h-[260px] object-cover
                    shadow-2xl relative z-10 mr-1`}
        style={{ gridArea: "img" }}
      />
    </div>
  </div>
</section>
  );
}

