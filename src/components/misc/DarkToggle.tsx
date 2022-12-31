import { useEffect, useState } from 'react';

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2/index';

/**
 * Componente para cambiar el modo de tema de la página (claro/oscuro)
 * @returns Componente para cambiar el tema de la página
 */
const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') ?? 'dark');
  const handleClick = () => {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  return (
    <span
      className="text-base font-medium text-gray-500 hover:cursor-pointer hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 md:mx-3"
      id="btn-toggle-dark"
      onClick={handleClick}
    >
      <div className="flex w-10 flex-col items-center gap-y-1 text-center">
        {darkMode === 'dark' ? (
          <HiOutlineSun className="h-6 w-6" aria-hidden="true" />
        ) : (
          <HiOutlineMoon className="h-6 w-6" aria-hidden="true" />
        )}
        <Tooltip anchorId="btn-toggle-dark" place="bottom">
          <span className="text-sm font-light">{darkMode === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
        </Tooltip>
      </div>
    </span>
  );
};

export default DarkToggle;
