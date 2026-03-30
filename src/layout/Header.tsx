import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { useTheme } from "../theme/useTheme";
import { useLanguage } from "../i18n/useLanguage";
import { focusEffects, transitions } from "../styles/patterns";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const [menuMounted, setMenuMounted] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  //const navBase = `text-slate-700 dark:text-slate-200 hover:underline ${focusEffects} ${transitions}`;
  const navBase = `
  relative text-slate-700 dark:text-slate-200
  transition-colors duration-300 ease-in-out
  hover:text-[var(--accent)]
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
  after:bg-[var(--accent)] after:origin-left after:scale-x-0
  after:transition-transform after:duration-300 after:ease-in-out
  hover:after:scale-x-100
  motion-reduce:transition-none motion-reduce:after:transition-none
  ${focusEffects}
`;
  const toggleLang = () => setLang(lang === "en" ? "it" : "en");

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "resume", label: t("nav.resume") },
    { to: "projects", label: t("nav.projects") },
  ];

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    setMenuMounted(true);
    requestAnimationFrame(() => setMenuVisible(true));
  };

  const closeMenu = () => {
    setMenuVisible(false);
    closeTimeoutRef.current = window.setTimeout(() => {
      setMenuMounted(false);
    }, 250);
  };

  useEffect(() => {
    if (!menuMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuMounted]);

  return (
    <header className="relative">
      <nav className="w-full p-4 lg:px-10 lg:py-6 flex items-center justify-between">
        {/* Desktop links */}
        <div className="hidden lg:flex gap-12">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                   `${navBase} ${isActive ? "text-[var(--accent)] after:scale-x-100 font-medium" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={openMenu}
          aria-label="Open navigation menu"
          className={`lg:hidden p-2 rounded-md border border-slate-200 
                    dark:border-slate-700 hover:scale-105 
                      ${focusEffects} ${transitions}`}
        >
          <FiMenu className="w-5 h-5" />
        </button>

        {/* Controls */}
        <div className="flex items-center gap-3 lg:gap-10 lg:mr-10">
          <button
            onClick={toggleLang}
            className={`flex items-center gap-2 px-2 py-1 rounded-md border
                        transition-colors duration-200 hover:bg-slate-900/5 dark:hover:bg-white/10 
                        ${focusEffects}`}
          >
            <FaGlobe className="w-4 h-4" />
            <span className="text-sm font-medium">{lang === "en" ? "EN" : "IT"}</span>
          </button>

          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-md transition-colors duration-200
                        hover:bg-slate-900/5 dark:hover:bg-white/10  
                        ${focusEffects}`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>

      <MobileMenu
        mounted={menuMounted}
        visible={menuVisible}
        links={links}
        onClose={closeMenu}
      />
    </header>
  );
}

