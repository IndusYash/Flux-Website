import React, { useEffect } from 'react';

const Modal = ({ content, onClose }) => {
    if (!content) return null;

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 animate-zoom"
            onClick={onClose}
        >
            <span 
                className="absolute top-4 right-8 text-white text-5xl font-bold cursor-pointer transition-colors hover:text-gray-300"
                onClick={onClose}
            >&times;</span>
            <div onClick={(e) => e.stopPropagation()}>{content}</div>
        </div>
    );
};

export default Modal;
