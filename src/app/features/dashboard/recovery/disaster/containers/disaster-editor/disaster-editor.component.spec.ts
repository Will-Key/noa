import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterEditorComponent } from './disaster-editor.component';

describe('DisasterEditorComponent', () => {
  let component: DisasterEditorComponent;
  let fixture: ComponentFixture<DisasterEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
