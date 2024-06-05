import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContenidoService } from '../../_services/contenido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contenido } from '../../_interfaces/contenido';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-vista-contenido',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vista-contenido.component.html',
  styleUrl: './vista-contenido.component.css'
})
export class VistaContenidoComponent implements OnInit, Contenido{
    id : number = 0
    titulo : string = ""
    enlace : string = ""
    video : string = ""
    foto : string = ""
    descripcion : string = ""
    orden : number = 0
    idCurso : number = 0
    @Output() cursoSeleccionado = new EventEmitter<number>();
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private contenidoService : ContenidoService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.cargarDatos(this.id)
    });

    
  }


  cargarDatos(id : number){
    this.contenidoService.getContenido(id).subscribe((data) => {
      this.id = data.id
      this.titulo = data.titulo
      this.enlace = data.enalce
      this.video = data.video
      this.foto = data.foto
      this.descripcion = data.descripcion
      this.orden = data.orden
      this.idCurso = data.curso.id
    })
  }

  modifyContenido() : void {
    const contenido = {
      id : this.id,
      titulo : this.titulo,
      enlance : this.enlace,
      video : this.video,
      foto : this.foto,
      descripcion : this.descripcion,
      idCurso : this.idCurso
    }
    console.log(contenido)
    this.contenidoService.modifyContenido(this.id, contenido).subscribe((data) => {
      this.naviagteContenidos()
    })
  }

  naviagteContenidos(){
    this.cursoSeleccionado.emit(this.idCurso);
    this.router.navigate(['../vistaContenidos', this.idCurso]);
  }
}