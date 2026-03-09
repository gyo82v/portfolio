import { NavLink } from 'react-router';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../theme/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  // Base classes for NavLink
  const linkBase = "text-slate-700 dark:text-slate-200 font-medium text-sm";

  return (
    <header className="bg-transparent">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Navigation Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "underline" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="resume"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "underline" : ""}`
            }
          >
            Resume
          </NavLink>

          <NavLink
            to="projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "underline" : ""}`
            }
          >
            Projects
          </NavLink>
        </div>

        {/* Right: Theme toggle */}
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
        </div>
      </nav>
    </header>
  );
}


/*
import { NavLink } from 'react-router';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../theme/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="bg-transparent">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6 text-slate-700 dark:text-slate-200 bg-red-400 dark:bg-green-500 border-2 border-purple-500 dark:border-amber-500 ">
          <NavLink 
            to="/" 
            className={({isActive}) => ` ${isActive ? "underline" : ""}`}
          >Home
          </NavLink>
          <NavLink 
            to="resume" 
            className={({isActive}) => `${isActive ? "underline" : ""}`}
          >Resume
          </NavLink>
          <NavLink 
            to="projects" 
            className={({isActive}) => ` ${isActive ? "underline" : ""}`}
          >Projects
          </NavLink>
        </div>

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

        </div>
      </nav>
    </header>
  );
}
  */