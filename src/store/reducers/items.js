   
import { ADD_TASK, REMOVE_TASK } from '../actions/tasks'

const initialState = {
    tasks: []
}

export const items = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            }
        case  REMOVE_TASK: 
            return {
                ...state,
                tasks: state.tasks.filter(item => item.text !== action.payload.id)
            }
        default:
            return state
    }
} 