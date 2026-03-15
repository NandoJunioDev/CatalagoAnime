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

  private route = inject(ActivatedRoute);// injenção do AcivatedRouted, quer vai o observar a rota
  animes:Anime[] = []; // array do tipo Anime, o Anime é model dos dados



  ngOnInit():void {

    // aqui chamoos o service o hook inicializador, e dentro dele fazemos a chamada no service, e da mos subscribe para pegar a resposta, e dentro do subscribe pegamos a resposta e colocamos na variavel animes, que é um array de anime, e dentro do response tem uma propriedade data, que é onde esta a lista de animes, entao pegamos essa lista e colocamos na variavel animes, para depois usar ela no html.

    this.animeservice.listarAnimes().subscribe((response) => {
      this.animes = response.data;


// aqui chamos o service e funçao que ira, realizar as consulta
// o .subscribe serve para ligar a a funçao
// reponse sera a variavel, auxiliar
    this.animeservice.listarAnimes().subscribe(response => {

      // aqui atribuimos o o valor a variavel que sebera a o id atraves dos dados que vao chegar
// route(o instancia do activedrouter), .snapshot( funçao na qual pegamos o valor atual da rota)
      const idDaRota = this.route.snapshot.paramMap.get('id');
      console.log('ID da rota:', idDaRota);



       // aqui pegamos a resposta da api, e colocamos na variavel animes, que é um array de anime, e dentro do response tem uma propriedade data, que é onde esta a lista de animes, entao pegamos essa lista e colocamos na variavel animes, para depois usar ela no html.

    });
  }
)}
}

