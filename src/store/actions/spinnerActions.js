export const spinnerToTrue = value => {
    return {
        type: 'CHANGE_TRUE',
        payload: value
    }
}

export const spinnerToFalse = value => {
    return {
        type: 'CHANGE_FALSE',
        payload: value
    }
}