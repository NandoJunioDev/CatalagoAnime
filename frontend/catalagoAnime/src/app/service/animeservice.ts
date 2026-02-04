import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimeResponse } from '../model/anime.model';
@Injectable({
  providedIn: 'root',
})
export class Animeservice {

  private http = inject(HttpClient);
  private  readonly  apiUrl = 'http://localhost:8080/animes';

  listarAnimes() {
    return this.http.get<AnimeResponse>(this.apiUrl);
  }
}
