import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAdherentForm } from './secondary-adherent-form.component';

describe('SecondaryAdherentFormComponent', () => {
  let component: SecondaryAdherentForm;
  let fixture: ComponentFixture<SecondaryAdherentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryAdherentForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryAdherentForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
