export class contacto{
    id?: number;    
    nombre: String;
    email: String;
    texto: String;

    constructor(nombre: String, email: String, texto: String){
        this.nombre = nombre;
        this.email = email;
        this.texto = texto;
    }
}