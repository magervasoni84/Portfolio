import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent implements OnInit {

  public educacion:Educacion[]=[];
  
  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion():void{
    this.educacionService.getEduc().subscribe({
      next: (Response: Educacion[]) =>{
        this.educacion=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
