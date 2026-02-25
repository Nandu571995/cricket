import axios from 'axios';
const CRICAPI_BASE_URL = 'https://api.cricapi.com/v1';
const API_KEY = process.env.REACT_APP_CRICAPI_KEY;

export const getMatchInfo = async (matchId) => {
    try {
        const response = await axios.get(`${CRICAPI_BASE_URL}/match_info`, {
            params: {
                apikey: API_KEY,
                id: matchId,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching match info:', error);
        throw error;
    }
};

export const getLiveMatchData = async (matchId) => {
    try {
        const response = await axios.get(`${CRICAPI_BASE_URL}/currentMatches`, {
            params: {
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching live match data:', error);
        throw error;
    }
};

export const getCountryFlagUrl = (countryName) => {
    const countryCode = countryName.substring(0, 2).toUpperCase();
    return `https://flagcdn.com/h120/${countryCode.toLowerCase()}.png`;
};

export default { getMatchInfo, getLiveMatchData, getCountryFlagUrl };