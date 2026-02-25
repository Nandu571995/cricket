import React from 'react';
import { getCountryFlagUrl } from '../services/cricapi';

const PlayerCard = ({ playerName, playerRole, stats, countryCode }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 text-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
                <div>
                    <p className="text-xl font-bold">{playerName}</p>
                    <p className="text-sm text-gray-400">{playerRole}</p>
                </div>
                <img src={getCountryFlagUrl(countryCode)} alt="Country Flag" className="h-12 w-12 rounded-full" />
            </div>
            <div className="bg-gray-700 p-3 rounded">
                {Object.entries(stats || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                        <span className="capitalize">{key}:</span>
                        <span className="font-semibold">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerCard;