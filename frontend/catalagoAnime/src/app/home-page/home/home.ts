import { Component, inject, OnInit } from '@angular/core';
import { Animeservice } from '../../service/anime-service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Anime } from '../../model/anime.model';
import { CommonModule } from '@angular/common';
import { DetalhesDosCards } from '../../detalhes-dos-cards/detalhes-dos-cards/detalhes-dos-cards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, DetalhesDosCards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  private animeservice = inject(Animeservice);
  private route = inject(ActivatedRoute);
  
  animes: Anime[] = []; 

  ngOnInit(): void {
    // 1. Capturar o ID da rota (executado de forma síncrona logo que o componente inicia)
    const idDaRota = this.route.snapshot.paramMap.get('id');
    console.log('ID capturado da rota:', idDaRota);

    // 2. Fazer a chamada à API apenas uma vez
    this.animeservice.listarAnimes().subscribe({
      next: (response) => {
        // Atribui os dados à variável que vai renderizar o HTML
        this.animes = response.data;
        console.log('Animes carregados:', this.animes);
      },
      error: (erro) => {
        console.error('Erro ao carregar a lista de animes:', erro);
      }
    });
  }
}