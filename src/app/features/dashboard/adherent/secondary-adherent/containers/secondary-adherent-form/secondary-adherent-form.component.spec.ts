import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAdherentFormComponent } from './secondary-adherent-form.component';

describe('SecondaryAdherentFormComponent', () => {
  let component: SecondaryAdherentFormComponent;
  let fixture: ComponentFixture<SecondaryAdherentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryAdherentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryAdherentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
