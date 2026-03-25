import { NavLink } from "react-router";
import { FiX } from "react-icons/fi";
import { focusEffects } from "../styles/patterns";

type LinkItem = {
  to: string;
  label: string;
};

type MobileMenuProps = {
  mounted: boolean;
  visible: boolean;
  links: LinkItem[];
  onClose: () => void;
};

export default function MobileMenu({
  mounted,
  visible,
  links,
  onClose,
}: MobileMenuProps) {
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        id="mobile-navigation"
        className={`absolute inset-0 min-h-dvh bg-white/95 dark:bg-slate-950/95 text-slate-900 dark:text-slate-100 transition-all duration-300 ease-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Menu
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className={`p-2 rounded-md hover:scale-105 active:scale-95 ${focusEffects}`}
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 pt-8 pb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-4">
            Navigate
          </p>

          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `w-full rounded-2xl px-4 py-4 text-xl font-semibold transition-all ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-lg border-l-4 border-[var(--accent)]"
                      : "border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900/60"
                  } ${focusEffects}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}