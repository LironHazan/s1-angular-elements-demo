import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillyButtonComponent } from './silly-button.component';

describe('SillyButtonComponent', () => {
  let component: SillyButtonComponent;
  let fixture: ComponentFixture<SillyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
