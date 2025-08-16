import React, { useState, useEffect, useCallback } from 'react';

// --- Component Imports ---
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import HeroSection from '../components/sections/HeroSection';
import LeadershipSection from '../components/sections/LeadershipSection';
import WhatIsFluxSection from '../components/sections/WhatIsFluxSection';
import OurStorySection from '../components/sections/OurStorySection';
import CorePrinciplesSection from '../components/sections/CorePrinciplesSection';

// This is now your dedicated "About Us" page component.
// It no longer manages the theme state.
export default function AboutPage() {
    const [modalContent, setModalContent] = useState(null);

    const handleImageClick = useCallback((src, alt) => {
        setModalContent(<img className="modal-content max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl" src={src} alt={alt} />);
    }, []);

    const handleCardClick = useCallback((cardData) => {
        const content = (
            <div className="modal-card-content bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-xl max-w-xl w-[90vw] shadow-2xl">
                <div className="flex items-center justify-center mb-4">
                    {React.cloneElement(cardData.icon, { className: 'h-10 w-10 text-blue-500 dark:text-blue-400' })}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 ml-4">{cardData.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{cardData.content}</p>
            </div>
        );
        setModalContent(content);
    }, []);

    const closeModal = useCallback(() => {
        setModalContent(null);
    }, []);

    // This useEffect injects global styles. It's separate from the theme logic.
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Roboto:wght@400;500&display=swap');
            
            body {
                font-family: 'Roboto', sans-serif;
                background-color: #f9fafb; /* light: gray-50 */
                transition: background-color 0.3s ease;
            }
            .dark body {
                background-color: #000000;
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: 'Poppins', sans-serif;
            }
            
            .hero-bg {
                background-image: linear-gradient(rgba(249, 250, 251, 0.6), rgba(249, 250, 251, 0.6)), url('https://placehold.co/1920x1080/e5e7eb/e5e7eb');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                transition: background-image 0.3s ease;
            }
            .dark .hero-bg {
                background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://placehold.co/1920x1080/111827/111827');
            }

            .card {
                transition: transform 0.3s ease-in-out, box-shadow 0.4s ease-in-out, border-color 0.3s ease, background-color 0.3s ease;
                border: 1px solid #e5e7eb; /* light: gray-200 */
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
            }
            .dark .card {
                border: 1px solid #374151; /* dark: gray-700 */
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
            }
            .card:hover {
                transform: translateY(-8px) scale(1.02);
                border-color: rgba(59, 130, 246, 0.5);
                box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1);
            }
            .dark .card:hover {
                box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 10px -6px rgba(59, 130, 246, 0.2);
            }
            .leadership-card .card-image {
                transition: transform 0.3s ease;
                cursor: pointer;
            }
            .leadership-card:hover .card-image {
                transform: scale(1.05);
            }
            .animate-zoom { animation: zoom 0.4s; }
            @keyframes zoom { from {transform: scale(0.9); opacity: 0;} to {transform: scale(1); opacity: 1;} }
            .animate-pulse { animation: pulse 1.5s infinite; }
            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <>
            <Header />
            <main>
                <HeroSection />
                
                <div className="relative z-20 bg-gray-50 dark:bg-black">
                    <LeadershipSection onImageClick={handleImageClick} />
                    <div className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
                       <WhatIsFluxSection />
                       <OurStorySection onCardClick={handleCardClick} />
                    </div>
                    <div className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
                       <CorePrinciplesSection onCardClick={handleCardClick} />
                    </div>
                    <Footer />
                </div>
            </main>
            <Modal content={modalContent} onClose={closeModal} />
        </>
    );
}
