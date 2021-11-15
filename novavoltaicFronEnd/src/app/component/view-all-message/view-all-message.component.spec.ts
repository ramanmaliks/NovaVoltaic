import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMessageComponent } from './view-all-message.component';

describe('ViewAllMessageComponent', () => {
  let component: ViewAllMessageComponent;
  let fixture: ComponentFixture<ViewAllMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
