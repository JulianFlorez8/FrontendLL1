import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramticaL0Component } from './gramtica-l0.component';

describe('GramticaL0Component', () => {
  let component: GramticaL0Component;
  let fixture: ComponentFixture<GramticaL0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GramticaL0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GramticaL0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
