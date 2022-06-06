export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_PLAYER_STATS': return action.payload;
        default: return state; 
    }
 };