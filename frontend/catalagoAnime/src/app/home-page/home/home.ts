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

   private animeservice = inject(Animeservice);
  private route = inject(ActivatedRoute);
  animes:Anime[] = [];



  ngOnInit():void {
    this.animeservice.listarAnimes().subscribe(response => {

      const idDaRota = this.route.snapshot.paramMap.get('id');
      console.log('ID da rota:', idDaRota);

      this.animes = response.data; // Pega a lista de dentro da "caixona"


    });
  }
}
