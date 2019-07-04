// import {combineReducers} from 'redux';
// import data from '../dummy_data/people';

export function categoryResults(state = [], action) {
    switch(action.type) {
        case 'CATEGORY_SELECTED':
            return action.payload;
        default:
            return state;
    }
}

// const categoriesReducer = () => {
//     console.log('categoriesReducer');
//     return [
//         {
//             title: 'planets'
//         },
//         {
//             title: 'spaceships'
//         },
//         {
//             title: 'vehicles'
//         }
//         ,
//         {
//             title: 'people'
//         },
//         {
//             title: 'films'
//         },
//         {
//             title: 'species'
//         }
//     ];
// };

// const selectedCategoryReducer = (selectedCategory = null, action) =>{
//     if(action.type === 'CATEGORY_SELECTED'){
//         return arr[action.payload.title];
//     }

//     return selectedCategory;
// };


// const categoryDetailsReducer = () => {
//     console.log('categoryDetailsReducer');
//     return [];
// };



// export default combineReducers({
//     categories: categoriesReducer,
//     selectedCategory: selectedCategoryReducer,
//     categoryDetails: categoryDetailsReducer
// });