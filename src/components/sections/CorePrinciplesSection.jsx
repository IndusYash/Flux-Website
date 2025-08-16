import React from 'react';
import { MissionIcon, VisionIcon, CommunityIcon, ValuesIcon } from '../../icons';

const principlesCards = [
    { icon: <MissionIcon className="text-blue-500 dark:text-blue-400" />, title: 'Our Mission', content: 'To empower creators and innovators by providing accessible, cutting-edge tools and fostering a culture of collaboration and discovery. We strive to break down barriers and build a future where technology serves humanity.' },
    { icon: <VisionIcon className="text-blue-500 dark:text-blue-400" />, title: 'Our Vision', content: 'To be the leading global platform for creative and technological advancement, recognized for our commitment to open-source principles, ethical innovation, and the vibrant community we cultivate.' },
    { icon: <CommunityIcon className="text-blue-500 dark:text-blue-400" />, title: 'Our Community', content: 'A diverse, inclusive, and supportive network of thinkers, builders, and dreamers. We believe that the best ideas emerge from a rich tapestry of perspectives and shared passion.' },
    { icon: <ValuesIcon className="text-blue-500 dark:text-blue-400" />, title: 'Our Values', content: 'Integrity, curiosity, collaboration, and courage. These principles are the bedrock of our work, guiding how we build our products, interact with our partners, and support our users.' }
];

const CorePrinciplesSection = ({ onCardClick }) => (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                 <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Our Core Principles</h2>
                 <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">The foundational beliefs that guide our actions and define our community.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {principlesCards.map((card, index) => (
                    <div 
                        key={index}
                        className="card grid-card bg-white dark:bg-gray-900 p-8 rounded-xl cursor-pointer"
                        onClick={() => onCardClick(card)}
                    >
                        <div className="flex items-center mb-4">
                           {card.icon}
                           <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 ml-4">{card.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default CorePrinciplesSection;
