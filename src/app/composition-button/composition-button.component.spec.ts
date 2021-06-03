import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionButtonComponent } from './composition-button.component';

describe('CompositionButtonComponent', () => {
  let component: CompositionButtonComponent;
  let fixture: ComponentFixture<CompositionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
