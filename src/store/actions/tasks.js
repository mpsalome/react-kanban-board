export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'


export const addTask = (payload) => ({
    type: ADD_TASK,
    payload
})

export const removeTask = (payload) => ({
    type: REMOVE_TASK,
    payload
})