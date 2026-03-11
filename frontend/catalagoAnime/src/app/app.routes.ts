

import { Cards } from './cards/cards';
import { Routes } from '@angular/router';


import { inject } from '@angular/core';

import { DetalhesDosCards } from './detalhes-dos-cards/detalhes-dos-cards/detalhes-dos-cards';
import { Home } from './home-page/home/home';



export const routes: Routes = [
  {
    path:"home", component:Home, pathMatch:'full' // rota para a pagina home
  },
  {
    path:"detalhes/:id", component:DetalhesDosCards, pathMatch:'full' // rota para pagina de id anime

  },
  {
    path:"**", redirectTo:'home' // caso der  tudo erro volta  para o principal
  }



];
