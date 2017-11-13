import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgnAlertComponent } from './ngn-alert.component';

describe('NgnAlertComponent', () => {
  let component: NgnAlertComponent;
  let fixture: ComponentFixture<NgnAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgnAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgnAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
