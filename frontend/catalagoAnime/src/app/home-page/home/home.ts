import { Component, inject, OnInit } from '@angular/core';
import { Animeservice } from '../../service/anime-service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Anime } from '../../model/anime.model';
import { CommonModule } from '@angular/common';
import { DetalhesDosCards } from '../../detalhes-dos-cards/detalhes-dos-cards/detalhes-dos-cards';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule, RouterLink, DetalhesDosCards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  private animeservice = inject(Animeservice); // injetamos o service

  private route = inject(ActivatedRoute); // usamos activated route para observar a rota

  animes:Anime[] = []; // array do tipo anime, que é o model que definimos, e aqui vamos lista a resposta da api as lista de animes e depois usar ela no html



  ngOnInit():void {
    // aqui chamoos o service o hook inicializador, e dentro dele fazemos a chamada no service, e da mos subscribe para pegar a resposta, e dentro do subscribe pegamos a resposta e colocamos na variavel animes, que é um array de anime, e dentro do response tem uma propriedade data, que é onde esta a lista de animes, entao pegamos essa lista e colocamos na variavel animes, para depois usar ela no html.

    this.animeservice.listarAnimes().subscribe((response) => {
      this.animes = response.data;


       // aqui pegamos a resposta da api, e colocamos na variavel animes, que é um array de anime, e dentro do response tem uma propriedade data, que é onde esta a lista de animes, entao pegamos essa lista e colocamos na variavel animes, para depois usar ela no html.

    });
  }

}
