import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListReduxComponent } from './todo-list-redux.component';

describe('TodoListReduxComponent', () => {
  let component: TodoListReduxComponent;
  let fixture: ComponentFixture<TodoListReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
