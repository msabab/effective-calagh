export const initialState = {
    tasks: [],
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "create_task": {
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: Math.floor(Math.random() * 100),
                    title: action.value.title,
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
                tasks: state.tasks.filter((task, index) => index !== action.value),
            };
        }
        default:
            return state;
    }
};