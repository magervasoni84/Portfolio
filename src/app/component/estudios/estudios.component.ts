import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent implements OnInit {

  public educacion:Educacion[]=[];
  public editEducacion:Educacion | undefined;
  public deleteEducacion:Educacion | undefined;
  
  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion():void{
    this.educacionService.getEduc().subscribe({
      next:(Response: Educacion[]) => {
        this.educacion=Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, educacion?: Educacion):void{
    const container=document.getElementById('main-container');  
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    
    if(mode === 'add'){
      button.setAttribute('data-target','#addEducacionModal');
    }else if(mode === 'delete'){
      this.deleteEducacion=educacion;
      button.setAttribute('data-target','#deleteEducacionModal');
    }else if(mode === 'edit'){
      this.editEducacion=educacion;
      button.setAttribute('data-target','#editEducacionModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddEducacion(addForm: NgForm){
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.addEduc(addForm.value).subscribe({
      next: (response:Educacion) => {
        console.log(response);
        this.getEducacion();
        addForm.reset();
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateEducacion(educacion: Educacion){
    this.editEducacion=educacion;
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.updateEduc(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteEducacion(idEdu: number):void{
    this.educacionService.deleteEduc(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEducacion();
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
