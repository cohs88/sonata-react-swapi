

export function updateState(category) {
    return async function(dispatch){
        const response = await fetch(`https://swapi.co/api/${category}`);
        const result = await response.json();

        dispatch({
            type: 'CATEGORY_SELECTED',
            payload: result.results
        });
    }
    // return {
    //     type: 'CATEGORY_SELECTED',
    //     payload: category
    // };
};
