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
        return tassign(state,
            {
                todos: state.todos.concat(state),
                lastUpdate : new Date()
            }
        );
    }
}
