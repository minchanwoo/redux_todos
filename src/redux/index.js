const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const FILTER_TODO = 'FILTER_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
    }
}

export function completeTodo(id) {
    return {
        type: COMPLETE_TODO,
        id,
    }
}

export function filterTodo(filter) {
    return {
        type: FILTER_TODO,
        filter,
    }
}


const initialState = {
    todos: [],
    filter: 'ALL',
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            const last = state.todos[state.todos.length -1];
            
            const id = last ? last.id +1 : 1;
            const newTodo = { 
                id, 
                text: action.text, 
                completed: false
            }

            const todos = state.todos.concat(newTodo);
            return {
                ...state,
                todos,
            };
        case COMPLETE_TODO:
            const index = state.todos.findIndex((todo)=> todo.id === action.id);
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, index),
                    {...state.todos[index], completed: true},
                    ...state.todos.slice(index + 1),
                ]
            };
        case FILTER_TODO:
            return {
                ...state,
                filter: action.filter,
            }
        default:
            return state;
    }
}