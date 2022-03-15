import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdherentListingComponent } from './principal-adherent-listing.component';

describe('PrincipalAdherentListingComponent', () => {
  let component: PrincipalAdherentListingComponent;
  let fixture: ComponentFixture<PrincipalAdherentListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAdherentListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAdherentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
