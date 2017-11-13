import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS } from './actions';
import { tassign } from 'tassign';


interface ITodo { // ovako odmah znas sta ocekujes u store-u
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface IAppState {
    todos: ITodo[]; // ovo je lose kad je any[],pa kasnije dodaje propertije gde mu padne na pamet.Bolje definiraj Interfejs(jesi ITodo)
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
};

export function rootReducer(state: IAppState, action) {
    switch (action.type) {
        case ADD_TODO:
        let newTodo = { id: state.todos.length + 1, title: action.title, isCompleted: false };
        return tassign(state,
            {
                todos: state.todos.concat(newTodo),
                lastUpdate : new Date()
            }
        );

        case TOGGLE_TODO:
        let todo = state.todos.find(x => x.id === action.id);
        let index = state.todos.indexOf(todo);
        return tassign(state, {
            todos: [
                ...state.todos.slice(0, index), // ubaci todos do indexa
                tassign(todo, { isCompleted: !todo.isCompleted }), // izmijeni todo
                ...state.todos.slice(index + 1) // ubaci ostale todos
            ],
            lastUpdate: new Date()
        });

        case REMOVE_TODO:
        return tassign(state, {
            todos: state.todos.filter(x => x.id !== action.id),
            lastUpdate: new Date()
        });

        case CLEAR_TODOS:
        return tassign(state, {
            todos: [],
            lastUpdate: new Date()
        });
    }
    return state;
}
