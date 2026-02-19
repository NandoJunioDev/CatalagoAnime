import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Rota } from '../service/rota';



export const guardGuard: CanActivateFn = (route, state,) => {

  console.log('Guard ativado para a rota:', state.url);
  const obterStatus = inject(Rota).obterStatus();
  const router = inject(Router);
  console.log('Status de autorização:', obterStatus);
  if(obterStatus){
    return true;

  }else{
    router.navigate(['/login']);
    return false;
  }
};
