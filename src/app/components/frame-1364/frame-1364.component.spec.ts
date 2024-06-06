import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame1364Component } from './frame-1364.component';

describe('Frame1364Component', () => {
  let component: Frame1364Component;
  let fixture: ComponentFixture<Frame1364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frame1364Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Frame1364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
