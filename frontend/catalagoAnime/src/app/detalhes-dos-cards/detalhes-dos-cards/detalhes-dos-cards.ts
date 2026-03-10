
import { Component, inject,  OnInit } from '@angular/core';
import { Animeservice } from '../../service/anime-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalhes-dos-cards',
  imports: [],
  templateUrl: './detalhes-dos-cards.html',
  styleUrl: './detalhes-dos-cards.scss',
})
export class DetalhesDosCards implements OnInit {
   private router = inject(Router)
   voltarParaHome(){
    this.router.navigate(['/home'])
   }




  animeSelecionado:any;

  ngOnInit(): void {

     const id = Number(this.route.snapshot.paramMap.get('id'))
     this.animeService.listarAnimePorId(id).subscribe({
      next:(response) => {
        this.animeSelecionado = response
        console.log('dados do anime recebido', this.animeSelecionado);

      },

      error:(err) =>{
        console.log('ops, Erro ao buscar o anime', err);

      }

     })
  }
  private animeService = inject(Animeservice) // INJETEMOS AQUI  O SERVICE QUE CRIAMOS
  // NELE TEM A FUNÇÃO PARA BUSCAR O ID
  private route = inject(ActivatedRoute) // NESSA  INJENÇÃO CHAMAMOS O ACTIVATEROUTER, PARA PEGAMOS O ID QUE VEM PELA URL


}
