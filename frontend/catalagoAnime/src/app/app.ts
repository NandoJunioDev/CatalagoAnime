import { CommonModule } from '@angular/common';
import { Component, signal,inject,OnInit,   } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Animeservice } from './service/animeservice';
import { Anime } from './model/anime.model';
import { Cards } from "./cards/cards";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ],
  templateUrl: './app.html',


  styleUrl: './app.scss'
})
export class App implements OnInit {
  private animeservice = inject(Animeservice);
  private route = inject(ActivatedRoute);
  animes:Anime[] = [];

  ngOnInit() {
    this.animeservice.listarAnimes().subscribe(response => {

      const idDaRota = this.route.snapshot.paramMap.get('id');
      console.log('ID da rota:', idDaRota);

      this.animes = response.data; // Pega a lista de dentro da "caixona"


    });
  }
}
