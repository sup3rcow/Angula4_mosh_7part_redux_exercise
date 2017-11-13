import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';

@Component({
  selector: 'app-todo-list-redux',
  templateUrl: './todo-list-redux.component.html',
  styleUrls: ['./todo-list-redux.component.css']
})
export class TodoListReduxComponent {
  @select() todos;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addTodo(input) {
    if (!input.value) {
      return;
    }

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
