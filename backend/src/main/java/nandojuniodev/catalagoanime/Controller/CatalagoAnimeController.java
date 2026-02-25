package nandojuniodev.catalagoanime.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

import io.swagger.v3.oas.annotations.tags.Tag;
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
    @Tag(name= " /Animes ", description = "end-point para consulta e alteração dos titulos do anime ")
    @Operation(summary = " Mostra todos os titulos do anime na API ", description = "Consome os dados da APi, e trazendo os Dados")
    @ApiResponse(responseCode = "200", description = "Anime encontrado com sucesso")
   public ClienteAnimeDtoResponse  buscarAnime(){
        return catalagoAnimeService.buscarTodosAnime();
    }

    @Tag(name = "/Animes/{id}", description = "end-point para consulta de um anime especifico, passando o ID")
    @Operation(summary = "Mostra apenas o titulo passado no paramentro", description = "Retona o anime especificado com ID")
    @ApiResponse(responseCode = "200", description = " ID encontrado com sucesso")
    @ApiResponse(responseCode =  "404", description = " ID não encontrado ")
    @GetMapping("/{id}")
    public SingleAnimeDtoResponse buscarAnime(@PathVariable("id") Integer  id){
        return singleAnimeService.listarUnicoAnime(id);
    }
}
