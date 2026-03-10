

import { Cards } from './cards/cards';
import { Routes } from '@angular/router';


import { inject } from '@angular/core';

import { DetalhesDosCards } from './detalhes-dos-cards/detalhes-dos-cards/detalhes-dos-cards';
import { Home } from './home-page/home/home';



export const routes: Routes = [
  {
    path:"home", component:Home, pathMatch:'full'
  },
  {
    path:"detalhes/:id", component:DetalhesDosCards, pathMatch:'full'

  },
  {
    path:"**", redirectTo:'home'
  }



];
