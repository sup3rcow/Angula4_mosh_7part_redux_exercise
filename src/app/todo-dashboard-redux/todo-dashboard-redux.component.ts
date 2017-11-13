import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { CLEAR_TODOS } from '../actions';

@Component({
  selector: 'app-todo-dashboard-redux',
  templateUrl: './todo-dashboard-redux.component.html',
  styleUrls: ['./todo-dashboard-redux.component.css']
})
export class TodoDashboardReduxComponent {

  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }

}
