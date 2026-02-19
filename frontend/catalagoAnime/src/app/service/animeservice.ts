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

  listarAnimes() {
    return this.http.get<AnimeResponse>(this.apiUrl);
  }
  listarAnimePorId(id: number) {
    return this.http.get<AnimeResponse>(`${this.apiUrl}/${id}`);
  }
}
