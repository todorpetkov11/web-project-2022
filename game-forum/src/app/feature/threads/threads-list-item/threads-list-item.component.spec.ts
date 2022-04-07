import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsListItemComponent } from './threads-list-item.component';

describe('ThreadsListItemComponent', () => {
  let component: ThreadsListItemComponent;
  let fixture: ComponentFixture<ThreadsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
