export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_TEAM_STANDINGS_WEST': return action.payload;
        default: return state; 
    }
 };