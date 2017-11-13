import { ADD_TODO } from './actions';
import {tassign } from 'tassign';


export interface IAppState {
    todos: any[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
};

export function rootReducer(state: IAppState, action) {
    switch (action.type) {
        case ADD_TODO:
        let newTodo = { id: this.todos.length + 1, title: action.title };
        return tassign(state,
            {
                todos: state.todos.concat(newTodo),
                lastUpdate : new Date()
            }
        );
    }
}
