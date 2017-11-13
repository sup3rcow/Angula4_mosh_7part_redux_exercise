import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardReduxComponent } from './todo-dashboard-redux.component';

describe('TodoDashboardReduxComponent', () => {
  let component: TodoDashboardReduxComponent;
  let fixture: ComponentFixture<TodoDashboardReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDashboardReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDashboardReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
