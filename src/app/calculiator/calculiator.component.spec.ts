import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculiatorComponent } from './calculiator.component';

describe('CalculiatorComponent', () => {
  let component: CalculiatorComponent;
  let fixture: ComponentFixture<CalculiatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculiatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculiatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
