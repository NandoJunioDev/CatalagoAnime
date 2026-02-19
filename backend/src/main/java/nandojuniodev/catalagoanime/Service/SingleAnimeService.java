package nandojuniodev.catalagoanime.Service;

import lombok.RequiredArgsConstructor;
import nandojuniodev.catalagoanime.AnimeClient;
import nandojuniodev.catalagoanime.dtos.response.ClienteAnimeDtoResponse;
import nandojuniodev.catalagoanime.dtos.response.SingleAnimeDtoResponse;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SingleAnimeService {

    private final AnimeClient animeClient;

    public SingleAnimeDtoResponse  listarUnicoAnime(Integer id){
        return animeClient.animeId(id);
    }
}
