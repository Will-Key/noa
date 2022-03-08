import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdherentComponent } from './principal-adherent.component';

describe('PrincipalAdherentComponent', () => {
  let component: PrincipalAdherentComponent;
  let fixture: ComponentFixture<PrincipalAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
