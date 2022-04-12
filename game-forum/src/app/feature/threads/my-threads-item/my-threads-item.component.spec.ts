import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThreadsItemComponent } from './my-threads-item.component';

describe('MyThreadsItemComponent', () => {
  let component: MyThreadsItemComponent;
  let fixture: ComponentFixture<MyThreadsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyThreadsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThreadsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
