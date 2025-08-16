import React from 'react';
import { SunIcon, MoonIcon } from '../icons';

const ThemeToggleButton = ({ theme, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        className="fixed top-20 right-0 z-50 bg-white/80 dark:bg-black/80 text-gray-800 dark:text-gray-100 p-3 rounded-l-lg shadow-lg backdrop-blur-sm transition-colors"
        aria-label="Toggle theme"
    >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
);

export default ThemeToggleButton;
