import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaContenidoComponent } from './vista-contenido.component';

describe('VistaContenidoComponent', () => {
  let component: VistaContenidoComponent;
  let fixture: ComponentFixture<VistaContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaContenidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
