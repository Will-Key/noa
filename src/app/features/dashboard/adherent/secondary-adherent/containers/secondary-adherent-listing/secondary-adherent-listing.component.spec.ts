import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAdherentListingComponent } from './secondary-adherent-listing.component';

describe('SecondaryAdherentListingComponent', () => {
  let component: SecondaryAdherentListingComponent;
  let fixture: ComponentFixture<SecondaryAdherentListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryAdherentListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryAdherentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
