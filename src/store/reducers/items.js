   
import { ADD_TASK, REMOVE_TASK } from '../actions/tasks'

const initialState = {
    tasks: [{
        name: 'Task 1',
        type: 'todo'
    },
    {
        name: 'Task 2',
        type: 'todo'
    },
    {
        name: 'Task 3',
        type: 'todo'
    },
    {
        name: 'Task 4',
        type: 'todo'
    },
    {
        name: 'Task 5',
        type: 'todo'
    }
    ,
    {
        name: 'Task 13',
        type: 'inprogress'
    },
    {
        name: 'Task 8',
        type: 'done'
    }]
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