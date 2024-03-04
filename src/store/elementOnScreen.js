const UPDATE = 'onScreen/UPDATE'

export const elementOnScreen = (el) => {
    return {
        type: UPDATE,
        el
    }
}

const initialState = {
    element: 'home'
}

export const elementOnScreenReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case UPDATE:
            let newState = {...state}
            newState.element = action.el;
            return newState;
        default:
            return state
    }
}