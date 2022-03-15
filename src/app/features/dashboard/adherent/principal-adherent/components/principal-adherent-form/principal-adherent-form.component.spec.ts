import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdherentFormComponent } from './principal-adherent-form.component';

describe('PrincipalAdherentFormComponent', () => {
  let component: PrincipalAdherentFormComponent;
  let fixture: ComponentFixture<PrincipalAdherentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAdherentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAdherentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
