import React, { useState, useEffect } from 'react';
import { getMatchInfo } from '../services/cricapi';

const Playing11 = ({ matchId }) => {
    const [teams, setTeams] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const data = await getMatchInfo(matchId);
                setTeams(data.data?.teams || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching playing 11:', error);
                setLoading(false);
            }
        };
        fetchPlayers();
    }, [matchId]);

    if (loading) return <div className="text-center p-4">Loading Playing 11...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams && teams.map((team, idx) => (
                <div key={idx} className="bg-gray-800 p-6 rounded-lg text-white">
                    <h3 className="text-2xl font-bold mb-4">{team}</h3>
                    <div className="space-y-2">
                        <p className="text-gray-400">Players data from API integration</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Playing11;