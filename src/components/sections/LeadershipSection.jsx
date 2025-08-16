import React from 'react';

const LeadershipSection = ({ onImageClick }) => (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="leadership-card max-w-4xl mx-auto mb-16">
                <div className="card bg-white dark:bg-gray-900 rounded-xl overflow-hidden md:flex">
                    <div className="md:w-1/3 overflow-hidden">
                        <img 
                            className="card-image h-full w-full object-cover" 
                            src="https://placehold.co/400x400/3b82f6/ffffff?text=Patron" 
                            alt="Portrait of the Patron" 
                            onClick={() => onImageClick("https://placehold.co/400x400/3b82f6/ffffff?text=Patron", "Portrait of the Patron")}
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/4b5563/ffffff?text=Image'; }}
                        />
                    </div>
                    <div className="p-8 md:p-12 md:w-2/3">
                        <h3 className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider">Patron</h3>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-4">Dr. Evelyn Reed</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Dr. Reed has been a guiding force for educational excellence and innovation for over two decades. Her leadership as Patron provides the strategic direction and inspiration that fuels our mission.
                        </p>
                    </div>
                </div>
            </div>
            <div className="leadership-card max-w-4xl mx-auto">
                <div className="card bg-white dark:bg-gray-900 rounded-xl overflow-hidden md:flex md:flex-row-reverse">
                     <div className="md:w-1/3 overflow-hidden">
                        <img 
                            className="card-image h-full w-full object-cover" 
                            src="https://placehold.co/400x400/64748b/ffffff?text=VC" 
                            alt="Portrait of the Vice Chancellor"
                            onClick={() => onImageClick("https://placehold.co/400x400/64748b/ffffff?text=VC", "Portrait of the Vice Chancellor")}
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/4b5563/ffffff?text=Image'; }}
                        />
                    </div>
                    <div className="p-8 md:p-12 md:w-2/3">
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vice Chancellor</h3>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-4">Prof. Marcus Thorne</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            As Vice Chancellor, Professor Thorne oversees the academic and operational integrity of our institution. His commitment to fostering a collaborative and forward-thinking environment is key to our success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default LeadershipSection;
