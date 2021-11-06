import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGramaticaComponent } from './listar-gramatica.component';

describe('ListarGramaticaComponent', () => {
  let component: ListarGramaticaComponent;
  let fixture: ComponentFixture<ListarGramaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGramaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGramaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
