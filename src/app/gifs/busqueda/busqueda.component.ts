import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //Diferente forma de obtener referencias a objetos HTML. Decorador @ViewChild 
  //! Usado para afirmar que el operando no es nulo more information: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  @ViewChild('inputSearch') inputSearch!:ElementRef<HTMLInputElement>;

  search(){
    const value = this.inputSearch.nativeElement.value;
    console.log(value);
    this.inputSearch.nativeElement.value = "";
  }

}
