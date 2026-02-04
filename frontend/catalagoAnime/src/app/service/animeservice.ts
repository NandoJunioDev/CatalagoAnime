import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimeResponse } from '../model/anime.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Animeservice {

  private http = inject(HttpClient);
  private  readonly  apiUrl = `${environment.apiUrl}/animes`;

  listarAnimes() {
    return this.http.get<AnimeResponse>(this.apiUrl);
  }
}
