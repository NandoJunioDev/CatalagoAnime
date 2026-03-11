
export interface Single{
  mal_id: number;
}
export interface Jpg {
  image_url: string;
}
export interface Images{
  jpg: Jpg;

}

export interface Anime {
mal_id: any;
  title: string;
  images: Images;

}
export interface AnimeResponse {
  data: Anime[];
}
// model do back end , e como funciona json
// aqui nesse model, pe espelho do json, que vem da APi do Jikan
