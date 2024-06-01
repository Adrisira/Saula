import { Component, Input, OnInit} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from '../../_services/contenido.service';
import { FormsModule } from '@angular/forms';
import { Contenido } from '../../_interfaces/contenido';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css',
})
export class ContenidoComponent implements Contenido, OnInit {
  id: number = 0;
  titulo: string = '';
  enlace: string = '';
  video: string = '';
  foto: string = '';
  descripcion: string = '';
  orden: number = 0;
  @Input() idCurso: number = 0;
  constructor (
    private route: ActivatedRoute,
    private contenidoService: ContenidoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCurso = +params['id'];
    })
  }

  public crearContenido() :void{
    const contenido = {
      titulo : this.titulo,
      enlace : this.enlace,
      video : this.video,
      foto : this.foto,
      descripcion : this.descripcion,
      orden : this.orden,
      idCurso : this.idCurso
    }
    console.log(contenido)

    this.contenidoService.crearContenido(contenido).subscribe((data) => {

    })
  }

  public navegarContenido(): void {
    this.router.navigate(['../vistaContenidos', this.idCurso])
  }

  
}
