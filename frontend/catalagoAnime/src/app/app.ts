import { CommonModule } from '@angular/common';
import { Component, signal,inject,OnInit,   } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animeservice } from './service/animeservice';
import { Anime } from './model/anime.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',


  styleUrl: './app.scss'
})
export class App implements OnInit {
  private animeservice = inject(Animeservice);
  animes:Anime[] = [];

  ngOnInit() {
    this.animeservice.listarAnimes().subscribe(response => {


      this.animes = response.data; // Pega a lista de dentro da "caixona"
    });
  }
}
