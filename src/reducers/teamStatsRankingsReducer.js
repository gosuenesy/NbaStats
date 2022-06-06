export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_TEAM_STATS_RANKINGS': return action.payload;
        default: return state; 
    }
 };