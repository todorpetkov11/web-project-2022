import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadCommentsItemComponent } from './thread-comments-item.component';

describe('ThreadCommentsItemComponent', () => {
  let component: ThreadCommentsItemComponent;
  let fixture: ComponentFixture<ThreadCommentsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadCommentsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadCommentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
