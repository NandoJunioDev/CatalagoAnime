package nandojuniodev.catalagoanime;

import nandojuniodev.catalagoanime.dtos.response.ClienteAnimeDtoResponse;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
@EnableFeignClients
@FeignClient( name = "jikanApi", url = "https://api.jikan.moe/v4")
public interface AnimeClient {
    @GetMapping("/anime")
    public ClienteAnimeDtoResponse helloJikanApi();


}
