import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { ContenidoService } from '../../_services/contenido.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink , Router} from '@angular/router';

@Component({
  selector: 'app-vista-contenidos',
  standalone: true,
  imports: [NgIf, NgFor, MatButtonModule, RouterLink],
  templateUrl: './vista-contenidos.component.html',
  styleUrl: './vista-contenidos.component.css',
})
export class VistaContenidosComponent implements OnInit {
  contenidos: any[] = [];
  @Input() cursoId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private contenidoService: ContenidoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cursoId = +params['id'];
    });
    this.cargaContenidos();
  }

  private cargaContenidos(): void {
    this.contenidoService
      .getContenidoCurso(this.cursoId)
      .subscribe((data: any) => {
        this.contenidos = data;
      },(error) => {
        console.error('Error al cargar los contenidos', error);
      });
  }

  public navegarContenido(): void {
    this.router.navigate(['../contenido', this.cursoId])
  }
}
