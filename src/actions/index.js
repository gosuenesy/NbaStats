import dataNbaApi from '../apis/dataNbaApi';

export const fetchTeamStandingsEast = () => async dispatch => {
    const response = await dataNbaApi.get('/data/10s/prod/v1/current/standings_conference.json');
    dispatch({type: 'FETCH_TEAM_STANDINGS_EAST', payload: response.data.league.standard.conference.east})
};

export const fetchTeamStandingsWest = () => async dispatch => {
    const response = await dataNbaApi.get('/data/10s/prod/v1/current/standings_conference.json');
    dispatch({type: 'FETCH_TEAM_STANDINGS_WEST', payload: response.data.league.standard.conference.west})
};

export const fetchTeamStatsRankings = () => async dispatch => {
    const response = await dataNbaApi.get('/data/10s/prod/v1/2021/team_stats_rankings.json');
    dispatch({type: 'FETCH_TEAM_STATS_RANKINGS', payload: response.data.league.standard.regularSeason.teams})
};

export const fetchPlayers = () => async dispatch => {
    const response = await dataNbaApi.get('/data/10s/prod/v1/2021/players.json');
    dispatch({type: 'FETCH_PLAYERS', payload: response.data.league.standard})
};

export const fetchPlayerStats = (playerId) => async dispatch => {
    const response = await dataNbaApi.get(`/data/10s/prod/v1/2021/players/${playerId}_profile.json`);
    dispatch({type: 'FETCH_PLAYER_STATS', payload: response.data.league.standard})
};