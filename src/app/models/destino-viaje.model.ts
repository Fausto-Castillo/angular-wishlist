import { ThrowStmt } from '@angular/compiler';

export class DestinoViaje {
 nombre:string;
 imagenUrl:string;

 constructor(n:string ,i:string ){
     this.nombre = n;
     this.imagenUrl = i;
 }
}