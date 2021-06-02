import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GongratMessageComponent } from './gongrat-message.component';

describe('GongratMessageComponent', () => {
  let component: GongratMessageComponent;
  let fixture: ComponentFixture<GongratMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GongratMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GongratMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
