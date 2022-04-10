import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterFormComponent } from './disaster-form.component';

describe('DisasterFormComponent', () => {
  let component: DisasterFormComponent;
  let fixture: ComponentFixture<DisasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
