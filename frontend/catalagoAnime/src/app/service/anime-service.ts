import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimeResponse } from '../model/anime.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Animeservice {

  private http = inject(HttpClient);
  private  readonly  apiUrl = `${environment.apiUrl}/anime`;
  private http = inject(HttpClient); // injeção do HttpClient para fazer requisições HTTP
  private  readonly  apiUrl = `${environment.apiUrl}/anime`;  // url da api

  listarAnimes() {
    return this.http.get<AnimeResponse>(this.apiUrl);
    //aqui usamos o metodo http.get, para buscar esse dados,o<AnimeResponse>> é tipo de respoista que esperamos receber, em parenteses é onde buscaremos os dados da api.
    // retorna um observable  do tipo animeResponse , que é uma resposta do  api da lista de anime s
  }
  // função para listar todo anime
  /**
   * Fetches an anime by its ID
   * @param id The ID of the anime to fetch
   * @returns An observable that resolves to an AnimeResponse
   */
  listarAnimePorId(id: number) {
    return this.http.get<AnimeResponse>(`${this.apiUrl}/${id}`); // aqui retorno uma resposta por id unico do anime.
    console.log("chamamos o função que procura o id");

    // função para listar um anime por id
  }

  /**
   * Fetches a list of all animes from the API
   * @returns An observable that resolves to an AnimeResponse
   */
}
