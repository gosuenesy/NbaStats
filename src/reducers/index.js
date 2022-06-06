import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import playerStatsReducer from './playerStatsReducer';
import teamsEastReducer from './teamsEastReducer';
import teamsWestReducer from './teamsWestReducer';
import teamStatsRankingsReducer from './teamStatsRankingsReducer';

export default combineReducers ({
    teamsEast: teamsEastReducer,
    teamsWest: teamsWestReducer,
    players: playersReducer,
    playerStats: playerStatsReducer,
    teamStats: teamStatsRankingsReducer
});