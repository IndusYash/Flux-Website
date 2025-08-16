import React from 'react';

const Header = () => (
    <header className="bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-lg sticky top-0 z-30 h-16">
        <div className="container mx-auto px-6 h-full flex items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Flux</h1>
        </div>
    </header>
);

export default Header;
