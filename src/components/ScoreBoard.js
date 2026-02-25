import React, { useState, useEffect } from 'react';
import { getMatchInfo, getCountryFlagUrl } from '../services/cricapi';

const ScoreBoard = ({ matchId }) => {
    const [matchData, setMatchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatchData = async () => {
            try {
                setLoading(true);
                const data = await getMatchInfo(matchId);
                setMatchData(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch match data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMatchData();
        const interval = setInterval(fetchMatchData, 10000);
        return () => clearInterval(interval);
    }, [matchId]);

    if (loading) return <div className="text-center p-4">Loading match data...</div>;
    if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
    if (!matchData) return <div className="text-center p-4">No match data available</div>;

    const match = matchData.data || matchData;
    return (
        <div className="bg-gradient-to-r from-blue-900 to-red-900 p-6 rounded-lg shadow-lg text-white">
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                    <h3 className="text-lg font-bold mb-2">{match.teams?.[0] || 'Team 1'}</h3>
                    <img src={getCountryFlagUrl(match.teams?.[0] || '')} alt="Flag" className="h-16 w-24 mx-auto mb-2 rounded" />
                    <p className="text-2xl font-bold">{match.score?.[0]?.inning1_score || '0'}</p>
                </div>
                <div className="text-center flex flex-col justify-center">
                    <p className="text-xl font-bold mb-2">{match.status || 'Match Status'}</p>
                    <p className="text-sm">{match.status_str || ''}</p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-bold mb-2">{match.teams?.[1] || 'Team 2'}</h3>
                    <img src={getCountryFlagUrl(match.teams?.[1] || '')} alt="Flag" className="h-16 w-24 mx-auto mb-2 rounded" />
                    <p className="text-2xl font-bold">{match.score?.[1]?.inning1_score || '0'}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <p className="font-semibold">Venue: {match.venue || 'N/A'}</p>
                    <p className="font-semibold">Format: {match.format || 'N/A'}</p>
                </div>
                <div>
                    <p className="font-semibold">Winner: {match.winner || 'TBD'}</p>
                    <p className="font-semibold">Toss: {match.toss_winner || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoard;