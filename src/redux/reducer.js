// const instialState = {
//     title: 'old title',
//     aboutTitle: 'about title',
//     contactTitle: ' '
// }
//
// export default function reducer(state = instialState, action) {
//     if(action.type === 'CHANGE_TITLE'){
//         return{title: 'new title'}
//     } else if (action.type === 'CHANGE_ABOUT_TITLE') {
//         return {...state, aboutTitle: 'new about title'}
//     } else  if (action.type === "WITH_PARAMS") {
//         return {...state, contactTitle: action.payload}
//     } else if(action.type === "FROM_INPUT") {
//         return {...state, contactTitle: action.payload}
//     }
//
//     return state
// }

const initialState = {
    count: ''
}

export default function reducer(state = initialState, action) {
    if (action.type === 'ONE') {
        return{count: 1}
    } else if (action.type === 'TEN') {
        return{count: 10}
    }

    return state
}
