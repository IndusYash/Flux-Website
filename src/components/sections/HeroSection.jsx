import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const welcomeText = "Welcome to ";
    const fluxText = "Flux";
    const fullText = welcomeText + fluxText;
    const typingSpeed = 120;
    const deletingSpeed = 80;
    const pauseDuration = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const currentText = isDeleting
                ? fullText.substring(0, typedText.length - 1)
                : fullText.substring(0, typedText.length + 1);
            setTypedText(currentText);

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
            }
        };
        const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [typedText, isDeleting]);

    const displayWelcome = typedText.substring(0, welcomeText.length);
    const displayFlux = typedText.substring(welcomeText.length);

    return (
        <section className="h-screen sticky top-0 inset-x-0 z-10 flex items-center justify-center hero-bg">
            <div className="text-center px-4">
                <h1 className="text-6xl md:text-8xl font-extrabold mb-4 h-24 md:h-32 text-gray-900 dark:text-gray-100">
                    <span>{displayWelcome}</span>
                    <span className="text-blue-600 dark:text-blue-400">{displayFlux}</span>
                    <span className="inline-block w-1 h-16 md:h-24 bg-gray-900 dark:bg-gray-100 ml-2 animate-pulse" aria-hidden="true"></span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                    Discover the people and principles that drive our innovation.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
