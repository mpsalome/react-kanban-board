import { ADD_TASK, REMOVE_TASK } from '../actions/tasks';

const initialState = {
  tasks: [
    {
      id: '0',
      name: 'Task 1',
      type: 'todo',
    },
    {
      id: '1',
      name: 'Task 2',
      type: 'todo',
    },
    {
      id: '2',
      name: 'Task 3',
      type: 'todo',
    },
    {
      id: '3',
      name: 'Task 4',
      type: 'todo',
    },
    {
      id: '4',
      name: 'Task 5',
      type: 'todo',
    },
    {
      id: '5',
      name: 'Task 13',
      type: 'inprogress',
    },
    {
      id: '6',
      name: 'Task 8',
      type: 'done',
    },
  ],
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};
