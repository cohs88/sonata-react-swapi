export function categoryResults(state = [], action) {
    switch(action.type) {
        case 'CATEGORY_SELECTED':
            return action.payload;
        case 'CATEGORY_SEARCH':
            return state.filter(s => s.name === action.term);
        default:
            return state;
    }
}

export function childResults(state = [], action) {
    switch(action.type) {
        case 'CHILD_SELECTED':
            return action.payload;
        default:
            return state;
    }
}
