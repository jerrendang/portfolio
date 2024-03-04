const UPDATE = 'pageScroll/UPDATE'

export const updateCoords = (x, y) => {
    return {
        type: UPDATE,
        scrollCoords: {
            x,
            y
        }
    }
}

const initialState = {
    x: 0,
    y: 0
}

export const scrollReducer = (state = {...initialState}, action) => {
    switch (action.type){
        case UPDATE:
            return action.scrollCoords
        default:
            return {...initialState}
    }
}