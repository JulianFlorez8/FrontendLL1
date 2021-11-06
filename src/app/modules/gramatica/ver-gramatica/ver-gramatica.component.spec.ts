import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGramaticaComponent } from './ver-gramatica.component';

describe('VerGramaticaComponent', () => {
  let component: VerGramaticaComponent;
  let fixture: ComponentFixture<VerGramaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerGramaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGramaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
