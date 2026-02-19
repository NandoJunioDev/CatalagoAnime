import { Component } from '@angular/core';
import { Rota } from '../../service/rota';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor( private service:Rota) {}
  botaoLogin(){
    console.log('clicou no botao de login');
    if(this.service.obterStatus()){
      this.service.desautorizar();
    }else{
      this.service.autorizar();
    }
  }

  obterDescricaoLoginStatus(){

     return this.service.obterStatus() ? 'AUTORIZADO' : 'NÃO AUTORIZADO';
    console.log('obterDescricaoLoginStatus', this.service.obterStatus());
  }
}
