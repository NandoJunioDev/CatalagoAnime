import { guardGuard } from './guard/guard-guard';

import { Cards } from './cards/cards';
import { Routes } from '@angular/router';


import { inject } from '@angular/core';
import { Login } from './rotaLogin/login/login';
import { Private } from './rotaPrivada/private/private';
import { Public } from './rotaPublica/public/public';



export const routes: Routes = [
  { path: '', redirectTo: 'detalhes', pathMatch: 'full' },

  {
    path:'detalhes',
    component:Cards,
    pathMatch:'full',
    title:'Detalhes do Anime'

  },
  {
    path:'login',
    component:Login,
    pathMatch:'full',
    title:'pagina de login'
  },
  {
    path:'privado',
    
    component:Private,
    pathMatch:'full',
    title:'pagina privada',
    canActivate: [guardGuard],

  },
  {
    path:'publico',
    component:Public,
    pathMatch:'full',
    title:'pagina publica'
  }


];
