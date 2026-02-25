import React, { useEffect, useState } from 'react';
const ThunderEffect = ({ event, position = 'bottom-right' }) => {
    const [showEffect, setShowEffect] = useState(false);
    useEffect(() => {
        if (event) {
            setShowEffect(true);
            const timer = setTimeout(() => setShowEffect(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [event]);

    if (!showEffect) return null;

    return (
        <div className={`fixed ${position} z-50 pointer-events-none`}>
            <svg width="120" height="120" viewBox="0 0 120 120" className="animate-pulse">
                <polygon points="60,10 90,60 60,60 100,110 50,70 50,70" fill="#FFD700" filter="drop-shadow(0 0 10px #FFD700)" />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-4xl font-bold text-yellow-300 animate-bounce drop-shadow-lg">{event}</p>
            </div>
            <div className="absolute inset-0 bg-yellow-200 opacity-30 animate-pulse"></div>
        </div>
    );
};
export default ThunderEffect;