import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Rota {

  autorizar(){
    localStorage.setItem('autorizado', 'true');

  }
  desautorizar(){
    localStorage.clear();
  }
  obterStatus = () => !!localStorage.getItem('autorizado') 

}
