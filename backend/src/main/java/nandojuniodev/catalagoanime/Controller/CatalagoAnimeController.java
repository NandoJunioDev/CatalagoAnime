package nandojuniodev.catalagoanime.Controller;

import lombok.RequiredArgsConstructor;
import nandojuniodev.catalagoanime.Service.CatalagoAnimeService;
import nandojuniodev.catalagoanime.dtos.response.ClienteAnimeDtoResponse;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*")
@RequestMapping("/animes")
@RestController
@RequiredArgsConstructor

public class CatalagoAnimeController {


    private final CatalagoAnimeService catalagoAnimeService;


    @GetMapping()
   public ClienteAnimeDtoResponse  buscarAnime(){
        return catalagoAnimeService.buscarTodosAnime();
    }
}
