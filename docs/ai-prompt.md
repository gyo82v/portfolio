here is the component as it was at the start :

import { NavLink } from 'react-router';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../theme/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const style = "text-sm font-medium text-slate-700 dark:text-slate-200"

  return (
    <header className="bg-transparent">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6 ">
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? `${style} underline` : `${style}`}
          >Home
          </NavLink>
          <NavLink 
            to="resume" 
            className={({isActive}) => isActive ? `${style} underline` : `${style}`}
          >Resume
          </NavLink>
          <NavLink 
            to="projects" 
            className={({isActive}) => isActive ? `${style} underline` : `${style}`}
          >Projects
          </NavLink>
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

and i still have the initial problem that the text color is stuck on text-slate-200

- adding ! on either of the text-slate-700 dark:text-slate-200 will not work.
  in this case the text color will be text-slate-700 always.
- adding color to the outer div did not work.


what is the difference between :

mine : className={({isActive}) => isActive ? `${style} underline` : `${style}`}
your : className={({isActive}) => 
      `text-slate-700 dark:text-slate-200 ${isActive ? "underline" : ""}`
    }

what does change between isActive : "": "" and  `${isActive ? "" : ""}`








