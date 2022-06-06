export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_PLAYERS': return action.payload;
        default: return state; 
    }
 };