package nandojuniodev.catalagoanime.Controller;

import lombok.RequiredArgsConstructor;
import nandojuniodev.catalagoanime.Service.CatalagoAnimeService;
import nandojuniodev.catalagoanime.Service.SingleAnimeService;
import nandojuniodev.catalagoanime.dtos.response.ClienteAnimeDtoResponse;
import nandojuniodev.catalagoanime.dtos.response.SingleAnimeDtoResponse;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RequestMapping("/anime")
@RestController
@RequiredArgsConstructor

public class CatalagoAnimeController {


    private final CatalagoAnimeService catalagoAnimeService;
    private final SingleAnimeService singleAnimeService;


    @GetMapping()
   public ClienteAnimeDtoResponse  buscarAnime(){
        return catalagoAnimeService.buscarTodosAnime();
    }

    @GetMapping("/{id}")
    public SingleAnimeDtoResponse buscarAnime(@PathVariable("id") Integer  id){
        return singleAnimeService.listarUnicoAnime(id);
    }
}
