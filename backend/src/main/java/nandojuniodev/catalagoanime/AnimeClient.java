package nandojuniodev.catalagoanime;

import nandojuniodev.catalagoanime.dtos.response.ClienteAnimeDtoResponse;
import nandojuniodev.catalagoanime.dtos.response.SingleAnimeDtoResponse;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@EnableFeignClients
@FeignClient( name = "jikanApi", url = "https://api.jikan.moe/v4")
public interface AnimeClient {
    @GetMapping("/anime")
    public ClienteAnimeDtoResponse helloJikanApi();


    @GetMapping("/anime/{id}")
    public SingleAnimeDtoResponse animeId( @PathVariable Integer id );


}
