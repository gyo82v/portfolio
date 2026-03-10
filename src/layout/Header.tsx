// src/layout/Header.tsx
import { NavLink } from "react-router";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../theme/useTheme";
import clsx from "clsx";
import { useLanguage } from "../i18n/useLanguage";
import { FaGlobe } from "react-icons/fa";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  // static color classes for Tailwind to detect
  const navBase = "text-slate-700 dark:text-slate-200";

  const toggleLang = () => {
    setLang(lang === "en" ? "it" : "en");
  };

  return (
    <header className="bg-transparent">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Nav links */}
        <div className="flex items-center gap-6">
          {[
            { to: "/", labelKey: "nav.home" },
            { to: "resume", labelKey: "nav.resume" },
            { to: "projects", labelKey: "nav.projects" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  navBase, 
                  isActive && "underline" 
                )
              }
            >
              {t(link.labelKey)}
            </NavLink>
          ))}
        </div>

        {/* Right side: theme + language toggle */}
        <div className="flex items-center gap-3">
          {/* Language toggle: small segmented button EN | IT */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              aria-label={t("lang.ariaToggle")}
              title={lang === "en" ? "Switch to Italiano" : "Passa a English"}
              className="flex items-center gap-2 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <FaGlobe className="w-4 h-4" />
              <span className="sr-only">{t("lang.ariaToggle")}</span>
              <span className="text-sm font-medium">{lang === "en" ? "EN" : "IT"}</span>
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t("theme.switchToLight") : t("theme.switchToDark")}
            title={theme === "dark" ? t("theme.lightMode") : t("theme.darkMode")}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {theme === "dark" ? <FiSun className="w-5 h-5 text-teal-400" /> : <FiMoon className="w-5 h-5 text-teal-600" />}
          </button>
        </div>
      </nav>
    </header>
  );
}


/*
import { NavLink } from "react-router";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../theme/useTheme";
import clsx from "clsx";

export default function Header() {
  const { theme, toggleTheme } = useTheme();


  const navBase = "text-slate-700 dark:text-slate-200";

  return (
    <header className="bg-transparent">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
  
        <div className="flex items-center gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "resume", label: "Resume" },
            { to: "projects", label: "Projects" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  navBase,             
                  isActive && "underline" 
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5 text-teal-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-teal-600" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
*/