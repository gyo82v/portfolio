import { NavLink } from 'react-router';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../theme/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-transparent">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-sm font-medium text-slate-700 dark:text-slate-200">Home</NavLink>
          <NavLink to="resume" className="text-sm font-medium text-slate-700 dark:text-slate-200">Resume</NavLink>
          <NavLink to="projects" className="text-sm font-medium text-slate-700 dark:text-slate-200">Projects</NavLink>
        </div>

        {/* Right side controls: theme toggle (and later language) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {theme === 'dark' ? (
              <FiSun className="w-5 h-5 text-teal-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-teal-600" />
            )}
          </button>

          {/* placeholder for language toggle later */}
        </div>
      </nav>
    </header>
  );
}