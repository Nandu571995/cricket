import React, { useState } from 'react';
const MatchTabs = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('scoreboard');
    const tabs = [
        { id: 'scoreboard', label: 'Scoreboard', icon: '📊' },
        { id: 'playing11', label: 'Playing 11', icon: '👥' },
        { id: 'commentary', label: 'Commentary', icon: '💬' },
        { id: 'stats', label: 'Statistics', icon: '📈' },
        { id: 'highlights', label: 'Highlights', icon: '⭐' },
    ];
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        onTabChange(tabId);
    };
    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                    <button key={tab.id} onClick={() => handleTabClick(tab.id)} className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}> 
                        {tab.icon} {tab.label} 
                    </button>
                ))}
            </div>
        </div>
    );
};
export default MatchTabs;