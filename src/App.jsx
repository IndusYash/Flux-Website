import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page and the theme toggle button
import AboutPage from './pages/AboutPage';
import ThemeToggleButton from './components/ThemeToggleButton';

export default function App() {
    // 1. Theme state is now managed here in the main App component
    const [theme, setTheme] = useState(() => {
        // Get the theme from localStorage or default to 'dark'
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    // 2. This effect applies the 'dark' class to the root <html> element
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 3. The function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <BrowserRouter>
            {/* The toggle button is here so it's visible on all pages */}
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            <Routes>
                {/* The theme state is passed down to pages if they need it,
                    but the styling works automatically via the 'dark' class on the html tag */}
                <Route path="/" element={<AboutPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}
