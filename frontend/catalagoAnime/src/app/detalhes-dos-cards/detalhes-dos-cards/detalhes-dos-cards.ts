
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
   private router = inject(Router) // INJETAMOS O ROUTER PARA PODER USAR O NAVEGATE PARA VOLTAR PARA A HOME
   voltarParaHome(){ // função para voltar para a home
    this.router.navigate(['/home']) // aqui usamos o navigate para navegar para a rota home
   }




  animeSelecionado:any; // variavel para armazenar os dados do anime selecionado, o any é para dizer que pode ser qualquer tipo de dado, pois não sabemos o formato dos dados que vem da api

  ngOnInit(): void {

     const id = Number(this.route.snapshot.paramMap.get('id')) // aqui pegamos id da url, usando o snapshot para pegar o valor do id o numeber no começo era pra fazer um cast para number, pois o id vem como string da url, e precisamos converter para number para usar na função de buscar o anime por id

     // aqui usamos o service para buscar o anime do id, la na rota/urldo detalhes/id, o subscribe é para pegar a resposta da api, o next é quando der tudo certo na resposta da api 
     this.animeService.listarAnimePorId(id).subscribe({
      next:(response) => { // next é quando der tudo certo na resposta da api, o response é a resposta da api, que é o anime selecionado
        this.animeSelecionado = response // aqui pegamos a resposta da api, e colocamos na variavel animeSelecionado
        console.log('dados do anime recebido', this.animeSelecionado); // so   o log par averificar 

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
