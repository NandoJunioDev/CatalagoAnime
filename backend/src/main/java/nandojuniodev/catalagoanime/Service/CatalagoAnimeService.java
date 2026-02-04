package nandojuniodev.catalagoanime.Service;


import lombok.RequiredArgsConstructor;
import nandojuniodev.catalagoanime.AnimeClient;
import nandojuniodev.catalagoanime.dtos.response.ClienteAnimeDtoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@RequiredArgsConstructor
@Service
public class CatalagoAnimeService
{
  private final AnimeClient animeClient;


    public ClienteAnimeDtoResponse buscarTodosAnime(){
        return animeClient.helloJikanApi();
    }


}
