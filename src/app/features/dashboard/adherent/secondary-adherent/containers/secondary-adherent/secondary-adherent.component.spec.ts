import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAdherentComponent } from './secondary-adherent.component';

describe('SecondaryAdherentComponent', () => {
  let component: SecondaryAdherentComponent;
  let fixture: ComponentFixture<SecondaryAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
