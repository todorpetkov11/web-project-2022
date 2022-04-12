import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadCommentsComponent } from './thread-comments.component';

describe('ThreadCommentsComponent', () => {
  let component: ThreadCommentsComponent;
  let fixture: ComponentFixture<ThreadCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
