import { Component, inject, OnInit } from '@angular/core';
import { Animeservice } from '../../service/anime-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-dos-cards',
  imports: [], 
  templateUrl: './detalhes-dos-cards.html',
  styleUrl: './detalhes-dos-cards.scss',
})
export class DetalhesDosCards implements OnInit {
  // 1. Injeções e Variáveis sempre no TOPO da classe
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private animeService = inject(Animeservice);

  animeSelecionado: any; 

  ngOnInit(): void {
    // 2. Substituindo 'snapshot' por 'subscribe' para escutar mudanças na URL
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');

      // 3. Verificando se o ID não é nulo antes de converter para Number
      if (idParam) {
        const id = Number(idParam);

        this.animeService.listarAnimePorId(id).subscribe({
          next: (response) => {
            this.animeSelecionado = response;
            console.log('Dados do anime recebido:', this.animeSelecionado);
          },
          error: (err) => {
            console.error('Ops, Erro ao buscar o anime:', err);
          }
        });
      } else {
        console.error('Nenhum ID foi passado na rota.');
      }
    });
  }

  voltarParaHome() { 
    this.router.navigate(['/home']);
  }
}