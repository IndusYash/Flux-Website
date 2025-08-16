import React from 'react';
import { AcademicCapIcon, InnovationIcon, GlobalIcon } from '../../icons';

const storyCards = [
    { icon: <AcademicCapIcon className="text-blue-500 dark:text-blue-400" />, title: 'Academic Excellence', content: 'World-class faculty, innovative curricula, and state-of-the-art facilities create an environment where learning thrives and intellectual curiosity is nurtured.' },
    { icon: <InnovationIcon className="text-blue-500 dark:text-blue-400" />, title: 'Research & Innovation', content: 'Our research initiatives tackle real-world problems, from climate change to artificial intelligence, contributing meaningful solutions to global challenges.' },
    { icon: <GlobalIcon className="text-blue-500 dark:text-blue-400" />, title: 'Global Impact', content: 'Through partnerships, outreach programs, and alumni networks, Flux extends its influence beyond campus to create positive change worldwide.' }
];

const OurStorySection = ({ onCardClick }) => (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Story</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            Founded with the vision of reimagining higher education, Flux has grown from a bold idea into a leading institution that bridges traditional academia with cutting-edge innovation.
                        </p>
                        <p>
                            Our interdisciplinary approach combines rigorous academic excellence with practical application, ensuring our graduates are equipped with both deep knowledge and the skills to apply it in real-world contexts.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg w-full h-80 flex items-center justify-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1-1m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {storyCards.map((card, index) => (
                    <div 
                        key={index}
                        className="card grid-card bg-white dark:bg-gray-900 p-8 rounded-xl cursor-pointer text-center"
                        onClick={() => onCardClick(card)}
                    >
                        <div className="flex justify-center mb-4">{card.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{card.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default OurStorySection;
