import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsEnLigneComponent } from './hors-en-ligne.component';

describe('HorsEnLigneComponent', () => {
  let component: HorsEnLigneComponent;
  let fixture: ComponentFixture<HorsEnLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorsEnLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
