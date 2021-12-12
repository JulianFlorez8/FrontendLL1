import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramticaLRARComponent } from './gramtica-lrar.component';

describe('GramticaLRARComponent', () => {
  let component: GramticaLRARComponent;
  let fixture: ComponentFixture<GramticaLRARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GramticaLRARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GramticaLRARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
