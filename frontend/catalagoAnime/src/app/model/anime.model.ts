export interface Jpg {
  image_url: string;
}
export interface Images{
  jpg: Jpg;

}

export interface Anime {
  title: string;
  images: Images;

}
export interface AnimeResponse {
  data: Anime[];
}
