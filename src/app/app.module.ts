import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { TodoListReduxComponent } from './todo-list-redux/todo-list-redux.component';
import { TodoDashboardReduxComponent } from './todo-dashboard-redux/todo-dashboard-redux.component';

import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoListReduxComponent,
    TodoDashboardReduxComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

    let enhancers = devTools ? [devTools.enhancer()] : []; // korisits samo ako si u development modu

    // jer koristis DevTools, treci parametar je middleware, njega ne koristis pa ubacis
    // u cetvrti parametar ide DevTools extension
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
