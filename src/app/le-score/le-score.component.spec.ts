import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeScoreComponent } from './le-score.component';

describe('LeScoreComponent', () => {
  let component: LeScoreComponent;
  let fixture: ComponentFixture<LeScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
