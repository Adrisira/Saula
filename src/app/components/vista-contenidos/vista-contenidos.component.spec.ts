import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaContenidosComponent } from './vista-contenidos.component';

describe('VistaContenidosComponent', () => {
  let component: VistaContenidosComponent;
  let fixture: ComponentFixture<VistaContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaContenidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
