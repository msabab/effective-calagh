import { v4 as uuidv4 } from 'uuid';
export const initialState = {
    tasks: [],
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "initial_from_localstorage":
            return action.value;
        case "create_task": {
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: uuidv4(),
                    title: action.value.title,
                    description: action.value.description,
                    project: action.value.project,
                    startedAt: new Date(),
                    isFinished: false,
                    finishedAt: null,
                }]
            }
        }
        case "start_task": {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.value) {
                        task.startedAt = new Date();
                    }
                    return task;
                })
            }
        }
        case "finish_task": {
            return {
                ...state,
                tasks: state.tasks.map((task, index) => {
                    if (task.id === action.value) {
                        return {
                            ...task,
                            isFinished: true,
                            finishedAt: new Date(),
                        };
                    }
                    return task;
                })
            }
        }
        case "delete_task": {
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => task.id !== action.value),
            };
        }
        default:
            return state;
    }
};